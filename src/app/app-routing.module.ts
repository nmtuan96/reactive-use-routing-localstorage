import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddCustomerComponent } from './form-add-customer/form-add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch:'full' },
  { path: 'customers', component: ListCustomerComponent},
  { path: 'customers/create', component: FormAddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
