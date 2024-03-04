import { Component } from '@angular/core';

type MenuItems = {
  title: string;
  path: string;
};

@Component({
  selector: 'map-side-menu',
  templateUrl: './side-menu.component.html',
  styles: `li:hover{cursor:pointer}`,
})
export class SideMenuComponent {
  public menuItems: MenuItems[] = [
    {
      path: '/map/fullscreen',
      title: 'FullScreen',
    },
    {
      path: '/map/zoom',
      title: 'Zoom',
    },
    {
      path: '/map/markers',
      title: 'Markers',
    },
    {
      path: '/map/properties',
      title: 'Houses',
    },
  ];
}
