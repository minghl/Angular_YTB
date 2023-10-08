import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mhdev-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  empName: string = 'John';

  constructor() {

  }

  ngOnInit(): void {

  }
}
