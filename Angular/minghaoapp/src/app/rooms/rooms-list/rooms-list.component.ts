import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'mhdev-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // shouldn't mute the roomList property,have to apply/pass a new instance every time
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{

  @Input()rooms: RoomList[]= [];

  @Input()title: string = '';

  // output event, child -> parent
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {

  }



  selectRoom(room:RoomList){
    // give back to parent
    this.selectedRoom.emit(room);
  }
}
