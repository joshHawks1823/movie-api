import { Component, OnInit } from '@angular/core';
import { usersModel } from '../models/users';
import { AdminService } from '../services/admin.service';

import { userProfile } from '../models/userProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
username:string; 
  constructor() { }

  ngOnInit(): void {
      this.username = localStorage.getItem("username")
      
    }
    
  }


