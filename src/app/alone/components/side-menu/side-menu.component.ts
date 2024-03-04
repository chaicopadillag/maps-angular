import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type MenuItems = {
  title: string;
  path: string;
};

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
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
    {
      path: '/alone',
      title: 'Alone page',
    },
  ];
}
