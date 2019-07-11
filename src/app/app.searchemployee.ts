import {Component,OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
import {Routes,Router} from '@angular/router';
@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})


export class SearchEmployeeComponent {
    empId:any;
    empName:any;
    empSalary:any;
    empDepartment:any;
    empsearch:any;
    empall:any[]=[];
    Search:any[]=[];
    constructor(private service:EmployeeService,private routes:Router){

    }
     ngOnInit(){
       // this.service.getAllEmployee().subscribe((data:any)=>this.empall=data);
     this.empall= this.service.getAllEmployee();
   
    }
   
    searchData(){
        
        for(let data of this.empall)
        {
            if(data.empId==this.empId)
            {
                this.Search.push(data);
                 console.log(data); 
            }
        
        } 
    }

}