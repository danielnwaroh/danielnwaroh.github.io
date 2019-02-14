//alert(document.getElementById('inputbar')[0].innerHTML);
//document.getElementById('inputbar').innerHTML="new content";
alert('SENG 513 A2 by Daniel Nwaroh');

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
var pushEq = false;

zero.onclick = function() {
    console.log("here");
    var x = zero.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      //console.log("39");
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
      pushEq = false;
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
one.onclick = function() {
    console.log("here");
    var x = one.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
two.onclick = function() {
    console.log("here");
    var x = two.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
three.onclick = function() {
    console.log("here");
    var x = three.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
four.onclick = function() {
    console.log("here");
    var x = four.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
five.onclick = function() {
    console.log("here");
    var x = five.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
six.onclick = function() {
    console.log("here");
    var x = six.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
seven.onclick = function() {
    console.log("here");
    var x = seven.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
eight.onclick = function() {
    console.log("here");
    var x = eight.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};
nine.onclick = function() {
    console.log("here");
    var x = nine.textContent;
    // inputbar.innerHTML = x;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
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
    pushEq = false;
    console.log("here");
    var x = plus.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
multiply.onclick = function() {
    pushEq = false;
    console.log("here");
    var x = multiply.textContent;
    // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
divide.onclick = function() {
    pushEq = false;
    console.log("here");
    var x = divide.textContent;
    // // inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
minus.onclick = function() {
    pushEq = false;
    console.log("here");
    var x = minus.textContent;
    //// inputbar.innerHTML = x;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
};
dot.onclick = function() {
    console.log("here");
    var x = dot.textContent;
    if (pushEq == true) {
      array_name = [];
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
      pushEq = false;
    }
    else {
      array_name.push(x);
      inputbar.innerHTML = array_name.join("");
    }
};

equals.onclick = function() {
    console.log(array_name.toString());
    console.log(array_name.join(""));
    var a = array_name.toString;
    a = array_name.join("");
    resultbar.innerHTML = array_name.join("")+" =";
    try {
      result = eval(a);
    }
    catch(err) {
      console.log("ERROR");
    }
    console.log(result);
    //array_name.push(result);
    //resultbar.innerHTML = result;
    //array_result.push(array_name.join(""));
    array_name = [];
    array_name.push(result);
    //array_result.push(result);
    pushEq = true;
    inputbar.innerHTML = result;
    //resultbar.innerHTML = array_name.join("") + "=";
}
