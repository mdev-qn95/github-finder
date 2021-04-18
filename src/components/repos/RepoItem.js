import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      className={`btn btn-${
        repoColor[Math.floor(Math.random() * repoColor.length)]
      }`}
    >
      {repo.name}
    </a>
  );
};

const repoColor = ['success', 'primary', 'dark', 'danger'];

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
