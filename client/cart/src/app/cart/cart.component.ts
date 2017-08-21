import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { UsersService } from '../services/users/users.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(
		private router: Router,
		private cartService: CartService,
		private flashMessage:FlashMessagesService,
		private usersService: UsersService
		) { }

	result : any;
	title: any;
	price: any;
	quantity: any;
	purchased: any;
	activeItem: any;

	ngOnInit() { 
		this.cartService.getItem().subscribe(data => {
			console.log(data)
			this.result = data;
		}, err => {
			console.log(err)
		})
	}
	postItem(item){
		const itemObj = {
				title: this.title,
				quantity: this.quantity,
				price: this.price,
				purchased: this.purchased,
				activeItem: this.activeItem
			}

		this.cartService.postOneItem(itemObj).subscribe(data => {
			console.log(data)
		// 	if(data.)
		// 	this.flashMessage.show('Your item has been added', {cssClass: 'alert-success', timeout: 5000});

		})

	}

}








