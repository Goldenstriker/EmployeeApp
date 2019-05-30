import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  delete(emp: Employee): void {
    //this.employees.splice(this.employees.indexOf(emp), 1);
    this.employeeService.delete_employee(emp.id).subscribe();
  }
  constructor(public employeeService: EmployeeService) { }
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.get_employees().subscribe((res) => this.employees = res);
  }

}