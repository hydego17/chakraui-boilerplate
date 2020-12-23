/**
 *
 * ReposList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Spinner } from '@chakra-ui/react';

// import List from 'components/List';
// import ListItem from 'components/ListItem';

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <Spinner />;
  }

  if (error !== false) {
    return <Box>Something Went Wrong</Box>;
  }

  if (repos !== false) {
    return (
      <>
        <Box py={6}>
          {repos.map(repo => (
            <Box key={repo.id}>
              <Text>{repo.full_name} </Text>
            </Box>
          ))}
        </Box>
      </>
    );
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default ReposList;
