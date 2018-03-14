var Chicken = (
	function () {
        //Contructor
		function Chicken() {
            Product.call(this);
            this.price = 2000;
        }
        

        //Inheritance
        Chicken.prototype = Object.create(Chicken.prototype);
        Chicken.prototype.constructor = Chicken;
        

        //Methods

		return Chicken;
	}
)();