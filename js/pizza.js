var Pizza = (
	function () {
        //Contructor
		function Pizza(pprice) {
            Product.call(this);
            this.price = 1000;
        }
        

        //Inheritance
        Pizza.prototype = Object.create(Product.prototype);
        Pizza.prototype.constructor = Pizza;
        

        //Methods

		return Pizza;
	}
)();