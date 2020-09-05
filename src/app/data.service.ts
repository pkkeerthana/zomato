import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RestaurantService } from './restaurant-list/restaurant.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Restaurants: any;

  restaurantsChanged = new Subject();
  constructor(
    private http:HttpClient,
    private restaurantService: RestaurantService
  ) { }

  fetchRestaurants(){
    // const headers = new HttpHeaders().set('user-key','fb65f765faed30f895f332ac758a64c2');
    const params = new HttpParams();
    params.append('start','2');
    params.append('count','5');
    return this.http.get('https://developers.zomato.com/api/v2.1/search',
    {
      params:params
    })
    .pipe( tap(resdata => {
      this.restaurantService.setRestaurants(resdata['restaurants']);
    }));
  }

  // fetchLocationDetails(place){
  //   const params = new HttpParams().set('query',place);
  //   return this.http.get('https://developers.zomato.com/api/v2.1/locations');
  // }

  fetchReviews(id){
    const params = new HttpParams().set('res_id',id);
    return this.http.get('https://developers.zomato.com/api/v2.1/reviews',
          {
            params:params
          }
          )
  }


  fetchCuisines(id:string){
    const params = new HttpParams().set('city_id', id);
    return this.http.get('https://developers.zomato.com/api/v2.1/collections',{params: params});
  }
}
