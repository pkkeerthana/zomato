import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { BooktableComponent } from './booktable/booktable.component';


const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'', component: AuthComponent
  },
  {
    path:'reviews', component: ReviewsComponent
  },
  {
    path:'orderfood', component: OrderFoodComponent
  },
  {
    path:'booktable', component: BooktableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  ReviewsComponent
]