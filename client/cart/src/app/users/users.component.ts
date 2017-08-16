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
			username: this.username,
			password: this.password,
			email: this.email
		}
		this.userService.signin(user).subscribe(data => {
			if(data.token){
				this.flashMessage.show('Welcome ', {cssClass: 'alert-success', timeout: 5000});
				this.userService.storeUserData(data.token,data.userid,data.username);
				this.router.navigate(['/cart']);
			}else {
				this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
			}
		});
	}

}
