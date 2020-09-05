import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { RestaurantListComponent, RestaurantDialog } from './restaurant-list/restaurant-list.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInterceptorService } from './auth.intercepter';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { BooktableComponent } from './booktable/booktable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchComponent,
    RestaurantListComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    ReviewsComponent,
    OrderFoodComponent,
    BooktableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents:[RestaurantDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
