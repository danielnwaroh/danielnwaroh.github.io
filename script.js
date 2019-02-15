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

var array_name = [];
var array_result = [];
var result = 0;
var pushEq = false;

function clickDigit(button, pushed) {
  var x = button.textContent;
  if (pushed == true) {
    array_name = [];
    resultbar.innerHTML = "ANS = " + inputbar.innerHTML;
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
    pushEq = false;
  }
  else {
    array_name.push(x);
    inputbar.innerHTML = array_name.join("");
  }
}

function clickOp(button, pushed) {
  if (pushEq == true) {
    resultbar.innerHTML = "ANS = " + inputbar.innerHTML;
  }
  pushEq = false;
  var x = button.textContent;
  array_name.push(x);
  inputbar.innerHTML = array_name.join("");
}

zero.onclick = function() {
    clickDigit(zero, pushEq);
};
one.onclick = function() {
    clickDigit(one, pushEq);
};
two.onclick = function() {
    clickDigit(two, pushEq);
};
three.onclick = function() {
    clickDigit(three, pushEq);
};
four.onclick = function() {
    clickDigit(four, pushEq);
};
five.onclick = function() {
    clickDigit(five, pushEq);
};
six.onclick = function() {
    clickDigit(six, pushEq);
};
seven.onclick = function() {
    clickDigit(seven, pushEq);
};
eight.onclick = function() {
    clickDigit(eight, pushEq);
};
nine.onclick = function() {
    clickDigit(nine, pushEq);
};
lb.onclick = function() {
    clickDigit(lb, pushEq);
};
rb.onclick = function() {
    clickDigit(rb, pushEq);
};
cbar.onclick = function() {
    var x = cbar.textContent;
    inputbar.innerHTML = "CLEAR";
    array_name.pop();
    inputbar.innerHTML = array_name.join("");
    resultbar.innerHTML = "ANS = " + result;
};
plus.onclick = function() {
    clickOp(plus, pushEq);
};
multiply.onclick = function() {
    clickOp(multiply, pushEq);
};
divide.onclick = function() {
    clickOp(divide, pushEq);
};
minus.onclick = function() {
    clickOp(minus, pushEq);
};
dot.onclick = function() {
    clickDigit(dot,pushEq);
};

equals.onclick = function() {
    var a = array_name.toString;
    a = array_name.join("");
    resultbar.innerHTML = array_name.join("")+" = ";
    try {
      result = eval(a);
      array_name = [];
      array_name.push(result);
      pushEq = true;
      inputbar.innerHTML = result;
    }
    catch(err) {
      inputbar.innerHTML = "ERROR";
    }
}
