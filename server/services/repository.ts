import {Repository, Reference, Clone} from 'nodegit';
import {promisify} from 'util';
const fs = require('fs');
const path = require('path');
const repoConfig = require('../../repository.json');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const repoPath = path.resolve('./repository');

export default class RepositoryService {

  protected path: string;

  constructor(){
    this.path = path.resolve(repoPath, './git');
  }

  async pull() {
    const isExist = await fs.existsSync(repoPath);
    console.log(isExist)

    if (!isExist) {
      Clone.clone(repoConfig.repository, repoPath).then(
        function(repository) {
          // Use repository
          repository.getBranchCommit('master').then(function(commit) {
            // Use commit
            console.log(commit);
          });
        },
        function (err) {
          console.log(err)
      });
    }
  }

  async list() {
    const fileList: string[] = [];
    const files = await readdir(this.path);

    await Promise.all(files.map(async (file: string) => {
      const filePath: string = path.resolve(this.path, file);
      console.log(filePath)
      const fileStat: any = await stat(filePath);
      if (fileStat.isFile() && /^.+\.yaml$/.test(filePath)) {
        fileList.push(file);
      }
    }));

    return fileList;
  }

  async fetch() {

    const repo: Repository = await Repository.open(this.path);

    const ref: Reference = await repo.getBranch('master');

    const commit = await repo.getBranchCommit('master');

    return Reference.list(repo);

    // console.log(await repo.getStatus())
    // try {
    //   await repo.fetchAll({
    //     callbacks: {
    //       credentials: function (url: string, userName: string) {
    //         const {username, password} = repoConfig.repository;
    //
    //         return Cred.userpassPlaintextNew(username, password);
    //       }
    //     }
    //   });
    //
    //   const branch = await repo.getReference('master');
    //   console.log(branch)
    //
    //   return branch;
    //
    // } catch (e) {
    //   console.log(e);
    //   return e;
    // }

  }

}