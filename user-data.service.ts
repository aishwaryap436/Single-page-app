import { Injectable } from '@angular/core';
import *as pumpdata from '../assets/file/pumpDrive.json';
import *as powerdata from '../assets/file/powerGroup.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  
  // url1  = "../assets/file/pumpDrive.json"
  // url2 = "../assets/file/powerGroup.json"
  
  
  // response(): Observable<any>{
  //   return this.http.get(this.url1)
  //  }
   
     Json_pump = pumpdata;
     Json_power = powerdata;
         
      
   
   
    

}
