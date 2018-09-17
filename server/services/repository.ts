import {Repository} from 'nodegit';
const repoPath = 'https://github.com/Zmingg/api-repository.git';

export default class RepositoryService {

  constructor(){}

  async list() {
    console.log(repoPath)
    const repo: Repository = await Repository.open(repoPath);
    return repo;
  }
}