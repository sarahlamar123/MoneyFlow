function addRow() {
   "use strict";

    var i;
    var sumVal = 0;
    var table = document.getElementById("table");
    var row= document.createElement("tr");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td2.innerHTML = document.getElementById("name").value;
    td3.innerHTML  = parseInt(document.getElementById("amount").value);

    row.appendChild(td2);
    row.appendChild(td3);

    table.children[0].appendChild(row);

    for (i = 0, i < table.rows.length; i ++;) {
      sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML)
    }
    // var sV = addTotal(sumVal);

    document.getElementById("val").innerHTML = "Sum Value = " + td3.innerHTML;
}
//
// function add(td2.innerHTML) {
//     var newVal = td2.innerHTML + parseInt(table.rows[i].cells[1].innerHTML);
//     return newVal;
//     }
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  document.getElementById("picture").style.display = "none";
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
