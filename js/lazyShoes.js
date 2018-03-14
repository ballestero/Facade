var LazyShoes = (
	function () {
        //Contructor
		function LazyShoes() {
            Store.call(this);
        }
        

        //Inheritance
        LazyShoes.prototype = Object.create(Store.prototype);
        LazyShoes.prototype.constructor = LazyShoes;
        

        //Methods
        LazyShoes.prototype.sale = function(){
            var shoes = new Shoes();
            this.revenue += shoes.price; 
            console.log ("Shoes:" + this.revenue);
            return shoes
        }
        LazyShoes.prototype.getRevenue = function(){
            return this.revenue
        }

		return LazyShoes;
	}
)();