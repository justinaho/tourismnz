
window.addEventListener('load', (event) => {
  clearForm();
});

function clearForm() {
  document.getElementById('city').value = "";
  document.getElementById('dateTime').value = "";
  document.getElementById('content-results-js').style.display = "none";
}


function toggleResults() {
  var results = document.getElementById("content-results-js");
  if (results.style.display === "none") {
    results.style.display = "block";
  }
}


function bookHostel() {
  var hostel = document.getElementById('popUpHostel-js');

  if (hostel.style.display === "none") {
    hostel.style.display = "block";
  } else {
    hostel.style.display = "none";
  }
}


function cross() {
  var popUp = document.getElementById('popUpHostel-js');
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
  } else {
    popUp.style.display = "block";
  }
};

function reviewBooking() {
  var review = document.getElementById("popUpHostel-js");
  if (review.style.display === "block") {
    review.style.display = "none";
  }
}

$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
      // return("Checkbox " + inputValue + " is selected");
  });
});