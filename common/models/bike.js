'use strict';

module.exports = function(Bike) {
	Bike.validate('quantity', customValidator, {message: "Quantity should be less"})

	function customValidator(err) {
		if (this.quantity > 15) {
			err()
		}else {
			console.log("working")
		}
	}
};
