import {Repository, Reference, Clone} from 'nodegit';
import {promisify} from 'util';
const fs = require('fs');
const path = require('path');
const repoConfig = require('../../repository.json');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const repoPath = path.resolve('./repository/schemas');

export default class RepositoryService {

  protected path: string;

  constructor(){
    this.path = path.resolve(repoPath, './.git');
  }

  /**
   * Pull the latest version of master branch.
   */
  async pull() {
    const isExist = await fs.existsSync(repoPath);

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
    } else {
      Repository.open(this.path).then(function(repository) {
        repository.getBranchCommit('master').then(function(commit) {
          // Use commit
          console.log(commit);
        });
      }, function (err) {
        console.log(err)
      })
    }

    return true;
  }

  /**
   * List the repository.
   */
  async list() {
    const fileList: object[] = [];
    const files = await readdir(repoPath);

    await Promise.all(files.map(async (file: string) => {
      const filePath: string = path.resolve(repoPath, file);
      const fileStat: any = await stat(filePath);
      if (fileStat.isFile() && /^.+\.yaml$/.test(filePath)) {
        fileList.push({
          name: file.replace(/^(.+).yaml$/g, '$1'),
          url: filePath
        });
      }
    }));

    return fileList;
  }


}