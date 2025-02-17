import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PaginationEvent } from './models/models';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Output()   // For event binding (share event to parent)
  numUpdated = new Subject<PaginationEvent>()

  // Fixed variables
  steps = [1, 2, 3, 4, 5]
  
  @Input()
  count = 0   // current num
  step = 1   // increment/decrement value

  // constructor() {
  //   for (let i = 1; i <= 10; i++) {
  //     this.steps.push(i);
  //   }
  // }

  updateCount(step: number) {
    this.count += step

    // Fire event (to share to parent)
    const event: PaginationEvent = {
      value: this.count,
      step: this.step
    }
    this.numUpdated.next(event)   

    // Debugging
    console.info(`step: ${this.step}, count: ${this.count}`)
  }

  updateStep($event: any) {
    this.step = parseInt($event.target.value)
  }
}
