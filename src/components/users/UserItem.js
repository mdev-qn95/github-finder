import React, { Component } from 'react';

export class UserItem extends Component {
  state = {
    id: 'id',
    login: 'mdev-qn95',
    avatar_url: 'https://avatars.githubusercontent.com/u/53930666?v=4',
    html_url: 'https://github.com/mdev-qn95',
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className='container'>
        <div className='card text-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '100px' }}
          ></img>
          <h3>{login}</h3>
          <div>
            <a href={html_url} className='btn btn-dark my-1'>
              More
            </a>
          </div>
        </div>
        <div className='card text-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '100px' }}
          ></img>
          <h3>{login}</h3>
          <div>
            <a href={html_url} className='btn btn-dark my-1'>
              More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
