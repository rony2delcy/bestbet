import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './service/crud.service';
import { DataTableModule  } from 'primeng/datatable';
import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseapi),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    InputTextModule,
    TableModule,
    BrowserAnimationsModule,
    DataTableModule,
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
