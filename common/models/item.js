'use strict';

module.exports = function(Item) {
	Item.validate('title', customValidator, {message: 'The quantity is too much'});
	function customValidator(err) {
		if (this.title === 'Bag' && this.quantity > 5){
			err();
		}else if (this.title === 'Hand watch' && this.quantity > 6) {
			err();
		}else if (this.title === 'Phone case' && this.quantity > 8) {
			err();
		}else if (this.title === 'Teapot' && this.quantity > 7) {
			err();
		}else if (this.title === 'Bike' && this.quantity > 9) {
			err();
		}else if (this.title === 'Task chair' && this.quantity > 4) {
			err();
		}else if (this.title === 'Cap' && this.quantity > 10) {
			err();
		}else if (this.title === 'Mug' && this.quantity > 11) {
			err();
		}else if (this.title === 'Notebook' && this.quantity > 5) {
			err();
		}else if (this.title === 'Camera' && this.quantity > 7) {
			err();
		}else if (this.title === 'Dress' && this.quantity > 20) {
			err();
		}else if (this.title === 'Headphones' && this.quantity > 13) {
			err();
		}
	}
}
