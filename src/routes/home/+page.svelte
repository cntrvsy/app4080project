<script lang="ts">
    // first page sveltekit renders ('/')
    import { fly,fade } from 'svelte/transition';

        //custom imports
        import GithubPortfolio from '$lib/components/GithubPortfolio.svelte';
        import Kyle from '$lib/components/Kyle.svelte';
        import { onMount } from "svelte";
        
        export let data;
        
        // state
    let componentState = 'Projects';
    const componentStates = {
    Projects: 'Projects',
    Github: 'Github',
  }
  // handles the switching between the two forms 
  function toggleComponent_State(state:string) {
    componentState = state;
    console.log("changed to")
    console.log(componentState)
  }

    //arranging the data.
        //query one.
        let query_one_name: string;
        let query_one_totalContributions: string;
        let query_one_totalCommitContributions: string;
        let query_one_totalIssueContributions: string;
          let query_one_totalPullRequestContributions: string;
        let query_one_totalPullRequestReviewContributions: string;
        let query_one_totalRepositoryContributions: string;
    
        let query_one_RepositoryName: string;
        let query_one_commitMessage_one: string;
        let query_one_commitMessage_two: string;
    
        onMount(() => {
            query_one_name = data.data.query_One.data.user.login
            query_one_totalContributions = data.data?.query_One?.data?.user?.contributionsCollection?.contributionCalendar.totalContributions || 0;
            query_one_totalCommitContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalCommitContributions || 0;
            query_one_totalIssueContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalIssueContributions || 0;
            query_one_totalPullRequestContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalPullRequestContributions || 0;
            query_one_totalPullRequestReviewContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalPullRequestReviewContributions || 0;
            query_one_totalRepositoryContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalRepositoryContributions || 0;
            
            query_one_RepositoryName = data.data?.query_One?.data?.user?.repository?.name 
            query_one_commitMessage_one = data.data?.query_One?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[0].node?.message
            query_one_commitMessage_two = data.data?.query_One?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[1].node?.message

            console.log(query_one_name, query_one_totalContributions, query_one_totalCommitContributions, query_one_totalIssueContributions, query_one_totalPullRequestContributions, query_one_totalPullRequestReviewContributions, query_one_totalRepositoryContributions, query_one_RepositoryName, query_one_commitMessage_one)

        
        })
        
      </script>
    
    
    
      <main>
        <div class="container px-5 py-8 mx-auto flex flex-col">		
              <!-- main page you see -->
            <div>	
                <div class="py-4">
                    <Kyle/>
                </div>
                
                <hr class="!border-t-8 !border-double py-2" />

                <!-- switcher -->
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <div class="logo-cloud grid-cols-1 lg:grid-cols-2 gap-1 mx-auto">
                        <button class="btn variant-filled-primary py-2" on:click={()=> toggleComponent_State('Github')}>
                            Github Overview
                        </button>          
                        <button class="btn variant-filled-primary py-2" on:click={()=> toggleComponent_State('Projects')}>
                            Projects Overview
                        </button>
                    </div>
                </div>

                <hr class="!border-t-8 !border-double py-2" />

                {#if componentState === componentStates.Github}
                    <div
                    in:fly={{ x: 250, duration: 700, delay:500 }}
                    out:fade={{duration:400}}>
                        <GithubPortfolio
                        name = {query_one_name}
                        totalContributions = {query_one_totalContributions} 
                        totalCommitContributions = {query_one_totalCommitContributions}
                        totalIssueContributions = {query_one_totalIssueContributions}
                        totalPullRequestContributions = {query_one_totalPullRequestContributions}
                        totalPullRequestReviewContributions = {query_one_totalPullRequestReviewContributions}
                        totalRepositoryContributions = {query_one_totalRepositoryContributions}
                        RepositoryName = {query_one_RepositoryName}
                        commitMessage_one = {query_one_commitMessage_one}
                        commitMessage_two = {query_one_commitMessage_two}
                        />
                    </div>
                {:else}
                    <div
                    in:fly={{ x: 250, duration: 700, delay:500 }}
                    out:fade={{duration:400}}>
                       
                            
                    </div>
                {/if}
                
            </div>
            
    
            
        </div>
      </main>
        