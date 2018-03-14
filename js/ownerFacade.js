var OwnerFacade = (
    function(){
        function OwnerFacade(){
            this.nyPizza;
            this.maryCoffee;
            this.joeChicken;
            this.lazyShoes;

        }
        //Class Methods
		OwnerFacade.prototype.revenuePizza = function () {
			return this.nyPizza.getRevenue();
        }
        OwnerFacade.prototype.revenueChicken = function () {
			return this.joeChicken.getRevenue();
        }
        OwnerFacade.prototype.revenueCoffee = function () {
			return this.maryCoffee.getRevenue();
        }
        OwnerFacade.prototype.revenueShoes = function () {
			return this.lazyShoes.getRevenue();
        }
        return OwnerFacade;
    }
)();