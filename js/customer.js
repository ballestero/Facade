var Customer = (
    function(){
        function Customer(pfacade){
            this.facade = pfacade;
        }
        //Class Methods
		Customer.prototype.buyPizza = function () {  
            var pizza = this.facade.buyPizza();
            return pizza;
        }

        Customer.prototype.buyShoes = function () {  
            var shoes = this.facade.buyShoes();
            return shoes;
        }
        Customer.prototype.buyCoffee = function () {  
            var coffee = this.facade.buyCoffee();
            return coffee;
        }
        Customer.prototype.buyChicken = function () {  
            var chicken= this.facade.buyChicken();
            return chicken;
        }
        
        return Customer;
    }
)();