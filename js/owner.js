var Owner = (
    function(){
        function Owner(pfacade){
            this.facade = pfacade;
        }
        //Class Methods
		Owner.prototype.getRevenue = function () {  
            var revenuePizza = this.facade.revenuePizza();
            var revenueChicken = this.facade.revenueChicken();
            var revenueShoes = this.facade.revenueShoes();
            var revenueCoffee = this.facade.revenueCoffee();

           var revenue = revenueChicken + revenueCoffee + revenuePizza + revenueShoes;
            console.log("Revenue: "+ revenue );
			return  revenue;
        }
        return Owner;
    }
)();