import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import mapboxgl from 'mapbox-gl';

import { env } from '../../environments/environment';
import { CounterPageComponent } from '../alone/pages/counter-page/counter-page.component';
import { MimiMapComponent } from './components/mimi-map/mimi-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout/maps-layout.component';
import { MapboxRoutingModule } from './mapbox-routing.module';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MakersPageComponent } from './pages/makers-page/makers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

mapboxgl.accessToken = env.MAPBOX_KEY;

@NgModule({
  declarations: [
    MimiMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MakersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapboxRoutingModule,
    SideMenuComponent,
    CounterPageComponent,
  ],
  exports: [MapsLayoutComponent],
})
export class MapboxModule {}
