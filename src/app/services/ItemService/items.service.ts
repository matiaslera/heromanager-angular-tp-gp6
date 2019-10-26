import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration';
import { Item } from 'src/app/domain/Item';
import { LoginService } from '../loginService/login.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private logService:LoginService) { }

  async getItems(){
    const items = await this.http.get<Item[]>(REST_SERVER_URL + '/obtener_items/'+ this.logService.getidUserLogged()).toPromise()
    return items.map((item) => Item.fromJson(item))
  }
  async getItemDetail(id:String){
    return of (await this.http.get<Item>(REST_SERVER_URL + '/obtener_item_completo/'+ id).toPromise())
  }
}
