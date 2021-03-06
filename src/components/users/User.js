import React, { Fragment, useContext, useEffect } from 'react';
import Loading from '../layout/Loading';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {

  const githubContext = useContext(GithubContext)

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading)
    return (
      <div className='user-loading'>
        <Loading />
      </div>
    );
  return (
    <Fragment>
      <div className='user-container'>
        <Link to='/' className='btn btn-light back'>
          Back to Search
        </Link>
        <span className='hireable'>
          Hireable:{' '}
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}
        </span>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center more-info'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-light'>Following: {following}</div>
          <div className='badge badge-danger'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </div>
      <div className='repos-list'>
        <div className='card'>
          <Repos repos={repos} />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
