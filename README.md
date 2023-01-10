# GitHub-Fetch API
API that can fetch a user's details and their public repositories by consuming GitHub API.

## Steps to Set-Up
1. Clone this repository by using `git clone https://github.com/vanshul02/github-fetch.git`
2. In the directory of api run this command to download the dependencies required:
```bash
npm install
```
3. Run to start the server:
```bash
npm run start
```

## Endpoints
1. ```/user/:userName``` : To fetch details of the User.
2. ```/user/:userName/repos```: To List all the public repositories of the User.