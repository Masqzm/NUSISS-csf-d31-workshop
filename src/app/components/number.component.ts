import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: false,
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
  imgPrefix = '/numbers/number'
  imgSuffix = '.jpg'

  @Input()        // For attribute binding (receive input from parent)
  imgNum = 0
}
