import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from  './employee'; 
@Injectable()
export class EmployeeService {
  baseUrl:string="http://dummy.restapiexample.com/api/v1/";

  constructor(private httpClient:HttpClient) { }

  get_employees(){
    return this.httpClient.get<Employee[]>(this.baseUrl+'/employees');
  }
  get_employee(id:number){
    return this.httpClient.get<Employee>(this.baseUrl+'/employee/'+id);
  }
}