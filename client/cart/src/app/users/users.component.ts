import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import  {UsersService} from '../services/users/users.service';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	username: String;
	password: String;
	email: String;

	constructor(
		private flashMessage:FlashMessagesService,
		private userService:UsersService,
		private router: Router
		) { }

	ngOnInit() { }

	onSubmit(){
		const user = {
			email: this.email,
			password: this.password
		}
		this.userService.signin(user).subscribe(data => {
			if(data){
				this.flashMessage.show('Welcome ', {cssClass: 'alert-success', timeout: 5000});
				this.userService.storeUserData(data.token,data.userid,data.username);
				this.router.navigate(['/cart']);
			}
			if(!data.email || !data.username) {
				this.flashMessage.show('Missing data', {cssClass: 'alert-danger', timeout: 7000});
			}
			else {
				console.log(data)
				this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
			}
		});
	}

	getUsers() {
		this.userService.getAllUsers().subscribe(data=> {
			console.log(data)
		})
	}

}
