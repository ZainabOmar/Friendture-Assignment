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

	constructor(
		private router: Router,
		private cartService: CartService,
		private usersService: UsersService
		) { }

	result : any;
	title: any;
	price: any;
	quantity: any;
	flag = true;

	public Items: Array<Object> = [
	{title: "Bag", img: "../../assets/img/1.png", flag: false},
	{title: "Hand Watch", img: "../../assets/img/2.png", flag: false},
	{title: "Dress", img: "../../assets/img/3.png", flag: false},
	{title: "Headphones", img: "../../assets/img/5.png", flag: false}, 
	{title: "Mug", img: "../../assets/img/6.png", flag: false},
	{title: "Cap", img: "../../assets/img/10.png", flag: false},
	{title: "Camera", img: "../../assets/img/12.png", flag: false},
	{title: "Teapot", img: "../../assets/img/14.png", flag: false},
	{title: "Phone case", img: "../../assets/img/15.png", flag: false},
	{title: "Notebook", img: "../../assets/img/18.png", flag: false},
	{title: "Bike", img: "../../assets/img/19.png", flag: false},
	{title: "Task chair", img: "../../assets/img/21.png", flag: false}
	];

	ngOnInit() { 
		this.cartService.getItem().subscribe(data => {
			console.log(data)
			this.result = data;
		}, err => {
			console.log(err)
		})
	}

	clicked(index) {
		console.log(this.Items[index]["flag"])
		this.Items[index]["flag"] = !this.Items[index]["flag"]
	}

}








