import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id: any = "";
  checkData: boolean = false;
  
  constructor() { }

  public contentID = new BehaviorSubject(this.id);
  public shareID = this.contentID.asObservable();
  updateID(id) {
    this.contentID.next(id);
  }

  
}
