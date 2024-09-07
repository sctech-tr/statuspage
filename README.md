# sctech statuspage
simple github workflow to check sites' status
## How to use:
### First, create a Personal Access Token (PAT):

1. Go to your GitHub account settings
2. Navigate to Developer settings > Personal access tokens > Tokens (classic)
3. Generate a new token with the repo scope
4. Copy the generated token

Add the token to your repository secrets:

1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Click on "New repository secret"
4. Name the secret PAT and paste your token as the value.

### Next, generate a new repo from this template.
1. Click "Use this template" at the top right corner.
2. Enter the repo information.
3. Delete status.json
4. Open /.github/workflows/check-status.yml
5. Change the sites' urls to your sites' urls. (add more if you need to)
### Next, run the workflow for the first time.
1. Click "Actions" at the navigation bar.
2. Click "Website Status Check" at the right bar.
3. Click "Run workflow" and then "Run workflow" again.

Done! You have a website status page now.
#### If you used a custom domain:
Go to your custom domain
#### If you did not use a custom domain:
Go to https://yourusername.github.io/reponame

Replace yourusername with your username and replace reponame with your generated repo's name.
