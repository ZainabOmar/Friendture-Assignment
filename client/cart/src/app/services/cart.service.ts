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
		console.log(this.headers)
		return this.http.get(url,{headers: this.headers})
		.map(res => res.json())
	}

}
