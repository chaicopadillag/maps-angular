import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'mimi-map',
  templateUrl: './mimi-map.component.html',
  styles: `div{
    width:100%;
    height:150px;
    margin:0;
  }`,
})
export class MimiMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) {
      throw 'Error Map init';
    }

    if (!this.lngLat) throw 'Error lng and lat requiered';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom
      interactive: false,
    });

    new Marker().setLngLat(this.lngLat).addTo(this.map);
  }
}
