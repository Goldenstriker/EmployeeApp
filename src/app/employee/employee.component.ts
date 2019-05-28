import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:Employee[]=[{id:101,name:'Ninad'},{id:102,name:'Prajakta'},{id:103,name:'SK'},{id:104,name:'TV'}];
  delete(emp:Employee):void{
  this.employee.splice(this.employee.indexOf(emp),1);
  }
  constructor() { }
  ngOnInit() {
  }

}