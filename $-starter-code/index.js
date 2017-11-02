$(function (event) {


console.log("DOM is ready");


// var cars = ["BMW", "Mercedes", "Audi"]
// $(cars).each(function(index, car) {
//   console.log(index, car);
// });
//
//
// var count = document.getElementById('count');
//
// count.innerHTML = "5";
//
//
// $("#count").html('5');
//
//
// va
// count.style.color = green

// $('#count').css('color', 'green').css('background-color', 'red')

$("#count").html('5').css('color', 'green').css('background-color', 'red')
// var items = document.getElementByTagName('li');
// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   item.classname = item.className + " done";
// }

$('li').addClass('done');




});
