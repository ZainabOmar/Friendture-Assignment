import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart/cart.service';
import { UsersService } from './services/users/users.service';
import { UsersComponent } from './users/users.component';

@NgModule({
	declarations: [
	AppComponent,
	CartComponent,
	UsersComponent
	],
	imports: [
	BrowserModule,
	HttpModule,
	RouterModule.forRoot([
		{path: '', component: UsersComponent},
		{path: 'cart', component: CartComponent}
		]),
	FlashMessagesModule
	],
	providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}, CartService, UsersService],
	bootstrap: [AppComponent]
})
export class AppModule { }
