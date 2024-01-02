

const api = require('./api');

(async () => {
  try {

    const issuesPayload = require('./payload/create-issues');

    issuesPayload.forEach(async item => {

      const request = await api.createIssue(item);  
      const statusCode = parseInt(request.status);

      const json = await request.json();

      if (statusCode < 200 || statusCode > 299) {
        throw new Error(JSON.stringify(json));
      }
    })

  } catch (error) {
    console.log("# error: " + error.message);
  }
})();