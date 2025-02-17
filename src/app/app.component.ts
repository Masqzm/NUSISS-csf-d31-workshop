import { Component } from '@angular/core';
import { PaginationEvent } from './components/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31_workshop';
  
  // Fixed variables
  COUNT_MIN = 0
  COUNT_MAX = 30
  
  // Attribute binded to currentNum in number (child) & count in pagination (child)
  count = 0   

  // Updates count onNewNumber (event binded from pagination (child))
  onNewNumber($event: PaginationEvent) {
    this.count = $event.value

    // Loop count
    if(this.count > this.COUNT_MAX) {
      let offset = this.count - this.COUNT_MAX - 1
      this.count = this.COUNT_MIN + offset
    }
    if(this.count < this.COUNT_MIN) {
      let offset = -(this.count + 1)
      this.count = this.COUNT_MAX - offset
    }
  }
}
