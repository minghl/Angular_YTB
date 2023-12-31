import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
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
  constructor(@Inject(localStorageToken) private localStorage: any) {

  }

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotel';
    this.localStorage.setItem('name','Hiton Hotel');
  }
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
