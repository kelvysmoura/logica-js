
const api = require("./api")


const uri = 'branches/master/protection';
const method = 'PUT';

(async () => {
  try { 

    const payload = require('./payload/branch-protection');

    const request = await api.branchProtection(payload)
    const statusCode = parseInt(request.status);

    const json = await request.json();

    if (statusCode < 200 || statusCode > 299) {
      throw new Error(JSON.stringify(json));
    }

    console.log(json)

  } catch (error) {
    console.log("- error: " + error.message);
  }
})();