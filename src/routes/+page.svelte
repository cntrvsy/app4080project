<script lang="ts">
// first page sveltekit renders ('/')
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from "$app/stores"
	
	//custom imports
	import GithubPortfolio from '$lib/components/GithubPortfolio.svelte';
	
	export let data;
	$: console.log(data);
	
  </script>
  <!-- checks if user exists in the session and renders accordingly -->
  {#if $page.data.session?.user}
  <p>Signed in as {$page.data.session.user.email}</p>
  	<!-- checks if session has the profile image of the user -->
  		{#if $page.data.session.user?.image}
  		
			  <Avatar src={$page.data.session.user.image}
			   width="w-32"
			    rounded="rounded-3xl" />

		{/if}
  <button on:click={() => signOut()}>Sign out</button>
  <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" alt="call"/>
{:else}
  <!-- if the user hasnt signed in -->
  <p>Please Sign In....</p>
  <button class="btn variant-outline-primary "on:click={() => signIn('github')}>Sign in</button>
{/if}

  <!-- main page you see -->
  <div>
	<h1>Hi mom</h1>
	<!-- icons from lucide.dev -->
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-beef"><circle cx="12.5" cy="8.5" r="2.5"/>
		<path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/>
	</svg>
	
	<GithubPortfolio/>
	<hr>
	<GithubPortfolio/>
	<hr>
	<GithubPortfolio/>
	<hr>

  </div>
	