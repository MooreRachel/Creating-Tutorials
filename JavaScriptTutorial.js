//JavaScript Tutorial(in progress)
    //examples from http://eloquentjavascript.net/

//Goal of this tutorial is to focus where JavaScript differs from other 
//  languages. http://eloquentjavascript.net/ is a great resource for JavaScript
//  as a whole. Also has a neat sandbox feature to run code examples within the
//  the text.


/*Functions
    -JavaScript syntax
    -requires keyword function.
    -function body must be wrapped in {}
*/
//Scope
//  local & global variables
    
var x = "outside"; //global
var f1 = function() {
    var x = "inside f1";//local
};

fl();
console.log(x);
//-> outside
//calls the global variable

var f2 = function() {
    x = "inside f2";
};

f2();
console.log(x);
//-> inside f2
// the x gloabal variable is changed.
//  x in the f2 function is not declared locally 
//  by the keyword var

//JavaScript Nested Scope

var landscape = function(){
    var result = "";
    var flat = function(size){
        for(var count = 0; count < size; count++)
            result +="_";
    };

//when a function is declared as a variable
//  the code works from the top down.    

var mountain = function(size){
    result +="/";
    for(var count= 0; count < size; count++)
        result +="'";
    result +="\\";
};

flat(3);
moutain(4);
flat(6);
mountain(1);
flat(1);
return result;
};

console.log(landscape());
// In JavaScript scope is 
//  created by functions.
//In the above example variables
//  within each function are only visible
//  within that function.

var something = 1; {
    var something = 2
}
// The variable within the block is 
//   the same variable outside the block
var something = 1;{
let something = 2;

//When a function is declared first (without being named as a variable like the 
//    previous examples) they are conceptually moved to the top of the scope 
//    so they can be called before they are declared within that scope.
// 
}
function square(x){
    //Do something
}
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}

alert("Hello", "Good Evening", "How do you do");
//alert function only has one argument. JavaScript ingnores the other 2
//  arguments and only displays the first one. 

// If too few arguments are passed then JavaScript returns undefined. 
function power(base, exponent){
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for(var count = 0; count < exponent; count++)
        result *=base;
    return result;
}

console.log(power(4));
// --> 16
console.log(power(4,3));
//--> 64

function wrapValue(n){
    var localVariable = n;
    return function() {return localVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
//--> 1
console.log(wrap2());
// --> 2

