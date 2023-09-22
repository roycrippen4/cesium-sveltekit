<script lang="ts">
	import { onMount } from 'svelte';
	import { initCesium } from "./utils/init";
	import { mouseHandlers } from "./utils/mouseHandlers.js";

	let viewerDiv: HTMLDivElement;
	onMount(() => {
		initCesium();
		mouseHandlers();
	});
</script>

<div id="cesiumContainer" bind:this={viewerDiv} />

<!--<style>-->
<!--	#viewer {-->
<!--		width: 100%;-->
<!--		height: 100%;-->
<!--	}-->
<!--</style>-->