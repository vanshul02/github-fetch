# GitHub-Fetch API
API that can fetch a user's details and their public repositories by consuming GitHub API.

## Steps to Set-Up
1. Clone this repository by using: ```bash
git clone https://github.com/vanshul02/github-fetch.git
```
2. In the directory of api run this command to download the dependencies required:
```bash
npm install
```
3. Run to start the server:
```bash
npm run start
```

## Endpoints
1. [**`/user/:userName`**](https://github.com/vanshul02/github-fetch#fetch-user-details): To fetch details of the User.
2. **`/user/:userName/repos`**: To List all the public repositories of the User.

## Fetch User Details
Example URL: ```url https://localhost:8080/user/vanshul02```
Example Response:
```json
{"login":"vanshul02","id":89513486,"node_id":"MDQ6VXNlcjg5NTEzNDg2","avatar_url":"https://avatars.githubusercontent.com/u/89513486?v=4","gravatar_id":"","url":"https://api.github.com/users/vanshul02","html_url":"https://github.com/vanshul02","followers_url":"https://api.github.com/users/vanshul02/followers","following_url":"https://api.github.com/users/vanshul02/following{/other_user}","gists_url":"https://api.github.com/users/vanshul02/gists{/gist_id}","starred_url":"https://api.github.com/users/vanshul02/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/vanshul02/subscriptions","organizations_url":"https://api.github.com/users/vanshul02/orgs","repos_url":"https://api.github.com/users/vanshul02/repos","events_url":"https://api.github.com/users/vanshul02/events{/privacy}","received_events_url":"https://api.github.com/users/vanshul02/received_events","type":"User","site_admin":false,"name":"Vanshul Ahuja","company":null,"blog":"https://vanshul-portfolio.vercel.app/","location":"Jaipur, Rajasthan","email":null,"hireable":null,"bio":"Extremely motivated and a Passionate Developer","twitter_username":null,"public_repos":10,"public_gists":0,"followers":0,"following":0,"created_at":"2021-08-25T08:25:59Z","updated_at":"2023-01-10T18:39:20Z"}
```