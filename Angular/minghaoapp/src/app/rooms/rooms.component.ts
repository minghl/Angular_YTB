import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'mhdev-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,DoCheck,AfterViewInit, AfterViewChecked {
  // interpolation
  hotelName = 'Hiton Hotel';
  numberOfRooms = 100;

  hideRooms = true;

  rooms: Room  =  {
    totalRooms: 30,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';
  roomList: RoomList[] = [];



  stream = new Observable(observer=>{
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    observer.error('error');
  })

  selectedRoom!: RoomList;



  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  // static true itis safe to inside of its parent
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  totalBytes = 0;
  // roomService = new RoomsService();

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  )

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms)=> rooms.length)
  )

  constructor(@SkipSelf() private roomsService: RoomsService){

  }

  ngOnInit(): void{

    this.roomsService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }

    })
    this.stream.subscribe({
      next:(value)=>console.log(value),
      complete: ()=>console.log('complete'),
      error:(error)=>console.log(error),


    })
    this.stream.subscribe((data)=>console.log(data))
    // private service
    // this.roomList = this.roomsService.getRooms();
    // this.subscription =  this.roomsService.getRooms$.subscribe(rooms=>{
    //   this.roomList = rooms;
    // })
    // console.log('ngOnINit');


  }

  ngDoCheck(): void {
    console.log('doChekc is loading');

  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = "Last Title";
    // this.headerChildrenComponent.get()

  }

  ngAfterViewChecked(): void {

  }

  selectRoom(room:RoomList){
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom(){
    const room: RoomList = {
      // roomNumber:'4',
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
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  }

  editRoom(){
    const room: RoomList = {
      roomNumber:'3',
      roomType:'Private Suite',
      amenities:'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f11131',
      checkinTime: new Date('11-Nov-2023') ,
      checkoutTime: new Date('14-Nov-2023'),
      rating: 4.5,
    }
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList = data;
    });
  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList = data;
    })
  }

  ngOnDestroy(){
    // remove it from memory
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

