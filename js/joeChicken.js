var JoeChicken = (
	function () {
        //Contructor
		function JoeChicken() {
            Store.call(this);
        }
        

        //Inheritance
        JoeChicken.prototype = Object.create(Store.prototype);
        JoeChicken.prototype.constructor = JoeChicken;
        

        //Methods
        JoeChicken.prototype.sale = function(){
            var chicken = new Chicken();
            this.revenue += chicken.price; 
            console.log ("Chicken:" + this.revenue);
            return chicken
        }
        JoeChicken.prototype.getRevenue = function(){
            return this.revenue
        }

		return JoeChicken;
	}
)();