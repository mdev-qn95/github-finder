import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
