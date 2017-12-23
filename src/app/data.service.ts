import { Injectable } from '@angular/core';
import {Http,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {



  constructor(public http:Http) { }

  getShoppingItems(){
    return this.http.get('api/shopping').map(res=>res.json());
  }

  addShoopingItem(newItem){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/shopping',newItem,{headers:headers}).map(res=>res.json());
  }

  deleteShoppingItem(id){
    return this.http.delete('api/shopping/'+id).map(res=>res.json());
  }

  updateShoppingItem(newItem){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('api/shopping/'+newItem._id,newItem,{headers:headers}).map(res=>res.json());
  }

}
