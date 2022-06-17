
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

function crossReview() {
  var popUp = document.getElementById('reviewBooking');
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
    document.getElementById('reviewBooking').style.display = 'block';
  }
}


function show1() {
  document.getElementById('div1').style.display = 'none';
}
function show2() {
  document.getElementById('div1').style.display = 'block';
}

function dietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'none';
}
function noDietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'block';
}


$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    var inputValue = $(this).attr("value");
    $("." + inputValue).toggle();
  });
});


$(document).ready(function () {
  $("#display").click(function () {
    var meals = [];
    $.each($("input[name='mealOptions']:checked"), function () {
      meals.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('result').innerHTML = "Complimentary meals: " + meals.join(", ");
      }
    });

  });

  $("#display").click(function () {
    var lunchOptions = [];
    $.each($("input[name='lunch']:checked"), function () {
      lunchOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('lunchResult').innerHTML = "Lunch: " + lunchOptions.join(", ");
      }
    });

  });

  $("#display").click(function () {
    var mainOptions = [];
    $.each($("input[name='main']:checked"), function () {
      mainOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('mainResult').innerHTML = "Main: " + mainOptions.join(", ");
      }
    });

  });

  $("#display").click(function () {
    var dessertOptions = [];
    $.each($("input[name='dessert']:checked"), function () {
      dessertOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dessertResult').innerHTML = "Dessert: " + dessertOptions.join(", ");
      }
    });
  });

  $("#display").click(function () {
    var dietaryRequirementsOptions = [];
    $.each($("input[name='dietaryRequirements']:checked"), function () {
      dietaryRequirementsOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dietaryRequirementsResult').innerHTML = "Dietary requirements: " + dietaryRequirementsOptions.join(", ");
      }
    });
  });

  $("#display").click(function () {
    var dietaryOptions = [];
    $.each($("input[name='dietary']:checked"), function () {
      dietaryOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dietaryResult').innerHTML = "Dietary requirements: " + dietaryOptions;
      }
    });

  });


});

function guestDetails() {
  var x = document.getElementById("bookingForm").elements[0].value;
  document.getElementById("guestDetails").innerHTML = x;
}
// window.onload = function () {

//   document.querySelector("#bookingForm").addEventListener('submit', function (event) {
//     event.preventDefault();
//     var obj = {};
//     event.target.querySelectorAll('input', 'select', 'textarea')
//       .forEach((v) => {
//         if (v.type !== 'sumbit' && v.name) {
//           obj[v.name] = v.value;
//         }
//         console.log(obj);
//         document.getElementById("guestDetails").innerHTML = obj;
//       });


//   obj
//         {
//             firstname: "",  
//             lastname: "",
//         }
   
//   });
// }

// function guestDetails() {
//   var elements = document.getElementById("bookingForm").elements;
//   var obj = {};
//   for(var i = 0 ; i < elements.length ; i++){
//       var item = elements.item(i);
//       obj[item.name] = item.value;
//   }
//   console.log(JSON.stringify(obj));
//   document.getElementById("guestDetails").innerHTML = JSON.stringify(obj);
// }


