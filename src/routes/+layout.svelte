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

	import { goto, invalidate} from '$app/navigation';
	import { onMount } from 'svelte';

	//custom imports
	import { Avatar } from '@skeletonlabs/skeleton';
	import CustomSignOut from '$lib/components/CustomSignOut.svelte';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/stores/loading';
	import CustomPageTransition from '$lib/components/CustomPageTransition.svelte';
	import CustomLoading from '$lib/components/CustomLoading.svelte';

	import { page } from "$app/stores"

	$: loading.setNavigate(!!$navigating)

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
			invalidate('supabase:auth')
		}
		})

		return() => subscription.unsubscribe()
	})

</script>
<!-- components that will appear above everything else -->
<Toast/>
<CustomLoading/>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- checks if user(from session) exists in the session and renders accordingly -->
				{#if $page.data.session?.user}
					<!-- checks if session has the profile image of the user -->
					<p class="px-4">{session?.user.email}</p>
					<CustomSignOut {supabase}/>
			  {:else}
				<!-- if the user hasnt signed in -->
				Heyyy You
			  {/if}
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button on:click={()=>{goto("/home")}} class="btn variant-filled-secondary"> Portfolios</button>
				<button on:click={()=>{goto("/editor")}} class="btn variant-filled-secondary"> Editor</button>
				<LightSwitch/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<CustomPageTransition key={data.url} duration={600}>
		<slot />
	</CustomPageTransition>

</AppShell>
