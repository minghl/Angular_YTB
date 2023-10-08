import { Injectable } from '@angular/core';
import {RoomList} from '../rooms'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [  {
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

  constructor() {
    console.log('Room service initialized');

   }

  getRooms(){
    return this.roomList;
  }
}
