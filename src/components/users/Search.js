import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from'../../context/github/githubContext'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something ...', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='search-user'>
      <form onSubmit={onSubmit} className='form'>
        <div className='search-form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
          {githubContext.users.length > 0 && (
            <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
