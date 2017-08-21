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
			console.log(err)
			return Observable.throw(err);
		})
	}

	postOneItem(item){
		let url = 'http://localhost:3000/api/items';
		return this.http.post(url, {headers: this.headers})
		.map(res => res.json())
		.catch(err=> {
			console.log(err)
			return Observable.throw(err);
		})
	}

}
