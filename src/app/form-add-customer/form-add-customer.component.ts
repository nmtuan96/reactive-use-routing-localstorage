import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-form-add-customer',
  templateUrl: './form-add-customer.component.html',
  styleUrls: ['./form-add-customer.component.css']
})
export class FormAddCustomerComponent implements OnInit {
  list: any = [];
  customer:any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl('',[ Validators.minLength(6), Validators.maxLength(20), Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    career: new FormControl(''),
    hobby: new FormControl(''),
    checkB : new FormControl(false),
  });

  CheckUpdate: boolean = false;
  CheckCreate: boolean = false;
  // constrainted: boolean;
  checkbox: boolean = false;
  valueCustomer: any;
  idUpdateCustomer: any;
  constructor(private fb: FormBuilder, private localStorage: LocalStorageService, private router: Router, private data: DataService) {
    
  }
  
  
  ngOnInit(): void {
  //  this.constraintValidate();
    this.list = this.localStorage.showList();
    if(this.data.checkData){
      this.data.shareID.subscribe(x=>{
        this.idUpdateCustomer= x;
        this.valueCustomer=  this.list[x];
        this.customer.controls['id'].setValue(this.valueCustomer.id);
        this.customer.controls['name'].setValue(this.valueCustomer.name);
        this.customer.controls['age'].setValue(this.valueCustomer.age);
        this.customer.controls['address'].setValue(this.valueCustomer.address);
        this.customer.controls['career'].setValue(this.valueCustomer.career);
        this.customer.controls['hobby'].setValue(this.valueCustomer.hobby);
        this.customer.controls['checkB'].setValue(this.valueCustomer.checkB);
        this.checkbox= this.valueCustomer.checkB;
        if(this.valueCustomer.email){
          this.customer.controls['email'].setValue(this.valueCustomer.email);
        }
        this.data.checkData= false;
      });
    }
    
    if(this.valueCustomer){
      this.CheckUpdate = true;
    }else{
      this.CheckCreate = true;
    }
  }

  addCustomer(){
    if(!this.customer.value.id){
      this.customer.value.id = this.list.length +1;
      this.list.push(this.customer.value);
      this.localStorage.set('1', this.list);
    }
      this.customer.reset();
      this.CheckCreate = false;
      this.router.navigateByUrl('/customers');
      // this.checkbox = false;
      
  }
  updateCustomer(){
    if(this.idUpdateCustomer){
      for (let i in this.list) {
        if(this.idUpdateCustomer == i){
          this.list[i] = this.customer.value
        }
      }
      this.localStorage.set('1',this.list);
      this.customer.reset();
      this.CheckUpdate = false;
      this.router.navigateByUrl('/customers');
    }
  }
  back(){
    this.customer.reset();
    this.router.navigateByUrl('/customers');
  }
  
  // checkEmail(){
  //   var id = this.customer.value.id
  //   var nameCheck = this.customer.value.name;
  //   var ageCheck = this.customer.value.age;
  //   var address = this.customer.value.address;
  //   var career = this.customer.value.career;
  //   var hobby = this.customer.value.hobby;
  //   var email= this.customer.value.email;
  //   this.checkbox =  !this.checkbox;
  //   if(this.checkbox == false){
  //     this.customer = this.fb.group({
  //       id: new FormControl(id),
  //       name: new FormControl(nameCheck,[ Validators.minLength(6), Validators.maxLength(20), Validators.required]),
  //       age: new FormControl(ageCheck, [Validators.required, Validators.min(0), Validators.max(100)]),
  //       address: new FormControl(address, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  //       career: new FormControl(career),
  //       hobby: new FormControl(hobby),
  //       checkB : new FormControl(false),
  //     });
  //   }else{
  //     this.customer = this.fb.group({
  //       id: new FormControl(id),
  //       name: new FormControl(nameCheck,[ Validators.minLength(6), Validators.maxLength(20), Validators.required]),
  //       age: new FormControl(ageCheck, [Validators.required, Validators.min(0), Validators.max(100)]),
  //       address: new FormControl(address, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  //       email: new FormControl(email, [Validators.required, Validators.email]),
  //       career: new FormControl(career),
  //       hobby: new FormControl(hobby),
  //       checkB : new FormControl(true),
  //     });
  //   }
  // }
  
  // constraintValidate() {
  //   const address = this.customer.get('address');
  //   this.customer.get('age').valueChanges.subscribe(age=>{
  //     if(age > 15){
  //       address.setValidators([Validators.required, Validators.minLength(20) , Validators.maxLength(50)]);
  //       this.constrainted = true;
  //     } else this.constrainted = false;
  //   })
  // }
}