<!-- layout.svelte(standard) provides a template that all other pages will have in the application -->

<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Toast, getToastStore } from '@skeletonlabs/skeleton';

	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//custom imports
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from "$app/stores"

</script>
<!-- components that will appear above everything else -->
<Toast/>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- checks if user exists in the session and renders accordingly -->
				{#if $page.data.session?.user}
					<!-- checks if session has the profile image of the user -->
						{#if $page.data.session.user?.image}
							<Avatar src={$page.data.session.user.image}
							 width="w-16"
							  rounded="rounded-3xl" />			  
					  {/if}
					  <p class="px-2">{$page.data.session.user.email}</p>
				<button class="px-2 btn variant-ghost-primary" on:click={() => signOut()}>Sign out</button>
				
			  {:else}
				<!-- if the user hasnt signed in -->
				<button class="btn variant-outline-primary "on:click={() => signIn('github')}>Sign in</button>
			  {/if}
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
					target="_blank"
					rel="noreferrer"
				>
					Home
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/editor"
					target="_blank"
					rel="noreferrer"
				>
					Editor
				</a>
				<LightSwitch/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
		<slot />

</AppShell>
