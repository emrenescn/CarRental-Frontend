import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(key:string,value:string){
 localStorage.setItem(key,value);
  }
  getData(key:string){
   localStorage.getItem(key);
  }
  removeData(key:string){
   localStorage.removeItem(key);
  }
  clearData(){
    localStorage.clear();
  }
}
