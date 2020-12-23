/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import Proptypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import {
  Box,
  Heading,
  Divider,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import ReposList from 'components/ReposList';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <>
      {/* Header */}
      <Box maxW="xl">
        <Heading as="h1" py={6}>
          <FormattedMessage {...messages.header} />
        </Heading>
        <Text>
          <FormattedMessage {...messages.description} />
        </Text>
      </Box>

      <Divider my={6} />

      <Box maxW="xl">
        <Heading as="h2" size="lg" py={6}>
          <FormattedMessage {...messages.instruction} />
        </Heading>

        {/* Input User */}
        <Box as="form" onSubmit={onSubmitForm}>
          <FormControl id="username">
            <FormLabel>Input github User</FormLabel>
            <Input
              type="search"
              value={username}
              onChange={onChangeUsername}
              placeholder="hydego17"
            />
          </FormControl>
        </Box>

        {/* Resposlist */}

        <ReposList {...reposListProps} />
      </Box>
    </>
  );
}

HomePage.propTypes = {
  loading: Proptypes.bool,
  error: Proptypes.oneOfType([Proptypes.object, Proptypes.bool]),
  repos: Proptypes.oneOfType([Proptypes.array, Proptypes.bool]),
  onSubmitForm: Proptypes.func,
  username: Proptypes.string,
  onChangeUsername: Proptypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: e => dispatch(changeUsername(e.target.value)),
    onSubmitForm: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
