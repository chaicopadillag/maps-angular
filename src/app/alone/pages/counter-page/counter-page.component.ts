import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  @Input() counter: number = 0;
}
