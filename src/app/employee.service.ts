import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from  './employee'; 
@Injectable()
export class EmployeeService {
  baseUrl:string="https://my-json-server.typicode.com/Goldenstriker/employeedb";

  constructor(private httpClient:HttpClient) { }

  get_employees(){
    return this.httpClient.get<Employee[]>(this.baseUrl+'/employees');
  }
  get_employee(id:number){
    return this.httpClient.get<Employee>(this.baseUrl+'/employees/'+id);
  }
  delete_employee(id:number){
    return this.httpClient.delete(this.baseUrl+'/employees/'+id);
  }
}