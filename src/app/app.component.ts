import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;
  minValue = 0;
  maxValue = 100;
  stepValue = 5;
  name = 'Angular ' + VERSION.major;
}
