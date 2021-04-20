import React, { useContext } from 'react';
import UserItem from './UserItem';
import Loading from '../layout/Loading';
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='container'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
