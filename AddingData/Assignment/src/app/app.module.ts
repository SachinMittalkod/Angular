import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoredComponent } from './stored/stored.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ProficiencyPipe } from './proficiency.pipe';
import { RatingComponent } from './rating/rating.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialComponent } from './material/material.component';
// import { MaterialCrudComponent } from './material-crud/material-crud.component';
// import { MaterialModuleModule } from './material-module/material-module.module';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    StoredComponent,
    CreateEmployeeComponent,
    ProficiencyPipe,
    RatingComponent,
    TempleteDrivenFormComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
















