import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAddCustomerComponent } from './form-add-customer/form-add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { AgePipe } from './pipes/age.pipe';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { StringNameDirective } from './directives/string-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormAddCustomerComponent,
    ListCustomerComponent,
    AgePipe,
    NumberOnlyDirective,
    StringNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
