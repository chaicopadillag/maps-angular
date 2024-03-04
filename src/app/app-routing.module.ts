import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () =>
      import('./mapbox/mapbox.module').then((m) => m.MapboxModule),
  },
  {
    path: '**',
    redirectTo: 'map',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
