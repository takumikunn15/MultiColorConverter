var elem = document.getElementsByClassName("range-red");
var rangeValue = function (elem, target) {
	return function (evt) {
		// target.innerHTML = elem.value;
    let test = elem.value;
    colorChange("red", test);
	};
};
for (var i = 0, max = elem.length; i < max; i++) {
	bar = elem[i].getElementsByTagName("input")[0];
	target = elem[i].getElementsByTagName("p")[0];
	bar.addEventListener("input", rangeValue(bar, target));
}

var elem = document.getElementsByClassName("range-green");
var rangeValue = function (elem, target) {
	return function (evt) {
		// target.innerHTML = elem.value;
    let test = elem.value;
    colorChange("green", test);
	};
};
for (var i = 0, max = elem.length; i < max; i++) {
	bar = elem[i].getElementsByTagName("input")[0];
	target = elem[i].getElementsByTagName("p")[0];
	bar.addEventListener("input", rangeValue(bar, target));
}

var elem = document.getElementsByClassName("range-blue");
var rangeValue = function (elem, target) {
	return function (evt) {
		// target.innerHTML = elem.value;
    let test = elem.value;
    colorChange("blue", test);
	};
};
for (var i = 0, max = elem.length; i < max; i++) {
	bar = elem[i].getElementsByTagName("input")[0];
	target = elem[i].getElementsByTagName("p")[0];
	bar.addEventListener("input", rangeValue(bar, target));
}
let redy = 100;
let greeny = 100;
let bluey = 100;
let colorChange = (color, value) => {
  if (color === "red") {
    let element = document.getElementById("red");
    element.innerHTML = value;
    redy = value;
  }
  if (color === "green") {
    let element = document.getElementById("green");
    element.innerHTML = value;
    greeny = value;
  }
  if (color === "blue") {
    let element = document.getElementById("blue");
    element.innerHTML = value;
    bluey = value;
  }
  let colorProp = "rgba(" + redy + "," + greeny + "," + bluey + ",1)";
  document.getElementsByClassName("rgb-color-view")[0].style.backgroundColor = colorProp;
}
