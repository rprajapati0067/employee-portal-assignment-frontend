import { Employee } from "./../model/employee.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmployeeService } from "../service/employee.service";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  genders = ["Male", "Female"];
  employees: any = [];
  employee = new Employee(101, "", "", "Male", "", "");

  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getEmp();
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employee);
    console.log("value: ", this.employee);
    location.reload();
  }
  getEmp() {
    this.employeeService.getEmployee().subscribe(res => {
      this.employees = res;
      console.log("The Data", this.employees);
    });
  }
}
