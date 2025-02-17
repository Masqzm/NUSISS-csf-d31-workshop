import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day31_workshop';

  count = 0   // attribute binded to currentNum in number (child)

  // Updates count onNewNumber (event binded from pagination (child))
  onNewNumber($event: number) {
    this.count = $event
  }
}
