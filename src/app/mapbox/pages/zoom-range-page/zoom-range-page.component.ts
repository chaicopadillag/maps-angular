import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styles: `
  .map{
   width: 100vw;
    height: 100vh;
  }

  .floating-range{
    position: fixed;
    left:20px;
    bottom:20px;
    z-index:999;
    width:500px;
    background-color:white;
    border-radius:10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.5)
  }

  .floating-content{
    display:flex;
    align-items:center
  }

  `,
})
export class ZoomRangePageComponent implements AfterViewInit {
  zoom = 9;
  lng: number = 0;
  lat: number = 0;
  map?: Map;
  lngLat = new LngLat(-79.84925684827728, -6.759398733362744);

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw 'Error Map';
    }

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    this.listenersMap();
  }

  listenersMap() {
    this.map?.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map?.on('move', () => {
      this.lng = this.map!.getCenter().lng;
      this.lat = this.map!.getCenter().lat;
    });

    this.map?.on('zoomend', (event) => {
      const finalZoom = event.target.getZoom();
      if (finalZoom > 18) this.map?.setZoom(18);
    });
  }

  zoonIn() {
    this.map?.setZoom(this.zoom - 1);
  }

  zoomOut() {
    this.map?.setZoom(this.zoom + 1);
  }

  rangeZoom(value: string) {
    this.map?.setZoom(Number(value));
  }
}
