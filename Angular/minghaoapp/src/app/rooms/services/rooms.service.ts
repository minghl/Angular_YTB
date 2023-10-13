import { Inject, Injectable } from '@angular/core';
import {RoomList} from '../rooms'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = []

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http:HttpClient) {
    console.log('Room service initialized');
    console.log(this.config.apiEndpoint);
   }

  getRooms(){
    // <>generic syntax
    console.log('intogetroom');

    return this.http.get<RoomList[]>('/api/rooms');
  }
}
