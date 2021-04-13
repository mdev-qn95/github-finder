import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  getData = async () => {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
