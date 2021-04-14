import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  };

  // Search Gitbub users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text} &
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} &
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
