import {Request, Response} from 'express';
import {RootRepoObject, RootUserObject} from '../interfaces/interface';
import axios, {AxiosError} from 'axios';

export const getRepos = async (req: Request, res: Response) => {
  const userName = req.params.userName;
  console.log('CONTROLLER getRepo INFO: ', userName);
  await axios
    .get(`https://api.github.com/users/${userName}/repos`)
    .then(result => {
      const repoData: RootRepoObject[] = result.data;
      console.log('CONTROLLER getRepo INFO: ', repoData);
      return res.status(200).json(repoData);
    })
    .catch((err: AxiosError | Error) => {
      console.log('CONTROLLER getRepo ERR: ', err);
      if (axios.isAxiosError(err)) {
        return res
          .status(
            err.response !== undefined
              ? err.response.status !== undefined
                ? err.response.status
                : 500
              : 500
          )
          .json(err.message);
      } else {
        // Just a stock error
        return res.status(500).json(err.message);
      }
    });
};

export const getUser = async (req: Request, res: Response) => {
  const userName = req.params.userName;
  console.log('CONTROLLER getUser INFO: ', userName);
  await axios
    .get(`https://api.github.com/users/${userName}`)
    .then(result => {
      const userData: RootUserObject = result.data;
      console.log('CONTROLLER getUser INFO: ', userData);
      return res.status(200).json(userData);
    })
    .catch((err: AxiosError | Error) => {
      console.log('CONTROLLER getUser ERR: ', err);
      if (axios.isAxiosError(err)) {
        return res
          .status(
            err.response !== undefined
              ? err.response.status !== undefined
                ? err.response.status
                : 500
              : 500
          )
          .json(err.message);
      } else {
        // Just a stock error
        return res.status(500).json(err.message);
      }
    });
};
