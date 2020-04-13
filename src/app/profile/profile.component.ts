import { Component, OnInit } from '@angular/core';
import { usersModel } from '../models/users';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public users: usersModel[];

  constructor(private userFetch: AdminService) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.userFetch.getUsers().subscribe((data: usersModel[]) => {
      console.log(data);
      this.users = data;
    })
  }

}
