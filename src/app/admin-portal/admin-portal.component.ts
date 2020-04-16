import { Component, OnInit } from "@angular/core";
import { usersModel } from "../models/users";
import { AdminService } from "../services/admin.service";
import { MatTableModule } from "@angular/material/table";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-admin-portal",
  templateUrl: "./admin-portal.component.html",
  styleUrls: ["./admin-portal.component.css"],
})
export class AdminPortalComponent implements OnInit {
  // userType : string = localStorage.getItem('userType');
 public users: usersModel[];
public columnsToDisplay: string[] = ['username', 'newEmail', 'actions'];


  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  public userDelete(username){
this.adminService.delete(username).subscribe((data: usersModel[]) => {
  console.log(data)
  this.getUserData();
  // this.users = data
})
  }
  getUserData() {
    this.adminService.getUsers().subscribe((data: usersModel[]) => {
      console.log(data);
      this.users = data;
    });
  }
}
