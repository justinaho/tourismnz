
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

// $(document).ready(function() {
//   $('input[type="checkbox"]').click(function() {
//       var inputValue = $(this).attr("value");
//       $("." + inputValue).toggle();
//       // return("Checkbox " + inputValue + " is selected");
//   });


// });

// $("[id^='radio']").on("click", function() {
//   var divElements = $("[class^=radio]")
//   var radioBtn = this.id;
//   divElements.each(function(index, element) {
//     if (element.classList.contains(radioBtn)) {
//       $(element).show();
//     } else {
//       $(element).hide();
//     }
//   })
// });

// $("[id^='check']").on("change", function() {
//   var divElements = $("[class^=check]")
//   var checkBtn = this.id;
//   var isChecked = this.checked;
//   divElements.each(function(index, element) {
//     if (isChecked && element.classList.contains(checkBtn)) {
//       $(element).show();
//     } else if (!isChecked && element.classList.contains(checkBtn)) {
//       $(element).hide();
//     }
//   })
// });

var isChecked = this.checked;

function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

// function buffetBreakfast(){
//   document.getElementById('buffetBreakfast').style.display = 'block';
// }

// function lunchOptions(){
//   document.getElementById('lunchOptions').style.display = 'block';
// }
// function dinnerOptions(){
//   document.getElementById('dinnerOptions').style.display = 'block';
// }

function dietaryOptions(){
  document.getElementById('dietaryOptions').style.display ='none';
}
function noDietaryOptions(){
  document.getElementById('dietaryOptions').style.display = 'block';
}
$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
  });
});