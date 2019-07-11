import {Component,OnInit,Input} from '@angular/core';
import {EmployeeService} from './app.employeeservice'
@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    empall: any[];

    

    constructor(private service:EmployeeService){

    }
   
    ngOnInit(){
       // this.service.getAllEmployee().subscribe((data:any)=>this.empall=data);
     this.empall= this.service.getAllEmployee();
    }
  
}