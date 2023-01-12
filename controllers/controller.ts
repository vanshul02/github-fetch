import {Request, Response} from 'express';
import {RootRepoObject, RootUserObject} from '../interfaces/interface';
import axios, {AxiosError} from 'axios';

export const getRepos = async (req: Request, res: Response) => {
  const userName = req.params.userName;
  console.log('CONTROLLER getRepo INFO: ', userName);
  const repos: RootRepoObject[] = [
    {
      id: 586496200,
      node_id: 'R_kgDOIvU4yA',
      name: 'cdk-s3-to-rds',
      full_name: 'vanshul02/cdk-s3-to-rds',
      private: false,
      html_url: 'https://github.com/vanshul02/cdk-s3-to-rds',
      description:
        'Using AWS CDK for cloud deployment of Lambda Function, S3 Bucket and RDS Aurora MySQL DB Instance',
      fork: false,
      url: 'https://api.github.com/repos/vanshul02/cdk-s3-to-rds',
      topics: ['aws-cdk', 'aws-s3', 'javascript', 'nodejs', 'typescript'],
      git_url: '',
      size: 82,
      language: 'TypeScript',
    },
    {
      id: 586496200,
      node_id: 'R_kgDOIvU4yA',
      name: 'cdk-s3-to-rds',
      full_name: 'vanshul02/cdk-s3-to-rds',
      private: false,
      html_url: 'https://github.com/vanshul02/cdk-s3-to-rds',
      description:
        'Using AWS CDK for cloud deployment of Lambda Function, S3 Bucket and RDS Aurora MySQL DB Instance',
      fork: false,
      url: 'https://api.github.com/repos/vanshul02/cdk-s3-to-rds',
      topics: ['aws-cdk', 'aws-s3', 'javascript', 'nodejs', 'typescript'],
      git_url: '',
      size: 82,
      language: 'TypeScript',
    },
    {
      id: 586496200,
      node_id: 'R_kgDOIvU4yA',
      name: 'cdk-s3-to-rds',
      full_name: 'vanshul02/cdk-s3-to-rds',
      private: false,
      html_url: 'https://github.com/vanshul02/cdk-s3-to-rds',
      description:
        'Using AWS CDK for cloud deployment of Lambda Function, S3 Bucket and RDS Aurora MySQL DB Instance',
      fork: false,
      url: 'https://api.github.com/repos/vanshul02/cdk-s3-to-rds',
      topics: ['aws-cdk', 'aws-s3', 'javascript', 'nodejs', 'typescript'],
      git_url: '',
      size: 82,
      language: 'TypeScript',
    },
    {
      id: 586496200,
      node_id: 'R_kgDOIvU4yA',
      name: 'cdk-s3-to-rds',
      full_name: 'vanshul02/cdk-s3-to-rds',
      private: false,
      html_url: 'https://github.com/vanshul02/cdk-s3-to-rds',
      description:
        'Using AWS CDK for cloud deployment of Lambda Function, S3 Bucket and RDS Aurora MySQL DB Instance',
      fork: false,
      url: 'https://api.github.com/repos/vanshul02/cdk-s3-to-rds',
      topics: ['aws-cdk', 'aws-s3', 'javascript', 'nodejs', 'typescript'],
      git_url: '',
      size: 82,
      language: 'TypeScript',
    },
  ];
  setTimeout(() => {
    return res.status(200).json(repos);
  }, 3000);
  // await axios
  //   .get(`https://api.github.com/users/${userName}/repos`)
  //   .then(result => {
  //     const repoData: RootRepoObject[] = result.data;
  //     console.log('CONTROLLER getRepo INFO: ', repoData);
  //     return res.status(200).json(repoData);
  //   })
  //   .catch((err: AxiosError | Error) => {
  //     console.log('CONTROLLER getRepo ERR: ', err);
  //     if (axios.isAxiosError(err)) {
  //       return res
  //         .status(err.status !== undefined ? err.status : 500)
  //         .json(err.message);
  //     } else {
  //       // Just a stock error
  //       return res.status(500).json(err.message);
  //     }
  //   });
};

export const getUser = async (req: Request, res: Response) => {
  const userName = req.params.userName;
  const user: RootUserObject = {
    login: 'vanshul02',
    id: 89513486,
    avatar_url: 'https://avatars.githubusercontent.com/u/89513486?v=4',
    url: 'https://api.github.com/users/vanshul02',
    html_url: 'https://github.com/vanshul02',
    name: 'Vanshul Ahuja',
    location: 'Jaipur, Rajasthan',
    bio: 'Extremely motivated and a Passionate Developer',
    email: '',
    twitter_username: 'vanshul_ahuja',
  };
  console.log('CONTROLLER getUser INFO: ', userName);
  setTimeout(() => {
    return res.status(200).json(user);
  }, 3000);
  // await axios
  //   .get(`https://api.github.com/users/${userName}`)
  //   .then(result => {
  //     const userData: RootUserObject = result.data;
  //     console.log('CONTROLLER getUser INFO: ', userData);
  //     return res.status(200).json(userData);
  //   })
  //   .catch((err: AxiosError | Error) => {
  //     console.log('CONTROLLER getUser ERR: ', err);
  //     if (axios.isAxiosError(err)) {
  //       return res
  //         .status(err.status !== undefined ? err.status : 500)
  //         .json(err.message);
  //     } else {
  //       // Just a stock error
  //       return res.status(500).json(err.message);
  //     }
  //   });
};
