import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface ColorMarker {
  color: string;
  marker: Marker;
}

interface ColorMarkerLngLat {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-makers-page',
  templateUrl: './makers-page.component.html',
  styleUrl: './makers-page.component.css',
})
export class MakersPageComponent implements AfterViewInit {
  map?: Map;
  markerColors: ColorMarker[] = [];
  lngLat = new LngLat(-79.84925684827728, -6.759398733362744);

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      throw 'Error Map';
    }

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 14,
    });
    this.readMarkersToLocal();
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const lngLat = this.map.getCenter();

    this.addMarketMap(lngLat, color);
  }

  addMarketMap(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    marker.on('dragend', () => this.saveInLocalStorage());

    this.markerColors.push({ color, marker });
    this.saveInLocalStorage();
  }

  removeMarker(indice: number) {
    this.markerColors[indice].marker.remove();
    this.markerColors.splice(indice, 1);
    this.saveInLocalStorage();
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 15,
      center: marker.getLngLat(),
    });
  }

  readMarkersToLocal() {
    const markers: ColorMarkerLngLat[] = JSON.parse(
      localStorage.getItem('markers') || '[]'
    );
    if (markers.length <= 0) return;

    for (const marker of markers) {
      const [lng, lat] = marker.lngLat;
      this.addMarketMap(new LngLat(lng, lat), marker.color);
    }
  }

  saveInLocalStorage() {
    const markers: ColorMarkerLngLat[] = this.markerColors.map(
      ({ color, marker }) => ({ color, lngLat: marker.getLngLat().toArray() })
    );

    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
