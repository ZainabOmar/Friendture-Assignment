import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

	constructor(private http:Http) { }

	authToken: any;
	user: any;

	storeUserData(token,id,name){
		localStorage.setItem('id_token', token);
		localStorage.setItem('user-id', id);
		localStorage.setItem('user-name', name);
		this.authToken = token;
	}

	headers = new Headers({
		'Content-Type': 'application/json'
	});

	signin(user) {
		let url = 'http://localhost:3000/api/clients';
		return this.http.post(url, user, {headers: this.headers})
		.map(res => res.json())
		.catch(err=> {
			return Observable.throw(err);
		})
	}

	logout(){
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

	getAllUsers () {
		let url = 'http://localhost:3000/api/clients';
		return this.http.get(url, {headers: this.headers})
		.map(res => res.json())
		.catch(err=> {
			console.log(err)
			return Observable.throw(err);
		})
	}

}
