//alert(document.getElementById('inputbar')[0].innerHTML);
//document.getElementById('inputbar').innerHTML="new content";
alert('Hello');

var inputbar = document.getElementById('inputbar'),
resultbar = document.getElementById('resultbar'),
lb = document.getElementById('lb'),
rb = document.getElementById('rb'),
ce = document.getElementById('cbar'),
zero = document.getElementById('zero'),
one = document.getElementById('one'),
two = document.getElementById('two'),
three = document.getElementById('three'),
four = document.getElementById('four'),
five = document.getElementById('five'),
six = document.getElementById('six'),
seven = document.getElementById('seven'),
eight = document.getElementById('eight'),
nine = document.getElementById('nine'),
plus = document.getElementById('plus'),
multiply = document.getElementById('multiply'),
divide = document.getElementById('divide'),
minus = document.getElementById('minus'),
dot = document.getElementById('dot');
equals = document.getElementById('equals');

console.log(document.getElementById('resultbar').clientHeight);

var array_name = [];
var array_result = [];
var result = 0;
zero.onclick = function() {
    // alert('Hi');
    // inputbar.innerHTML=document.getElementById('inputbar').textContent;
    console.log("here");
    var x = zero.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    // myFunction(zero);
    inputbar.innerHTML = array_name.join("");
};
one.onclick = function() {
    console.log("here");
    var x = one.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
two.onclick = function() {
    console.log("here");
    var x = two.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
three.onclick = function() {
    console.log("here");
    var x = three.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
four.onclick = function() {
    console.log("here");
    var x = four.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
five.onclick = function() {
    console.log("here");
    var x = five.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
six.onclick = function() {
    console.log("here");
    var x = six.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    //console.log(array_name[0]);
    inputbar.innerHTML = array_name.join("");
};
seven.onclick = function() {
    console.log("here");
    var x = seven.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
eight.onclick = function() {
    console.log("here");
    var x = eight.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
nine.onclick = function() {
    console.log("here");
    var x = nine.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
lb.onclick = function() {
    console.log("here");
    var x = lb.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
rb.onclick = function() {
    console.log("here");
    var x = rb.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
cbar.onclick = function() {
    console.log("here");
    var x = cbar.textContent;
    inputbar.innerHTML = "CLEAR";
    //array_name = [];
    array_name.pop();
    inputbar.innerHTML = array_name.join("");
    console.log(array_name);
    resultbar.innerHTML = "ANS = " + result;
};
plus.onclick = function() {
    console.log("here");
    var x = plus.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
multiply.onclick = function() {
    console.log("here");
    var x = multiply.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
divide.onclick = function() {
    console.log("here");
    var x = divide.textContent;
    // // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
minus.onclick = function() {
    console.log("here");
    var x = minus.textContent;
    //// inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
dot.onclick = function() {
    console.log("here");
    var x = dot.textContent;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};

// function myFunction(button) {
//   var x = button.textContent;
//   // inputbar.innerHTML = x;
//   array_name.push(x);
//   //return array_name;
// }

equals.onclick = function() {
    console.log(array_name.toString());
    var a = array_name.toString;
    a = array_name.join("");
    console.log(array_name.join(""));
    resultbar.innerHTML = array_name.join("")+" =";
    result = eval(a);
    console.log(result);
    //array_name.push(result);
    //resultbar.innerHTML = result;
    //array_result.push(array_name.join(""));
    array_name = [];
    array_name.push(result);
    inputbar.innerHTML = result;
    //resultbar.innerHTML = array_name.join("") + "=";
}
