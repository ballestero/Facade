window.addEventListener('load', init, false);

function init() {

    var customerFacade = new CustomerFacade();
    var ownerFacade = new OwnerFacade();
    var customer = new Customer(customerFacade);
    var owner = new Owner(ownerFacade);

    var store = new Store();
    var lazyShoes = new LazyShoes();
    var joeChicken = new JoeChicken();
    var maryCoffee = new MaryCoffee();
    var nyPizza = new NyPizza();

    customerFacade.lazyShoes = lazyShoes;
    ownerFacade.lazyShoes = lazyShoes;

    customerFacade.joeChicken = joeChicken;
    ownerFacade.joeChicken = joeChicken;

    customerFacade.maryCoffee = maryCoffee;
    ownerFacade.maryCoffee = maryCoffee;

    customerFacade.nyPizza = nyPizza;
    ownerFacade.nyPizza = nyPizza;


    //______________BuyProducts______________

    customer.buyPizza();
    customer.buyChicken();
    customer.buyShoes();
    customer.buyCoffee();

    customer.buyPizza();
    customer.buyChicken();
    customer.buyShoes();
    customer.buyCoffee();

    //_____________GetRevenue______________
    owner.getRevenue();







}