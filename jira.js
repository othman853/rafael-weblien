const JiraApi = require('jira-client');

JiraApi.prototype.findAllIssues = function () {
  const uriDetails = {
    pathname: `/search`,
    query: { jql: 'project=RLT' }
  };

  return this.doRequest(this.makeRequestHeader(this.makeUri(uriDetails)));
};

JiraApi.prototype.createIssue = function(summary) {
  const uriDetails = { pathname: '/issue' };
  const requestDetails = {
    method: 'POST',
    body: {
      fields: {
        summary,
        project: { id: '10000' },
        issuetype: { id: '10000' }
      }
    }
  };

  return this.doRequest(this.makeRequestHeader(this.makeUri(uriDetails),requestDetails));

};

module.exports = JiraApi;
