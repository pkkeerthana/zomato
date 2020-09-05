import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('SearchForm') sform:NgForm;
  Restaurants:any;
  entity_type:any;
  entity_id:any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

  }

  loadRestaurants(event){
    if(event.keyCode == 13){

      // this.dataService.fetchRestaurants(
      //   this.entity_id, 
      //   this.entity_type).subscribe(resData => {
      //     console.log(resData);
      //   });

    //   console.log("from search"+this.sform.value.place);
    //  this.dataService.fetchLocationDetails(this.sform.value.place)
    //  .subscribe( resData => {
    //   this.entity_id = resData['location_suggestions'][0].entity_id;
    //   this.entity_type = resData['location_suggestions'][0].entity_type;
    //   console.log(resData);
   
    // })

    }
  }

}
