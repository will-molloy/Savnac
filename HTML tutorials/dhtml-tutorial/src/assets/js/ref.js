 // Strings
"Hello";
h = "Hello";
"Batman";
b = "Batman!";
"Hello" + "Batman";

// Arrays
["Hello", "Batman"];
["Hello", "Batman"].join();
["Hello", "Batman"].join(" ");

// Numbers
2;
1+1;
2+3;
2*3;
2**3;

// Dynamic type casting
"one" + 1;
1 + "one";

2*"two" + "Hi";

1 - "one";
"one" - 1;

// Arrays in depth
Array(2);
arr = Array(2);
arr;
arr[0];
arr[0] + 1;
arr[0] + h;
arr[0] = "Hello";
arr[1] = "World";
arr[2] = "!";

arr + "one";

arr.join();
arr.join("");

// Equalities
2 == 2
2 == "two";
2 == "2";
2 === "2";

// NaN is equal to nothing, ever
2*"two" == 2*"two";

// What will this output?
Array(16).join( "one" - 1) + b;

// Objects
ob = {
	"key":"value",
	"this": "that",
	"other": arr
};
ob['key'];
ob['key'] = 2;
ob['key'];


// DOM Interaction
document.getElementsByTagName("div");
$("div");
document.getElementsByTagName("div")[2];
$("div")[2];

document.getElementById("response_area");
$("#response_area");

document.getElementsByClassName("required");
$(".required");

document.getElementById("response_area").className += " another-class";
$("#response_area").addClass("another-class")
$("#response_area").toggle("third-class")

document.getElementById("response_area").className.split(" ");
$("#response_area")[0].classList

// Any property you can adjust - google for reference as too many to cover right now
// See the tutorial2.js for more examples

// Loops
for(i = 0; i < 10; i ++ ){
	console.log(i);
}

// Conditionals
if(1 < 2){
	console.log('small');
}else{
	console.log('big');
}