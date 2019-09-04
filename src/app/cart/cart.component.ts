import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items ;
  checkoutForm; 
  constructor(private cartService: CartService,
    private formBuilder : FormBuilder) { 
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group(
      {'name': '', 'address':''});
  }

  onSubmit(customerData){
    // Process the checkout form
    console.warn("Order submitted!", customerData);

    // clear the cart and reset the form
    this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  
}