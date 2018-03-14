var MaryCoffee = (
	function () {
        //Contructor
		function MaryCoffee() {
            Store.call(this);
        }
        

        //Inheritance
        MaryCoffee.prototype = Object.create(Store.prototype);
        MaryCoffee.prototype.constructor = MaryCoffee;
        

        //Methods
        MaryCoffee.prototype.sale = function(){
            var coffee = new Coffee();
            this.revenue += coffee.price; 
            console.log ("Coffee:" + this.revenue);
            return coffee
        }
        MaryCoffee.prototype.getRevenue = function(){
            return this.revenue
        }

		return MaryCoffee;
	}
)();