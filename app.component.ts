import { Component, OnInit } from '@angular/core';
import {UserDataService} from './user-data.service';
import *as pumpdata from '../assets/file/pumpDrive.json';
import *as powerdata from '../assets/file/powerGroup.json';
import { Observable } from 'rxjs';
import {from, of} from 'rxjs';
import {map} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Renewalkit';

  pumpmsn:any = [];
  powermsn:any = [];
  finalDropDownArray:any  = [];
  selectedSN: any;
  pumpDriveFiltered: any = [];
  powerGroupFiltered : any = [];
  viewcart: any;
  quantity:number=1;
  i=0;
  
  
  

  
  

 
 

  constructor(private uds :UserDataService,private detail:MatDialog,private router:Router){ }

  pdata :any= this.uds.Json_pump;   //pumpdrive
  pgroup:any = this.uds.Json_power;  //powergroup

  ngOnInit(): void { 
  }

 
 selectdrop(){
  
  for(let i = 0; i < this.pdata.length; i++){
      this.pumpmsn[i] = this.pdata[i].Machine_Serial_Number;
    }
    this.pumpmsn = Array.from(new Set(this.pumpmsn));
  
    for(let i = 0; i < this.pgroup.length; i++){
        this.powermsn[i] = this.pgroup[i].Machine_Serial_Number;
      }
      this.powermsn = Array.from(new Set(this.powermsn));
      
   this.finalDropDownArray = this.pumpmsn,this.powermsn;
  
    }

valueChangedforpumpDrive() {
  // console.log(this.selectedSN);
  for(let i=0;i<this.pdata.length;i++) {                                //pumpDriveFiltered
    if(this.pdata[i].Machine_Serial_Number == this.selectedSN) {
      this.pumpDriveFiltered.push(this.pdata[i]);
      
    }
  }

  for(let i=0;i<this.pgroup.length;i++) {                               //powerGroupFiltered                  
    if(this.pgroup[i].Machine_Serial_Number == this.selectedSN) {
     this.powerGroupFiltered.push(this.pgroup[i]);
   }
 }
  }


 


plus(){
  if (this.i!=10){
    this.i++;
      }
      this.quantity=this.i;
    
  }

      
minus()
{
  if (this.i!=0){
this.i--;
  }
  this.quantity=this.i;
}
// inc(item:any){
//   if(item.quantity != 10){
//     item.quantity += 1;
//   }
// }
// dec(item:any){
//     if(item.quantity != 1){
//       item.quantity -= 1;
//     }
// }


gotopage(pagename:string){
  this.router.navigate(['${pagename}']);

}





}
