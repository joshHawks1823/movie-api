import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedService } from '../saved.service';


@Component({
  selector: 'app-signup',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

 
  constructor(private http: HttpClient) { }

  ngOnInit() {}

}
