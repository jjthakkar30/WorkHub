import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrdersComponent } from './components/cafeteria/orders/orders.component';
import { PlaceOrderComponent } from './components/cafeteria/place-order/place-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'cafeteria',
    component: CafeteriaComponent,
    children: [
      { path: '', component: OrdersComponent},
      { path: 'place-order', component: PlaceOrderComponent }
    ]
  },
  {
    path:'office',
    component: PageNotFoundComponent
  },
  {
    path:'library',
    component: PageNotFoundComponent
  },
  {
    path:'rides',
    component: PageNotFoundComponent
  },
  {
    path:'user',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
