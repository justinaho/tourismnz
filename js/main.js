// window.onload = function () {
//   toggleResults()
// }

function toggleResults(){
  var places = document.getElementById("container-img-results-js");
  if (places.style.display === "none") {
    places.style.display = "block";
  } else {
    places.style.display = "none";
  }
}
