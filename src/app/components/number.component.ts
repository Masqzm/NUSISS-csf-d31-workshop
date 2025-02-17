import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: false,
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  imgPrefix = '/assets/numbers/number'
  imgSuffix = '.jpg'

  @Input()        // For attribute binding (receive input from parent)
  currentNum = 0
}
