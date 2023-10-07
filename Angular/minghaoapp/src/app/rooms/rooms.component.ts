import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'mhdev-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  // interpolation
  hotelName = 'Hiton Hotel';
  numberOfRooms = 100;

  hideRooms = false;

  rooms: Room  =  {
    totalRooms: 30,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = []

  selectedRoom!: RoomList;

toggle(){
  this.hideRooms = !this.hideRooms;
}
  constructor(){}

  ngOnInit(): void{
    this.roomList = [  {
      roomNumber:1,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1518791841217-8f162f11131',
    checkinTime: new Date('11-Nov-2023') ,
    checkoutTime: new Date('14-Nov-2023'),
    rating: 4.5,
  },
    {
      roomNumber:2,
    roomType: 'Deluxe Room',
    amenities: 'Air conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1518791841217-8f162f11131',
    checkinTime: new Date('11-Nov-2023') ,
    checkoutTime: new Date('14-Nov-2023'),
    rating: 3.45242,
  },
    {
      roomNumber:3,
    roomType: 'Private Suite',
    amenities: 'Air conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 15500,
    photos: 'https://images.unsplash.com/photo-1518791841217-8f162f11131',
    checkinTime: new Date('11-Nov-2023') ,
    checkoutTime: new Date('14-Nov-2023'),
    rating: 2.6,
  },
  ]
  }

  selectRoom(room:RoomList){
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom(){
    const room: RoomList = {
      roomNumber:4,
      roomType:'Private Suite',
      amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f11131',
      checkinTime: new Date('11-Nov-2023') ,
      checkoutTime: new Date('14-Nov-2023'),
      rating: 4.5,
    }
    // this.roomList.push(room);
    // keep the origin data and add the new record
    // spread operator
    // using spread operator to make sure okay the existing data is already available in array and new record gets added
    this.roomList = [...this.roomList, room];
  }

}
