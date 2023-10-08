import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
@Component({
  selector: 'mhdev-root',
  templateUrl: './app.component.html',
  // template:`<h2>Hello world from inline template!</h2>
  // <div>Angular is awsome</div>`,
  styleUrls: ['./app.component.scss'],
  // styles:[`h1 { color: red}`],
})
export class AppComponent implements OnInit{
  title = 'minghaoapp';

  // role = 'Admin';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
