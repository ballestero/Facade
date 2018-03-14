var CustomerFacade = (
    function(){
        function CustomerFacade(){
            this.nyPizza;
            this.joeChicken;
            this.maryCoffee;
            this.lazyShoes;

        }
        //Class Methods
		CustomerFacade.prototype.buyPizza = function () {  
			return this.nyPizza.sale();
        }

        CustomerFacade.prototype.buyShoes = function () {  
			return this.lazyShoes.sale();
        }
        CustomerFacade.prototype.buyCoffee = function () {  
			return this.maryCoffee.sale();
        }
        CustomerFacade.prototype.buyChicken = function () {  
			return this.joeChicken.sale();
        }
        
        return CustomerFacade;
    }
)();