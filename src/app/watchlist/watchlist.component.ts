import { Component, OnInit } from '@angular/core';
// import { Watchlist } from '../models/watchlist';
import { SavedService } from '../saved.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchLists = [];

  constructor(private watchlist: SavedService) { }
 
  
  ngOnInit(): void {
    
      this.watchlist.getWatchList().subscribe((data: any[]) => {
        console.log(data);
    this.watchLists = data;
  });
}

public delete(movieid){
  this.watchlist.delete(movieid).subscribe((data) => {
    console.log(data)
    this.watchlist.getWatchList().subscribe((data: any[]) => {
      console.log(data);
  this.watchLists = data;
});
  })
    }
}




