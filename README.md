# sctech statuspage
simple github workflow to check sites' status
## how to use:
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

### next, generate a new repo from this template.
1. open /.github/workflows/check-status.yml
2. change the sites' urls to your sites' urls. (add more if you need to)
#### if you used a custom domain:
go to your custom domain
#### if you did not use a custom domain:
go to https://yourusername.github.io/reponame

replace yourusername with your username and replace reponame with your generated repo's name.
