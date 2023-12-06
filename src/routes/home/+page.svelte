<script lang="ts">
    // first page sveltekit renders ('/')
    //@ts-nocheck
    import { fly,fade } from 'svelte/transition';

        //custom imports
        import GithubPortfolio from '$lib/components/GithubPortfolio.svelte';
        import Benin from '$lib/components/Benin.svelte';
        import Kyle from '$lib/components/Kyle.svelte';
        import Thy from '$lib/components/Thy.svelte';

        import { onMount } from "svelte";
        
        export let data; // unique to sveltekit
        let { supabase } = data
        
        // initializing at the top to prevent issues
        
        let kyle_UUID:string = "c0fefa23-cf3f-44c8-b798-5ed1b87b118f";
        let db_projects_kyle = [];
        let cntrvsy_UUID:string = "bdd59a73-3afc-41e9-a033-14976970ba52";
        let db_projects_benin = [];
        let thy_UUID:string = "a9a4f27d-01e0-4f82-9826-94eceac7e784";
        let db_projects_thy = [];

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
       
        //query one(benin).
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
        
        //query two(kyle).
        let query_two_name: string;
        let query_two_totalContributions: string;
        let query_two_totalCommitContributions: string;
        let query_two_totalIssueContributions: string;
        let query_two_totalPullRequestContributions: string;
        let query_two_totalPullRequestReviewContributions: string;
        let query_two_totalRepositoryContributions: string;
    
        let query_two_RepositoryName: string;
        let query_two_commitMessage_one: string;
        let query_two_commitMessage_two: string;
         
        //query three(thy).
        let query_three_name: string;
        let query_three_totalContributions: string;
        let query_three_totalCommitContributions: string;
        let query_three_totalIssueContributions: string;
        let query_three_totalPullRequestContributions: string;
        let query_three_totalPullRequestReviewContributions: string;
        let query_three_totalRepositoryContributions: string;
    
        let query_three_RepositoryName: string;
        let query_three_commitMessage_one: string;
        let query_three_commitMessage_two: string;
    
        onMount(async () => {
            //Benin github data retrieval(graphQL)
            query_one_name = data.data?.query_One.data.user.login
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
            
            //kyle github data retrieval(graphQL)
            query_two_name = data.data?.query_Two.data.user.login
            query_two_totalContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.contributionCalendar.totalContributions || 0;
            query_two_totalCommitContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.totalCommitContributions || 0;
            query_two_totalIssueContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.totalIssueContributions || 0;
            query_two_totalPullRequestContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.totalPullRequestContributions || 0;
            query_two_totalPullRequestReviewContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.totalPullRequestReviewContributions || 0;
            query_two_totalRepositoryContributions = data.data?.query_Two?.data?.user?.contributionsCollection?.totalRepositoryContributions || 0;
            
            query_two_RepositoryName = data.data?.query_Two?.data?.user?.repository?.name 
            query_two_commitMessage_one = data.data?.query_Two?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[0].node?.message
            query_two_commitMessage_two = data.data?.query_Two?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[1].node?.message

            console.log(query_two_name, query_two_totalContributions, query_two_totalCommitContributions, query_two_totalIssueContributions, query_two_totalPullRequestContributions, query_two_totalPullRequestReviewContributions, query_two_totalRepositoryContributions, query_two_RepositoryName, query_two_commitMessage_one)
            
             //thy github data retrieval(graphQL)
            query_three_name = data.data?.query_Three.data.user.login
            query_three_totalContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.contributionCalendar.totalContributions || 0;
            query_three_totalCommitContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.totalCommitContributions || 0;
            query_three_totalIssueContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.totalIssueContributions || 0;
            query_three_totalPullRequestContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.totalPullRequestContributions || 0;
            query_three_totalPullRequestReviewContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.totalPullRequestReviewContributions || 0;
            query_three_totalRepositoryContributions = data.data?.query_Three?.data?.user?.contributionsCollection?.totalRepositoryContributions || 0;
            
            query_three_RepositoryName = data.data?.query_Three?.data?.user?.repository?.name 
            query_three_commitMessage_one = data.data?.query_Three?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[0].node?.message
            query_three_commitMessage_two = data.data?.query_Three?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[1].node?.message

            console.log(query_three_name, query_three_totalContributions, query_three_totalCommitContributions, query_three_totalIssueContributions, query_three_totalPullRequestContributions, query_three_totalPullRequestReviewContributions, query_three_totalRepositoryContributions, query_three_RepositoryName, query_three_commitMessage_one)
            

            //Everyone's project data
            try {
            // gets all the projects tied to their specific user id
                let db1 = await supabase.from('projectsGithub').select('*').eq('user_id', cntrvsy_UUID)
                let db2 = await supabase.from('projectsGithub').select('*').eq('user_id', kyle_UUID)
                let db3 = await supabase.from('projectsGithub').select('*').eq('user_id', thy_UUID)
        
            // removes the indexes from data
                db_projects_benin = db1.data;
                db_projects_kyle = db2.data;
                db_projects_thy = db3.data;

                console.log("db_projects benin")    
                console.log(db_projects_benin)
                console.log("db_projects kyle")    
                console.log(db_projects_kyle)
                console.log("db_projects thy")    
                console.log(db_projects_thy)
    
            } catch (error) {
                console.log(error)
       
            }

        })
        
      </script>
    
    
    
      <main>
        <div class="container px-5 py-8 mx-auto flex flex-col">		
              <!-- main page you see(this will be repeated) -->
              <!-- Benin Section -->
            <section>	
                <div class="py-4">
                    <Benin/>
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
                        <div class="container px-5 py-8 mx-auto">
                            {#if db_projects_benin.length > 0}
                            {#each db_projects_benin as {id, ...item}}
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font">{item.name}</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium title-font mb-2">
                                            {item.technologies}
                                        </h2>
                                        <p class="leading-relaxed">
                                            {item.description} 
                                            <br>
                                        </p>
                                        <br>
                                        <a href="{item.link}" class="btn variant-filled-primary"> github link</a>
                                    </div>
                                </div>
                                <hr class="py-2">
                            {/each}
                            {:else}
                                <p>Nothing here yet.</p>
                            {/if}
                        </div>        
                    </div>
                {/if}
            </section>
             <!-- Kyle Section -->
             <section>	
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
                        name = {query_two_name}
                        totalContributions = {query_two_totalContributions} 
                        totalCommitContributions = {query_two_totalCommitContributions}
                        totalIssueContributions = {query_two_totalIssueContributions}
                        totalPullRequestContributions = {query_two_totalPullRequestContributions}
                        totalPullRequestReviewContributions = {query_two_totalPullRequestReviewContributions}
                        totalRepositoryContributions = {query_two_totalRepositoryContributions}
                        RepositoryName = {query_two_RepositoryName}
                        commitMessage_one = {query_two_commitMessage_one}
                        commitMessage_two = {query_two_commitMessage_two}
                        />
                    </div>
                {:else}
                    <div
                    in:fly={{ x: 250, duration: 700, delay:500 }}
                    out:fade={{duration:400}}>
                        <div class="container px-5 py-8 mx-auto">
                            {#if db_projects_kyle.length > 0}
                            {#each db_projects_kyle as {id, ...item}}
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font">{item.name}</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium title-font mb-2">
                                            {item.technologies}
                                        </h2>
                                        <p class="leading-relaxed">
                                            {item.description} 
                                            <br>
                                        </p>
                                        <br>
                                        <a href="{item.link}" class="btn variant-filled-primary"> github link</a>
                                    </div>
                                </div>
                                <hr class="py-2">
                            {/each}
                            {:else}
                                <p>Nothing here yet.</p>
                            {/if}
                        </div>        
                    </div>
                {/if}
            </section>
             <!-- ThyShark Section -->
             <section>	
                <div class="py-4">
                    <Thy/>
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
                        name = {query_three_name}
                        totalContributions = {query_three_totalContributions} 
                        totalCommitContributions = {query_three_totalCommitContributions}
                        totalIssueContributions = {query_three_totalIssueContributions}
                        totalPullRequestContributions = {query_three_totalPullRequestContributions}
                        totalPullRequestReviewContributions = {query_three_totalPullRequestReviewContributions}
                        totalRepositoryContributions = {query_three_totalRepositoryContributions}
                        RepositoryName = {query_three_RepositoryName}
                        commitMessage_one = {query_three_commitMessage_one}
                        commitMessage_two = {query_three_commitMessage_two}
                        />
                    </div>
                {:else}
                    <div
                    in:fly={{ x: 250, duration: 700, delay:500 }}
                    out:fade={{duration:400}}>
                        <div class="container px-5 py-8 mx-auto">
                            {#if db_projects_thy.length > 0}
                            {#each db_projects_thy as {id, ...item}}
                                <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font">{item.name}</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium title-font mb-2">
                                            {item.technologies}
                                        </h2>
                                        <p class="leading-relaxed">
                                            {item.description} 
                                            <br>
                                        </p>
                                        <br>
                                        <a href="{item.link}" class="btn variant-filled-primary"> github link</a>
                                    </div>
                                </div>
                                <hr class="py-2">
                            {/each}
                            {:else}
                                <p>Nothing here yet.</p>
                            {/if}
                        </div>        
                    </div>
                {/if}
            </section>
        </div>
      </main>
        