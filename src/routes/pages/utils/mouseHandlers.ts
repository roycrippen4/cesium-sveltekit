import { viewer } from './init';
import * as Cesium from 'cesium';
import type { Cartesian3, ScreenSpaceEventHandler } from 'cesium';

export function mouseHandlers() {
	createLatLonBox();
	createDistancePin();

	const mouseMoveHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
	// @ts-ignore
	mouseMoveHandler.setInputAction((e: ScreenSpaceEventHandler.MotionEvent) => {
		const cartesian = viewer.camera.pickEllipsoid(e.endPosition, viewer.scene.globe.ellipsoid);
		if (cartesian) {
			updateLatLonBox(cartesian);
		}
	}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

	const doubleClickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
	doubleClickHandler.setInputAction((e: ScreenSpaceEventHandler.PositionedEvent) => {
		const cartesian = viewer.camera.pickEllipsoid(e.position, viewer.scene.globe.ellipsoid);
		if (cartesian) {
			handleDistancePin(cartesian);
		}
	}, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
}

function createLatLonBox() {
	viewer.entities.add({
		id: 'lat-lon box',
		label: {
			show: true,
			font: '10px monospace',
			//@ts-ignore
			pixelOffset: { x: 70, y: 20 },
			outlineColor: Cesium.Color.BLACK,
			outlineWidth: 10
		}
	});
}

function updateLatLonBox(cartesian: Cartesian3) {
	const latLonBox = viewer.entities.getById('lat-lon box');
	if (cartesian && latLonBox) {
		const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
		const lonString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(5);
		const latString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(5);

		//@ts-ignore
		latLonBox.position = cartesian;
		// @ts-ignore
		latLonBox.label.text = `Lat: ${latString} \u00B0 \n Lon: ${lonString} \u00B0`;
	}
}

function createDistancePin() {
	const pinBuilder = new Cesium.PinBuilder();

	const distancePin = viewer.entities.add({
		id: 'distancePin',
		name: 'dist',
		show: true
	});
}

function handleDistancePin(cartesian: Cartesian3) {
	const distancePin = viewer.entities.getById('distancePin')!;
	distancePin.show = true;
	// @ts-ignore
	distancePin.position = cartesian;
	if (viewer.selectedEntity === distancePin) {
		distancePin.show = false;
	}
}
