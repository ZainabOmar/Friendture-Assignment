'use strict';

module.exports = function(Handwatch) {
	Handwatch.validate('quantity', customValidator, {message: "Quantity should be less"})

	function customValidator(err) {
		if (this.quantity > 5) {
			err()
		}else {
			console.log("working")
		}
	}
};
