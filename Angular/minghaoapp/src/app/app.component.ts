import { Component } from '@angular/core';
@Component({
  selector: 'mhdev-root',
  templateUrl: './app.component.html',
  // template:`<h2>Hello world from inline template!</h2>
  // <div>Angular is awsome</div>`,
  styleUrls: ['./app.component.scss'],
  // styles:[`h1 { color: red}`],
})
export class AppComponent {
  title = 'minghaoapp';

  role = 'Admin';
}
