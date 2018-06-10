var BicycleFactory = {
    createBicycle : function(model){
        var bicycle;
        switch(model){
            case 'Speedster':
                bicycle = new Speedster();
                break;
            case 'Lowrider':
                bicycle = new Lowrider();
                break;
            default:
                bicycle = new Cruiser();
        }
        return bicycle;
    }
};
var BicycleShop = function(){};
BicycleShop.prototype.sellBicycle = function(model){
    var bicycle = BicycleFactory.createBicycle(model);
    return bicycle;
};