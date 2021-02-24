import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'email', 'birthday' ,'career', 'hobby', 'action'];
  dataSource = new MatTableDataSource<any[]>();
  list: any = [];
  checkData: boolean= false;
  constructor(private localStorage: LocalStorageService,private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.list = this.localStorage.get('customer');
    this.dataSource.data = this.list;
  }
 
  deleteCustomer(i){
    this.list.splice(i,1);
    this.localStorage.set('customer',this.list);
    this.dataSource.data = this.localStorage.showList();
  }

  
  parentData:any;
  editCustomer(i){
    console.log(i);
    this.data.updateID(i);
    this.data.checkData = true;
    this.router.navigateByUrl("/customers/create");
  }

  
}
