import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiURL: string = 'http://dummy.restapiexample.com/api/v1';
  constructor(private firestore:AngularFirestore, private httpClient: HttpClient) { }

  Get_Studemt(){
   return this.firestore.collection('Students').snapshotChanges();
  }
  getEmployee() {
    return this.httpClient.get(this.apiURL+'/employees')
  }
}
