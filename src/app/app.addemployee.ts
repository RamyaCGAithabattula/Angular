import {Component,Input} from '@angular/core';

import { EmployeeService } from './app.employeeservice';
import {Router} from '@angular/router'
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{ 
   
    constructor(private service:EmployeeService,private router:Router){}
    proId:any;
    proName:any;
    proCost:any;
    proOnline:any;
    proCategory:any;
    proStore:any;
    myalldata:any;
    
    addData(){
        this.myalldata={proId:this.proId,proName:this.proName,proCost:this.proCost,proOnline:this.proOnline}
        if(this.service.addEmployee(this.myalldata)){
        this.router.navigate(['show']);

    }
   
}
}