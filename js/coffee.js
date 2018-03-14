var Coffee = (
	function () {
        //Contructor
		function Coffee() {
            Product.call(this);
            this.price = 500;
        }
        

        //Inheritance
        Coffee.prototype = Object.create(Coffee.prototype);
        Coffee.prototype.constructor = Coffee;
        

        //Methods

		return Coffee;
	}
)();