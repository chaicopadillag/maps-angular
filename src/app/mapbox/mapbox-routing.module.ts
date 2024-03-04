import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MakersPageComponent } from './pages/makers-page/makers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent,
      },
      {
        path: 'markers',
        component: MakersPageComponent,
      },
      {
        path: 'zoom',
        component: ZoomRangePageComponent,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'fullscreen',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapboxRoutingModule {}
