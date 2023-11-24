<script lang="ts">
// first page sveltekit renders ('/')
	
	//custom imports
	import GithubPortfolio from '$lib/components/GithubPortfolio.svelte';
	import Kyle from '$lib/components/Kyle.svelte';
	import { onMount } from "svelte";
	
	export let data;
	$: console.log(data);

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
	let query_one_commitMessage: string;

	onMount(() => {
		query_one_name = data.data.query_One.data.user.login
		query_one_totalContributions = data.data?.query_One?.data?.user?.contributionsCollection?.contributionCalendar.totalContributions || 0;
		query_one_totalCommitContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalCommitContributions || 0;
    	query_one_totalIssueContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalIssueContributions || 0;
		query_one_totalPullRequestContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalPullRequestContributions || 0;
		query_one_totalPullRequestReviewContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalPullRequestReviewContributions || 0;
		query_one_totalRepositoryContributions = data.data?.query_One?.data?.user?.contributionsCollection?.totalRepositoryContributions || 0;
		
		query_one_RepositoryName = data.data?.query_One?.data?.user?.repository?.name 
		query_one_commitMessage = data.data?.query_One?.data?.user?.repository?.defaultBranchRef?.target?.history?.edges[0].node?.message
		console.log(query_one_name, query_one_totalContributions, query_one_totalCommitContributions, query_one_totalIssueContributions, query_one_totalPullRequestContributions, query_one_totalPullRequestReviewContributions, query_one_totalRepositoryContributions, query_one_RepositoryName, query_one_commitMessage)
	
	})
	
	

	
	
  </script>



  <main>
	<div class="container px-5 py-8 mx-auto flex flex-col">		
		  <!-- main page you see -->
		<div class="py-4">	
			<Kyle/>
			<GithubPortfolio
			 name = {query_one_name}
			 totalContributions = {query_one_totalContributions} 
			 totalCommitContributions = {query_one_totalCommitContributions}
			 totalIssueContributions = {query_one_totalIssueContributions}
			 totalPullRequestContributions = {query_one_totalPullRequestContributions}
			 totalPullRequestReviewContributions = {query_one_totalPullRequestReviewContributions}
			 totalRepositoryContributions = {query_one_totalRepositoryContributions}
			 RepositoryName = {query_one_RepositoryName}
			 commitMessage = {query_one_commitMessage}
			/>
		</div>

		<hr>

		<div>
			<!-- <GithubPortfolio name={query_one_name}/> -->
		</div>
		
		<hr>
		<div>
			<!-- <GithubPortfolio name={queryone_name}/> -->
		</div>
  		
	</div>
  </main>
	