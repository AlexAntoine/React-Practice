import React from 'react';
import RepoItem from './RepoItem'

export const repos = ({repos}) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}


export default repos;
