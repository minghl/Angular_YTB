import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'mhdev-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // create another instance for employee component

  // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName: string = 'John';

  // Self: roomsService should be available here
  constructor( private roomsService: RoomsService) {

  }

  ngOnInit(): void {

  }
}
