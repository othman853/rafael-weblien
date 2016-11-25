const JiraApi = require('jira-client');

JiraApi.prototype.findAllIssues = function () {

  return this.doRequest(
    this.makeRequestHeader(
      this.makeUri({
        pathname: `/search`,
        query: { jql: 'project=RLT' }
      })
    )
  );

}

module.exports = JiraApi;
