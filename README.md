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
1. **`/user/:userName`**: [Fetch User Details](https://github.com/vanshul02/github-fetch#fetch-user-details).
2. **`/user/:userName/repos`**: [List all the public repositories of the User](https://github.com/vanshul02/github-fetch#list-repositories).

## Fetch User Details
Example URL: `https://localhost:8080/user/vanshul02`
Example Response:
```json
{
   "login": "vanshul02",
   "id": 89513486,
   "node_id": "MDQ6VXNlcjg5NTEzNDg2",
   "avatar_url": "https://avatars.githubusercontent.com/u/89513486?v=4",
   "gravatar_id": "",
   "url": "https://api.github.com/users/vanshul02",
   "html_url": "https://github.com/vanshul02",
   "followers_url": "https://api.github.com/users/vanshul02/followers",
   "following_url": "https://api.github.com/users/vanshul02/following{/other_user}",
   "gists_url": "https://api.github.com/users/vanshul02/gists{/gist_id}",
   "starred_url": "https://api.github.com/users/vanshul02/starred{/owner}{/repo}",
   "subscriptions_url": "https://api.github.com/users/vanshul02/subscriptions",
   "organizations_url": "https://api.github.com/users/vanshul02/orgs",
   "repos_url": "https://api.github.com/users/vanshul02/repos",
   "events_url": "https://api.github.com/users/vanshul02/events{/privacy}",
   "received_events_url": "https://api.github.com/users/vanshul02/received_events",
   "type": "User",
   "site_admin": false,
   "name": "Vanshul Ahuja",
   "company": null,
   "blog": "https://vanshul-portfolio.vercel.app/",
   "location": "Jaipur, Rajasthan",
   "email": null,
   "hireable": null,
   "bio": "Extremely motivated and a Passionate Developer",
   "twitter_username": null,
   "public_repos": 10,
   "public_gists": 0,
   "followers": 0,
   "following": 0,
   "created_at": "2021-08-25T08:25:59Z",
   "updated_at": "2023-01-10T18:39:20Z"
}
```

## List Repositories
Example URL: `https://localhost:8080/user/vanshul02/repos`
Example Response:
```json
[
   {
      "id": 586212434,
      "node_id": "R_kgDOIvDkUg",
      "name": "api-s3-to-rds",
      "full_name": "vanshul02/api-s3-to-rds",
      "private": false,
      "owner": {
         "login": "vanshul02",
         "id": 89513486,
         "node_id": "MDQ6VXNlcjg5NTEzNDg2",
         "avatar_url": "https://avatars.githubusercontent.com/u/89513486?v=4",
         "gravatar_id": "",
         "url": "https://api.github.com/users/vanshul02",
         "html_url": "https://github.com/vanshul02",
         "followers_url": "https://api.github.com/users/vanshul02/followers",
         "following_url": "https://api.github.com/users/vanshul02/following{/other_user}",
         "gists_url": "https://api.github.com/users/vanshul02/gists{/gist_id}",
         "starred_url": "https://api.github.com/users/vanshul02/starred{/owner}{/repo}",
         "subscriptions_url": "https://api.github.com/users/vanshul02/subscriptions",
         "organizations_url": "https://api.github.com/users/vanshul02/orgs",
         "repos_url": "https://api.github.com/users/vanshul02/repos",
         "events_url": "https://api.github.com/users/vanshul02/events{/privacy}",
         "received_events_url": "https://api.github.com/users/vanshul02/received_events",
         "type": "User",
         "site_admin": false
      },
      "html_url": "https://github.com/vanshul02/api-s3-to-rds",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/vanshul02/api-s3-to-rds",
      "forks_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/forks",
      "keys_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/teams",
      "hooks_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/hooks",
      "issue_events_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/issues/events{/number}",
      "events_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/events",
      "assignees_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/assignees{/user}",
      "branches_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/branches{/branch}",
      "tags_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/tags",
      "blobs_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/languages",
      "stargazers_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/stargazers",
      "contributors_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/contributors",
      "subscribers_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/subscribers",
      "subscription_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/subscription",
      "commits_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/contents/{+path}",
      "compare_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/merges",
      "archive_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/downloads",
      "issues_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/issues{/number}",
      "pulls_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/labels{/name}",
      "releases_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/releases{/id}",
      "deployments_url": "https://api.github.com/repos/vanshul02/api-s3-to-rds/deployments",
      "created_at": "2023-01-07T10:44:34Z",
      "updated_at": "2023-01-07T12:06:36Z",
      "pushed_at": "2023-01-08T11:03:03Z",
      "git_url": "git://github.com/vanshul02/api-s3-to-rds.git",
      "ssh_url": "git@github.com:vanshul02/api-s3-to-rds.git",
      "clone_url": "https://github.com/vanshul02/api-s3-to-rds.git",
      "svn_url": "https://github.com/vanshul02/api-s3-to-rds",
      "homepage": "https://api-s3-to-rds.vercel.app",
      "size": 96,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "TypeScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "has_discussions": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
   }
]
```