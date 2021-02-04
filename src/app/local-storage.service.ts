import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
 
  constructor() {
    this.localStorage = window.localStorage;
   }
  get(key: any): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }
  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      this.showList();
      return true;
    }
    return false;
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }

  lengthValue(): any{
    return this.localStorage.length +1;
  }
  showList(){
    let list= [];
    if(this.localStorage.length !== 0){
      list= this.get('1')
      return list;
    }
    return list;
  }

}
