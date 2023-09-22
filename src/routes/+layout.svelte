<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import Cesium from './pages/Cesium.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<strong class="text-xl uppercase">Test Application</strong>
		</AppBar>
	</svelte:fragment>
	<Cesium />
  <slot/>
</AppShell>
