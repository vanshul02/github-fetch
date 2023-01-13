import {getRepos, getUser} from '../controllers/controller';
import {Request, Response} from 'express';
import {RootRepoObject, RootUserObject} from '../interfaces/interface';
import axios, {AxiosError, AxiosHeaders} from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
let request: Request;
let response: Response;

describe('getRepos', () => {
  beforeEach(() => {
    request = {
      body: {},
      params: {userName: 'dummyUser'},
    } as any;
    response = {
      send: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;
  });
  describe('Sucessful Call', () => {
    it('should return a list of repos', async () => {
      const repos: RootRepoObject[] = [
        {
          id: 586212434,
          node_id: 'R_kgDOIvDkUg',
          name: 'api-s3-to-rds',
          full_name: 'vanshul02/api-s3-to-rds',
          html_url: 'https://github.com/vanshul02/api-s3-to-rds',
          git_url: 'git://github.com/vanshul02/api-s3-to-rds.git',
          description: '',
          url: 'https://api.github.com/repos/vanshul02/api-s3-to-rds',
          size: 96,
          language: 'TypeScript',
          topics: [],
        },
      ];
      mockedAxios.get.mockResolvedValue({data: repos});

      await getRepos(request, response);
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/users/dummyUser/repos'
      );
      expect(response.json).toHaveBeenCalledWith(repos);
      expect(response.status).toHaveBeenCalledWith(200);
    });
  });
  describe('Not Found Error', () => {
    it('should throw a 404 Error', async () => {
      const message = 'Response Failed with Error 404';
      const error: AxiosError<string, string> = {
        message,
        name: 'AxiosError',
        isAxiosError: true,
        toJSON: '' as any,
        response: {
          status: 404,
          data: message,
          headers: '' as any,
          statusText: '',
          config: '' as any,
        },
      };
      console.log('isAxiosError', axios.isAxiosError(error));
      mockedAxios.get.mockRejectedValue(error);
      await getRepos(request, response);
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/users/dummyUser/repos'
      );
      expect(response.json).toHaveBeenCalledWith(message);
      expect(response.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('getUser', () => {
  beforeEach(() => {
    request = {
      body: {},
      params: {userName: 'dummyUser'},
    } as any;
    response = {
      send: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as any;
  });
  describe('Sucessful Call', () => {
    it('should return a user', async () => {
      const user: RootUserObject = {
        login: 'vanshul02',
        id: 89513486,
        node_id: 'MDQ6VXNlcjg5NTEzNDg2',
        avatar_url: 'https://avatars.githubusercontent.com/u/89513486?v=4',
        url: 'https://api.github.com/users/vanshul02',
        html_url: 'https://github.com/vanshul02',
        name: 'Vanshul Ahuja',
        blog: 'https://vanshul-portfolio.vercel.app/',
        location: 'Jaipur, Rajasthan',
        email: '',
        bio: 'Extremely motivated and a Passionate Developer',
        twitter_username: '',
      };
      mockedAxios.get.mockResolvedValue({data: user});

      await getUser(request, response);
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/users/dummyUser'
      );
      expect(response.json).toHaveBeenCalledWith(user);
      expect(response.status).toHaveBeenCalledWith(200);
    });
  });
  describe('Not Found Error', () => {
    it('should throw a 404 Error', async () => {
      const message = 'Response Failed with Error 404';
      const error: AxiosError<string, string> = {
        message,
        name: 'AxiosError',
        isAxiosError: true,
        toJSON: '' as any,
        response: {
          status: 404,
          data: message,
          headers: '' as any,
          statusText: '',
          config: '' as any,
        },
      };
      console.log('isAxiosError', axios.isAxiosError(error));
      mockedAxios.get.mockRejectedValue(error);
      await getUser(request, response);
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.github.com/users/dummyUser'
      );
      expect(response.json).toHaveBeenCalledWith(message);
      expect(response.status).toHaveBeenCalledWith(404);
    });
  });
});
