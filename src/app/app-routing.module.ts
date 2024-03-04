import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () =>
      import('./mapbox/mapbox.module').then((m) => m.MapboxModule),
  },
  {
    path: 'alone',
    loadComponent: () =>
      import('./alone/pages/alone-page/alone-page.component').then(
        (m) => m.AlonePageComponent
      ),
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
