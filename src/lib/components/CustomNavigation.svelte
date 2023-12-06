<script lang="ts">
    // component for the top navigation
	import { getDrawerStore, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	// importing page info so that custom transitions will work
	import { page } from '$app/stores';
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
     drawerStore.close();
}
</script>

<TabGroup justify="justify-center">
	<!-- <TabAnchor href="/create" selected={$page.url.pathname === '/create'}>Create</TabAnchor> -->
	<TabAnchor href="/home" selected={$page.url.pathname === '/home'}>Portfolios</TabAnchor>
	<TabAnchor href="/editor" selected={$page.url.pathname === '/editor'}>Editor</TabAnchor>
</TabGroup>
