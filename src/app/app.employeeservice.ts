import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
  
   empall:any[]=[
       {empId:1,empName:"ggh",empSalary:3189,empDepartment:"had"},
    {empId:2,empName:"ggtfrh",empSalary:3157489,empDepartment:"hfad"},
    {empId:3,empName:"gghgh",empSalary:315689,empDepartment:"hgfad"}
];
    constructor(private http:HttpClient){}
 getAllEmployee(){
   //  return this.http.get("assets/employee.json");
   return this.empall;
 }
 addEmployee(data:any){
      this.empall.push(data);
      return true;
 }

} 
