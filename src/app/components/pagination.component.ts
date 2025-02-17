import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Output()   // For event binding (share event to parent)
  newNumber = new Subject<number>()

  // Fixed variables
  COUNT_MIN = 0
  COUNT_MAX = 30
  steps = [1, 2, 3, 4, 5]
  
  count = 0   // current num
  delta = 1   // increment/decrement value

  updateCount(delta: number) {
    this.count += delta

    // Loop count
    if(this.count > this.COUNT_MAX) {
      let offset = this.count - this.COUNT_MAX - 1
      this.count = this.COUNT_MIN + offset
    }
    if(this.count < this.COUNT_MIN) {
      let offset = -(this.count + 1)
      this.count = this.COUNT_MAX - offset
    }

    // Fire event (to share to parent)
    this.newNumber.next(this.count)   

    // Debugging
    console.info('count: ', this.count)
  }

  updateStep($event: any) {
    this.delta = parseInt($event.target.value)
  }
}
