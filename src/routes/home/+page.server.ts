// GITHUB GRAPHQL API

import { GITHUB_TOKEN } from "$env/static/private";

/* have an state machine to choose if person one two or three query is passed and run,
 info is being rendered after the run
 pass it in as props
*/
// Benin GraphQL data fetching
const query_One = `query{
  user(login: "cntrvsy") {
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
    repository(name: "app4080project") {
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
// Kyle GraphQL data fetching
const query_Two = `query{
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
// ThyShark GraphQL data fetching
const query_Three = `query{
  user(login: "Thyshark") {
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
    repository(name: "Univerisity-Portal") {
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

// [TODO]make 3 separate GraphQL request
/** @type {import('./$types').PageLoad} */
export async function load(){
  
    //example of one
    /*
     const res = await fetch("https://api.github.com/graphql", { 
         method: "POST",
         headers: {
             "Authorization": `bearer ${GITHUB_TOKEN}`,
             "Content-Type": "application/json"
         },
         body: JSON.stringify({query: query_One})
     })
     const data = await res.json()
     console.log(data)
    */

     const headers = {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
     }
    
     // make 3 separate GraphQL requests
        const [response_One] = await Promise.all([
            fetch("https://api.github.com/graphql", {
                method: "POST",
                headers,
                body: JSON.stringify({query: query_One})
            })
        //[TODO]add comma then continue
    ])

    //Parse the responses
    const data_One = await response_One.json();

    return{
        data: {
            query_One: data_One
        }
    }
};