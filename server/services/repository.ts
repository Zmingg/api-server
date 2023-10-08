import {Repository, Cred, Clone} from 'nodegit';
import {promisify} from 'util';
const fs = require('fs');
const path = require('path');
const repoConfig = require('../../repository.json');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

export default class RepositoryService {

  protected name = 'default';

  protected repoPath = path.resolve('./repository', this.name);

  protected gitPath = path.resolve(this.repoPath, './.git');;

  /**
   * Pull the latest version of master branch.
   */
  async pull() {
    const isExist = await fs.existsSync(this.gitPath);

    const cloneOpts = {
      fetchOpts: {        
        callbacks: {
          certificateCheck: function() { return 0; },
          credentials: function(url: string, userName: string) {
            return Cred.sshKeyNew(userName, '/Users/zmingg/.ssh/gitlab_rsa.pub', '/Users/zmingg/.ssh/gitlab_rsa', '');
          }
        }
      }
    }

    if (!isExist) {
        Clone.clone(repoConfig.repository, this.repoPath, cloneOpts).then(
          function(repository) {
            // Use repository
            repository.getBranchCommit('master').then(function(commit) {
              // Use commit
              console.log(commit);
            });
          },
          function (err) {
            console.log('Clone err', err)
        });
    } else {
      Repository.open(this.gitPath).then(function(repository) {
        repository.getBranchCommit('master').then(function(commit) {
          // Use commit
          console.log(commit);
        });
      }, function (err) {
        console.log(err.msg)
      })
    }

    return true;
  }

  /**
   * List the repository.
   */
  async list(repoName: string, dir: string = '.') {
    const basePath = path.resolve(dir, repoName);
    console.log(basePath)

    const findDocs = async (basePath: string) => {
      const fileList: object[] = [];

      const files = await readdir(dir);

      await Promise.all(files.map(async (file: string) => {
        console.log(file)
        const filePath: string = path.resolve(dir, file);
        const filePathAbsolute = path.resolve(basePath, filePath);

        console.log(filePath, filePathAbsolute)

        const fileStat: any = await stat(filePathAbsolute);
        if (fileStat.isFile() && /^.+\.yaml$/.test(filePath)) {
          fileList.push({
            name: file.replace(/^(.+).yaml$/g, '$1'),
            url: filePath,
            isDir: false
          });
        }
        // else if (fileStat.isDirectory()) {
        //   const files = await findDocs(filePath);
        //   fileList.push({
        //     url: filePath,
        //     isDir: true,
        //     // children: files
        //   })
        // }
      }));

      return fileList;
    }


    const fileList = await findDocs(basePath);


    return fileList;
  }


}