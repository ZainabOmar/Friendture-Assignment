'use strict';

module.exports = function(Bag) {

	Bag.validate('quantity', customValidator, {message: "Quantity should be less"})

	function customValidator(err) {
		if (this.quantity > 10) {
			err()
		}else {
			console.log("working")
		}
	}
};
