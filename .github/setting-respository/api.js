
const repository = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
const url = 'https://api.github.com';

module.exports = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },

  branchProtection(body) {
    return fetch(`${url}/repos/${repository}/branches/master/protection`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body)
    });
  },

  createIssue(body) {
    return fetch(`${url}/repos/${repository}/issues`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body)
    });
  }
}