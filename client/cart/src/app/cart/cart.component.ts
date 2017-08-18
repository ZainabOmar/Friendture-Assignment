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
	flag: any;

	public Items: Array<Object> = [
	{title: "Bags", img: "../../assets/img/1.png", flag: false},
	{title: "Hand Watch", img: "../../assets/img/2.png", flag: false},
	{title: "Dresses", img: "../../assets/img/3.png", flag: false}, 
	{title: "Macbooks", img: "../../assets/img/4.png", flag: false}, 
	{title: "Headphones", img: "../../assets/img/5.png", flag: false}, 
	{title: "Mugs", img: "../../assets/img/6.png", flag: false},
	{title: "Car Charger", img: "../../assets/img/7.png", flag: false},
	{title: "Books", img: "../../assets/img/8.png", flag: false},
	{title: "Wall clocks", img: "../../assets/img/9.png", flag: false},
	{title: "Caps", img: "../../assets/img/10.png", flag: false},
	{title: "Boots", img: "../../assets/img/11.png", flag: false},
	{title: "Cameras", img: "../../assets/img/12.png", flag: false},
	{title: "T-shirts", img: "../../assets/img/13.png", flag: false},
	{title: "Teapots", img: "../../assets/img/14.png", flag: false},
	{title: "Phone cases", img: "../../assets/img/15.png", flag: false},
	{title: "Gift cards", img: "../../assets/img/16.png", flag: false},
	{title: "Sunglasses", img: "../../assets/img/17.png", flag: false},
	{title: "Notebooks", img: "../../assets/img/18.png", flag: false},
	{title: "Bikes", img: "../../assets/img/19.png", flag: false},
	{title: "Blenders", img: "../../assets/img/20.png", flag: false},
	{title: "Task chairs", img: "../../assets/img/21.png", flag: false}
	];

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

	clicked(index) {// only show clicked img info 
		console.log(this.Items[index]);
		this.Items[index]['flag'] = !this.Items[index]['flag'];
		console.log(this.Items[index]['flag'])
	};

}








