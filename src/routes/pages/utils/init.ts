import { Ion, Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

let viewer: Viewer;
export function initCesium() {
	Ion.defaultAccessToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NjNmM2ZjNS0yMjhhLTRiNGMtYjNkZS1hMzA4NGViMTRlZTYiLCJpZCI6MTY3OTExLCJpYXQiOjE2OTUzNjIxMjZ9.m9st8lwGsSaP6ZjXUKVomVHVu-liiEskl4nLbQoj_KQ';

	viewer = new Viewer('cesiumContainer', {
		animation: false,
		homeButton: false,
		timeline: false,
		fullscreenButton: false
	});
	viewer.scene.debugShowFramesPerSecond = true;
}

export { viewer };
