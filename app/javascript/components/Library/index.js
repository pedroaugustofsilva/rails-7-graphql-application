import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const LibraryQuery = gql`
  {
    libraryItems {
      id
      title
      user {
        id
      }
    }
  }
`;

export default () => (
  <Query query={LibraryQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? 'loading...'
          : data.libraryItems.map(({ title, id, user }) => (
            <div key={id}>
              <b>{title}</b> {user ? `added by ${user.email}` : null}
            </div>
          ))}
      </div>
    )}
  </Query>
);