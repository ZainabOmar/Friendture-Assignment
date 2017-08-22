import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

	constructor(private http:Http) { }

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
			console.log(err)
			return Observable.throw(err);
		})
	}

}
