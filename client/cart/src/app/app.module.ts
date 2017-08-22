import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart/cart.service';

@NgModule({
	declarations: [
	AppComponent,
	CartComponent
	],
	imports: [
	FormsModule,
	BrowserModule,
	HttpModule,
	RouterModule.forRoot([
		{path: 'cart', component: CartComponent}
		]),
	FlashMessagesModule
	],
	providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}, CartService],
	bootstrap: [AppComponent]
})
export class AppModule { }
