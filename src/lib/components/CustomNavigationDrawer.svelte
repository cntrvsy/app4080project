<script lang="ts">
    // drawer navigation for when the screen is small
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
     drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/home" on:click={drawerClose} >Portfolios</a></li>
		<li><a href="/editor" on:click={drawerClose} >Editor</a></li>
		<br>
		<hr class="py-2">
		<li><span><LightSwitch/></span></li>
		<br>
		<hr class="py-2">
	</ul>
</nav>
