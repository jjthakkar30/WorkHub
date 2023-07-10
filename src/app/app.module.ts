import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginService } from './components/login/login.service';
import { HeaderComponent } from './components/header/header.component';
import { OfficeComponent } from './components/office/office.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { LibraryComponent } from './components/library/library.component';
import { RideComponent } from './components/ride/ride.component';
import { UserHomeProfileComponent } from './components/user-home-profile/user-home-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrdersComponent } from './components/cafeteria/orders/orders.component';
import { PlaceOrderComponent } from './components/cafeteria/place-order/place-order.component';
import { OrderCardComponent } from './components/cafeteria/orders/order-card/order-card.component';
import { OrderService } from './components/cafeteria/orders/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    OfficeComponent,
    CafeteriaComponent,
    LibraryComponent,
    RideComponent,
    UserHomeProfileComponent,
    PageNotFoundComponent,
    OrdersComponent,
    PlaceOrderComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
