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
	images: string[] = ["../../assets/img/1", "../../assets/img/2", "../../assets/img/3"]

	public Items: Array<Object> = [
	{title: "Bag", img: "../../assets/img/1.png"},
	{title: "Hand Watch", img: "../../assets/img/2.png"},
	{title: "Dress", img: "../../assets/img/3.png"}, 
	{title: "Laptop", img: "../../assets/img/4.png"}, 
	{title: "Headphones", img: "../../assets/img/5.png"}, 
	{title: "Mug", img: "../../assets/img/6.png"},
	{title: "Car Charger", img: "../../assets/img/7.png"},
	{title: "Book", img: "../../assets/img/8.png"},
	{title: "Wall clock", img: "../../assets/img/9.png"},
	{title: "Cap", img: "../../assets/img/10.png"},
	{title: "Boots", img: "../../assets/img/11.png"},
	{title: "Camera", img: "../../assets/img/12.png"},
	{title: "T-shirt", img: "../../assets/img/13.png"},
	{title: "Teapot", img: "../../assets/img/14.png"},
	{title: "Phone case", img: "../../assets/img/15.png"},
	{title: "Gift card", img: "../../assets/img/16.png"},
	{title: "Sunglasses", img: "../../assets/img/17.png"},
	{title: "Notebook", img: "../../assets/img/18.png"},
	{title: "Bike", img: "../../assets/img/19.png"},
	{title: "Blender", img: "../../assets/img/20.png"},
	{title: "Task chair", img: "../../assets/img/21.png"}
	];




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
