<script lang="ts">
// first page sveltekit renders ('/')
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from "$app/stores"
	
	//custom imports
	import GithubPortfolio from '$lib/components/GithubPortfolio.svelte';
	import Kyle from '$lib/components/Kyle.svelte';
	
	export let data;
	$: console.log(data);

 // arranging the data.
	let queryone_name = data.data.query_One.data.user.login
	let queryone_pfp = data.data.query_One.data.user.avatarUrl
	console.log(queryone_name)
	
  </script>



  <main>
	<div class="container px-5 py-8 mx-auto flex flex-col">		
		  <!-- main page you see -->
		<div class="py-4">	
			<Kyle/>
			<GithubPortfolio name= {queryone_name}/>
		</div>

		<hr>

		<div>
			<GithubPortfolio name={queryone_name}/>
		</div>
		
		<hr>
		<div>
			<GithubPortfolio name={queryone_name}/>
		</div>
  		
	</div>
  </main>
	