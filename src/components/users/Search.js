import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from'../../context/github/githubContext'

const Search = ({ showClear, clearUsers, setAlert }) => {
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
          {showClear && (
            <button className='btn btn-light btn-block' onClick={clearUsers}>
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
