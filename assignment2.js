function displayDetails(ownerName){
    console.log(`${ownerName}, This is your car: ${this.registrationNumber} - ${this.brand}`);
}

var car = { 
    registrationNumber: "KL12345",
    brand: "Toyota",
}


//The bind function creates a copy of a function with a new value to the this present inside the calling function

var myCarDetails =  displayDetails.bind(car,'Chitra');
myCarDetails();


//call is a function that you use to change the value of this inside a function and execute it with the arguments provided
displayDetails.call(car, "Vivian");


//Apply function is very similar to the Call function. The only difference, In apply, arguments you can pass an argument 
//as an array literal or a new array object

displayDetails.call(car, new Array("Vivian","Chitra","Amrita"));
