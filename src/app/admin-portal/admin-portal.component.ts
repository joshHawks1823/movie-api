import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})


export class AdminPortalComponent implements OnInit {
  
userType : string = localStorage.getItem('userType');


  constructor() { }

  ngOnInit(): void {
  }

}
