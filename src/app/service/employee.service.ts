import { Employee } from "./../model/employee.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  URL = "http://localhost:8080/employee";
  createEmployee(employee: Employee) {
    this.http.post(this.URL + "/register", employee).subscribe(res => {
      console.log(res);
      return res;
    });
  }
  getEmployee() {
    return this.http.get(this.URL + "/fetchAll").pipe(
      map(res => {
        return res;
      })
    );
  }
}
