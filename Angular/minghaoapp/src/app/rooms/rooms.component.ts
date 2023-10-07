import { Component } from '@angular/core';

@Component({
  selector: 'mhdev-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  // interpolation
  hotelName = 'Hiton Hotel';
  numberOfRooms = 100;

  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
