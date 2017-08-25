import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {FlashMessagesService} from 'angular2-flash-messages';

import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

	constructor(private http:Http, private flashMessage:FlashMessagesService) { }

	headers = new Headers({
		'Content-Type': 'application/json'
	});

	getItem(){
		let url = 'http://localhost:3000/api/items';
		return this.http.get(url,{headers: this.headers})
		.map(res => res.json())
		.catch(err=> {
			return Observable.throw(err);
		})
	}

	postOneItem(item){
		if(item.saved == undefined) {
			item.saved = false;
		}else if (item.purchased == undefined){
			console.log("hello")
			item.purchased = false;
		}
		console.log(item)
		let url = 'http://localhost:3000/api/items';
		let body = JSON
		return this.http.post(url, item, {headers: this.headers})
		.map(res => res.json())
		.catch(err=> {
			this.flashMessage.show('Something went wrong, please check your data again', {cssClass: 'alert-danger', timeout: 5000});
			console.log(err)
			return Observable.throw(err);
		})
	}
	delItem (id) {
		let url = 'http://localhost:3000/api/items/'+id;
		return this.http.get(url, {headers: this.headers})
		.map(res => {
			console.log(res)
			res.json()
		})
		.catch(err=> {
			return Observable.throw(err);
		})
	}

}
