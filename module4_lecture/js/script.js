// var message = "in global";
// console.log("global: message = " + message);
// console.log(typeof(message));

// var a = function () {
// 	var message = 5;
// 	console.log("a:message = " + message);
// 	console.log(typeof(message));

// }

// function b () {
// 	console.log("b: message = " + message);
// }

// a();
// b();


function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();

function a() {
	return("works");
}

var b = a("AAA");
alert(b);