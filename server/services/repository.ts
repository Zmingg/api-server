import {Repository} from 'nodegit';
const repoPath = '/Users/zmingg/me/api-repository';

export default class RepositoryService {

  constructor(){}

  async list() {
    console.log(process.cwd())
    const repo: Repository = await Repository.open(repoPath);
    return repo;
  }
}