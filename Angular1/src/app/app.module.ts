import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { AddTocartComponent } from './Components/add-tocart/add-tocart.component';

import { SwitchComponent } from './Components/switch/switch.component';
import { ParameterComponent } from './Components/parameter/parameter.component';
import { EmployeeComponent } from './Components/Employee/employee/employee.component';
import { StudentComponent } from './Components/student/student.component';
import { AssignInitialPipe } from './Components/SharedModule/assign-initial.pipe';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { FilterComponent } from './Components/filter/filter.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HighlightDirective } from './Components/highlight.directive';
import { StoredataComponent } from './Components/storedata/storedata.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    AboutUsComponent,
    PagenotfoundComponent,
    AddTocartComponent,
    SwitchComponent,
    ParameterComponent,
    EmployeeComponent,
    StudentComponent,
    AssignInitialPipe,
    ParentComponent,
    ChildComponent,
    FilterComponent,
    HighlightDirective,
    StoredataComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  // providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }











