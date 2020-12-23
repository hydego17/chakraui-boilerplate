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
    return (
      <Box rounded="lg" my={6} py={6} px={4} border="1px solid #ededed">
        <Spinner />
      </Box>
    );
  }

  if (error !== false) {
    return (
      <Box rounded="lg" my={6} py={6} px={4} border="1px solid #ededed">
        <Text fontSize="sm" fontWeight="semibold">
          Something went wrong, please try again
        </Text>
      </Box>
    );
  }

  if (repos !== false) {
    return (
      <>
        <Box
          rounded="lg"
          my={6}
          py={6}
          px={4}
          border="1px solid #ededed"
          maxH="30em"
          overflowY="auto"
        >
          {repos.map(repo => (
            <Box key={repo.id} py={2} borderBottom="1px solid #ededed">
              <Text fontSize="sm" fontWeight="semibold">
                {repo.full_name}{' '}
              </Text>
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
