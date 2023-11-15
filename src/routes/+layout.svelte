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
	

</script>
<!-- components that will appear above everything else -->
<Toast/>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
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
