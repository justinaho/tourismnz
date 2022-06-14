// window.onload = function () {
//   toggleResults()
// }

function toggleResults(){
  var places = document.getElementById("content-results-js");
  if (places.style.display === "none") {
    places.style.display = "block";
  } else {
    places.style.display = "none";
  }
}


function bookHostel(){
  var hostel = document.getElementById('popUpHostel-js');

  if (hostel.style.display === "none") {
    hostel.style.display = "block";
  } else {
    hostel.style.display = "none";
  }
}


function cross(){
  var popUp = document.getElementById('popUpHostel-js');
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
  } else {
    popUp.style.display = "block";
  }
}