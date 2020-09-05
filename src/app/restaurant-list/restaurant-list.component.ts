import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  Restaurants=[];
  subscription: Subscription;
  constructor(
    private restaurantService:RestaurantService,
    private dataService: DataService,
    public dialog:MatDialog,
    private router:Router
  ) { }

  ngOnInit() {
  //  this.subscription = this.restaurantService.restaurantsChanged.subscribe(
  //    (restaurants => {
  //      this.Restaurants = restaurants;
  //    })
  //  )
   this.dataService.fetchRestaurants().subscribe(resData => {
    this.Restaurants = resData['restaurants'];
   });
  }

  navigateReview(restaurant){
    this.restaurantService.setRestaurantDetails(restaurant);
    console.log(restaurant)
    this.router.navigate(['/reviews']);
  }

  openDialog(){
    const dialogRef = this.dialog.open(RestaurantDialog);
  }

}

@Component({
  selector:'app-restaurant-dialog',
  templateUrl:'./restaurantDialog.component.html'
})
export class RestaurantDialog {

}