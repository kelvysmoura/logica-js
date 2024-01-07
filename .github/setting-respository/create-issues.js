

const api = require('./api');

(async () => {
  try {

    const issuesPayload = require('./payload/create-issues');

    for (let item of issuesPayload) {

      let st = setTimeout(async () => {
        const request = await api.createIssue(item)

        const statusCode = parseInt(request.status);

        const json = await request.json();
        json.HEADERS = Array.from(request.headers)

        if (statusCode < 200 || statusCode > 299) {
          throw new Error(JSON.stringify(json));
        }

        console.log(json)
      }, 5000)

    }

  } catch (error) {
    console.log("# error: " + error.message);
  }
})();