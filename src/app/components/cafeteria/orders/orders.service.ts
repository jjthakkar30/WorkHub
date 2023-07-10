import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  user_orders: Order[] = [
    new Order('1', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 6, 7)),
    new Order('2', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 6, 6)),
    new Order('3', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 6, 3)),
    new Order('4', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 30)),
    new Order('5', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 5, 28)),
    new Order('6', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 26)),
    new Order('7', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 23)),
    new Order('8', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 5, 20)),
    new Order('9', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 5, 19)),
    new Order('10', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 14)),
    new Order('11', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 13)),
    new Order('12', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 5, 12)),
    new Order('13', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 9)),
    new Order('14', {ordered: true, ifVeg:true}, {ordered: true, ifVeg:true}, new Date(2023, 5, 8)),
    new Order('15', {ordered: false, ifVeg:true}, {ordered: true, ifVeg:false}, new Date(2023, 5, 7)),
  ];

  getOrders() {
    return this.user_orders.slice();
  }
}