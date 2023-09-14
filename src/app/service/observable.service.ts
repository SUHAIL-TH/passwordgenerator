import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }
  call(){
  return  new Observable((observe)=>{
      observe.next("1")
      observe.next("hii suhail")

    })
  }
}
