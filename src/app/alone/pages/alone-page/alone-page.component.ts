import { Component } from '@angular/core';
import { CounterPageComponent } from '../counter-page/counter-page.component';

@Component({
  standalone: true,
  imports: [CounterPageComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
})
export class AlonePageComponent {}
