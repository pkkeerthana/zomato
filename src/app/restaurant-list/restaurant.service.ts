import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn:'root'})
export class RestaurantService {

    // restaurantsChanged = new Subject<any>();

    restaurantdetails = new Subject<any>();

    private restaurant:any=[];

    private Restaurants:any=[];
    constructor() {}

    getRestaurants() {
        return this.Restaurants.slice();
    }

    setRestaurants(restaurants) {
        this.Restaurants = restaurants;
      //  this.restaurantsChanged.next(this.Restaurants.slice());
    }

    getRestaurantDetails(){
        return this.restaurant;
    }

    setRestaurantDetails( restaurant ){
        this.restaurant = restaurant;
        this.restaurantdetails.next(this.restaurant);
    }
}