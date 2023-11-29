const GITHUB_TOKEN = "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";
const query_One = `query{
  user(login: "kyle-304") {
    login
    avatarUrl
    contributionsCollection(from: "2023-01-01T00:00:00Z", to: "2023-12-31T23:59:59Z") {
      totalCommitContributions
      totalIssueContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalRepositoryContributions
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
    repository(name: "week9-colloborative") {
      name
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 2) {
              edges {
                node {
                  message
                }
              }
            }
          }
        }
      }
    }
  }
}`;
async function load() {
  const headers = {
    "Authorization": `Bearer ${GITHUB_TOKEN}`,
    "Content-Type": "application/json"
  };
  const [response_One] = await Promise.all([
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query: query_One })
    })
    //[TODO]add comma then continue
  ]);
  const data_One = await response_One.json();
  return {
    data: {
      query_One: data_One
    }
  };
}
export {
  load
};
