
const repository = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
const url = 'https://api.github.com';

module.exports = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },

  async addPullRequestComment(comment, prid) {
    return await fetch(`${url}/repos/${repository}/issues/${prid}/comments`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(comment)
    });
  },
}