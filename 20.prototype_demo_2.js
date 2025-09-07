
function Car(purchasedate , carowner , location){
     //console.log("Car");
     this.PurchaseDate = purchasedate
     this.CarOwner     = bikeowner
     this.Location     = location
     //console.log("Car" ,this);  
};
//new bike();

bike.



bike.prototype.getbikeInfo = function(){
    //console.log("bike brand is Toyoto and model is camry");
    console.log("from protype is " ,this);
    console.log(this.bikeOwner);
    console.log(this.PurchaseDate);//PurchaseDate,CarOwner,Location
}

Car.prototype.getbikeLocation = function(){
    console.log(this.Location);
    console.log(this) ;//PurchaseDate,bikeOwner,Location
}

//new bike();
// var samCar = new bike("April 10 , 2017" , "Sam" , "Andhrapradesh");
// samCar.getbikeInfo();
// samCar.getbikeLocation();

var johnCar = new bike("Dec 10 , 2020" , "John" , "UK");
johnbike.getCarInfo();
johnbike.getbikeLocation();


//vimp line