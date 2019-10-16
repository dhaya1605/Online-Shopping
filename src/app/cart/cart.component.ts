import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items;
checkoutForm;

  constructor(private cartService:CartService,
    ) { 
    this.items = this.cartService.getItems();
   
  }
 purchase(){
   window.alert('your order has been placed');
 }

  ngOnInit() {
  }

}
