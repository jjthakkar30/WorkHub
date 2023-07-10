import { Component, Injectable, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from './orders.service';
import { Order } from './order.model';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
@Injectable()
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  @ViewChild('scroll', {static: false}) scrollRef !: ElementRef;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  leftScroll() {
    this.scrollRef.nativeElement.scrollLeft -= 200;
  }

  rightScroll() {
    this.scrollRef.nativeElement.scrollLeft += 200;
  }

  onPlaceOrder() {
    // this.router.navigate(['place-order'], {relativeTo: this.route});
  }
}
