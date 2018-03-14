var NyPizza = (
	function () {
        //Contructor
		function NyPizza() {
            Store.call(this);
        }
        

        //Inheritance
        NyPizza.prototype = Object.create(Store.prototype);
        NyPizza.prototype.constructor = NyPizza;
        

        //Methods
        NyPizza.prototype.sale = function(){
            var pizza = new Pizza();
            this.revenue += pizza.price; 
            console.log ("Pizza:" + this.revenue);
            return pizza
        }
        NyPizza.prototype.getRevenue = function(){
            return  this.revenue;
        }

		return NyPizza;
	}
)();