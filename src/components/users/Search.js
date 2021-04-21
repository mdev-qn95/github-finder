import React, { useContext, useState } from 'react';
import GithubContext from'../../context/github/githubContext'
import AlertContext from'../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something ...', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='search-user'>
      <form onSubmit={onSubmit} className='form'>
        <div className={githubContext.users.length > 0 ? 'list-data search-form' : 'search-form'}>
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

export default Search;
