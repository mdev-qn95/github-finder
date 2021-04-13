import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mdev-qn95',
        avatar_url: 'https://avatars.githubusercontent.com/u/53930666?v=4',
        html_url: 'https://github.com/mdev-qn95',
      },
      {
        id: '2',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: '4',
        login: 'wycats',
        avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats',
      },
      {
        id: '5',
        login: 'ivey',
        avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
        html_url: 'https://github.com/ivey',
      }
    ],
  };
  render() {
    return (
      <div className='container'>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
