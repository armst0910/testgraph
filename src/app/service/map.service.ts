import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {TagInput} from "../model/tag-input";

@Injectable()
export class MapService{

  constructor(private http:Http) {
  }

  getMapList(){
    // return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road').map((res:Response) => res.json().data);
  }

  getdatabudget(){
    return this.http.get('../src/app/data/budget_sub.json').map((res:Response) => res.json().data);
  }

   getDatabudget(word){
    let baseUrl = 'http://157.179.16.239:8080/ClouderaImpala/rest/query';
     baseUrl += '?q='+word;
    console.log(baseUrl);
    return this.http.get(baseUrl).map((res:Response) => res.json().data);
   }

}
