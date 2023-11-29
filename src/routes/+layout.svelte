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
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import '@fontsource-variable/montserrat';
	import CustomNavigation from '$lib/components/CustomNavigation.svelte';
	import CustomNavigationDrawer from '$lib/components/CustomNavigationDrawer.svelte';
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

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({})
	}

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

<!-- drawer -->
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr/>
	<CustomNavigationDrawer/>
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-48">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<!-- button for phones -->
				<div class="flex items-center">
					<button class="lg:hidden md:hidden btn btn-sm mr" on:click={drawerOpen}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="fill-token" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
					</button>
					<!-- checks if user(from session) exists in the session and renders accordingly -->
					{#if $page.data.session?.user}
						<!-- checks if session has the profile image of the user -->
						<!-- <p class="hidden md:block">{session?.user.email}</p> -->
						<p class=""><CustomSignOut {supabase}/></p>
					{:else}
						<!-- if the user hasn't signed in -->
						<p class="Quicksand">APP4080</p>
					{/if}
				</div>
			</svelte:fragment>

			<div class="hidden md:block">
				<CustomNavigation />
			</div>

			<svelte:fragment slot="trail">
				<!-- <button on:click={()=>{goto("/home")}} class="btn variant-filled-secondary"> Portfolios</button>
				<button on:click={()=>{goto("/editor")}} class="btn variant-filled-secondary"> Editor</button> -->
				<p class="hidden md:block"><LightSwitch/></p>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<CustomPageTransition key={data.url} duration={600}>
		<slot />
	</CustomPageTransition>

</AppShell>

<style>
	:global(body){
		font-family: 'Montserrat Variable', sans-serif;
	}
</style>