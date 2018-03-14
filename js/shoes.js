var Shoes = (
	function () {
        //Contructor
		function Shoes() {
            Product.call(this);
            this.price = 3000;
        }
        

        //Inheritance
        Shoes.prototype = Object.create(Shoes.prototype);
        Shoes.prototype.constructor = Shoes;
        

        //Methods

		return Shoes;
	}
)();