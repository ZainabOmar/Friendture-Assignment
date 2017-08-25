import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
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
		private flashMessage:FlashMessagesService
		) { }

	result : any;
	title: any;
	price: any;
	quantity: any;
	purchased: any;
	saved: any;
	flag = false;

	ngOnInit() {}
	postItem(){
		var price = document.getElementById('getPrice').innerText;
		const item = {
			title: this.title,
			quantity: this.quantity,
			price: price,
			purchased: this.purchased,
			saved: this.saved
		}


		this.cartService.postOneItem(item).subscribe(data => {
			if(!data) {
				this.flashMessage.show('Something went wrong, please check your data again', {cssClass: 'alert-danger', timeout: 5000});
			}else{
				this.flashMessage.show('Your item has been added', {cssClass: 'alert-success', timeout: 5000});
			}
		})
	}
	getData(){
		this.cartService.getItem().subscribe(data => {
			this.result = data;
		}, err => {
			console.log(err)
		})
	}
	deleteItem (item) {
		var id = item.id;
		this.cartService.delItem(id).subscribe(data => {
			console.log(data)
		})
	}
	onChange() {
		this.flag = !this.flag;
		this.getData()
	}
}







