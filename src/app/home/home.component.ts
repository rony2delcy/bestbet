import { Component, OnInit } from '@angular/core';
import {Employees} from '../model/employees.model';
import { CrudService} from '../service/crud.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees : Employees[];
  loading: boolean;
  cols: any[];
  constructor(private crudService: CrudService, public http: HttpClient) { }
 

  ngOnInit(): void {
      this.getEmployee();
      this.loading = true;
      this.cols = [
        { field: 'id', header: 'ID' },
        { field: 'employee_name', header: 'Employee Name' },
        { field: 'employee_salary', header: 'Employee Salary' },
        { field: 'employee_age', header: 'Employee Age' }
    ];
    }
    getEmployee() {
      this.crudService
      .getEmployee()
      .subscribe((data:Employees[]) => {
        console.log(data);
        this.employees = data;
      });
    }
  }
