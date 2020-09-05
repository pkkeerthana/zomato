import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from '../restaurant-list/restaurant.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  restaurant:any;
  reviews:any;
  constructor(
    private restaurantService: RestaurantService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
   this.restaurant = this.restaurantService.getRestaurantDetails();
   const id = this.restaurant.id;
  this.dataService.fetchReviews(id).subscribe(reviews => {
    console.log(reviews['user_reviews']);
    this.reviews = reviews['user_reviews'];
  });
  
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
   
  }
}
