import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { UsersService } from '../services/users/users.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	result : any;

	constructor(
		private router: Router,
		private cartService: CartService,
		private usersService: UsersService
		) { }

	ngOnInit() { 
		this.cartService.getItem().subscribe(data => {
			console.log(data)
			this.result = data;
		}, err => {
			console.log(err)
		})
	}

	logout() {
		this.usersService.logout()
		this.router.navigate(['/']);
	}

}
