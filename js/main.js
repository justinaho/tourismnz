window.addEventListener('load', (event) => {
  clearForm();
});


function clearForm() {
  document.getElementById('city').value = '';
  document.getElementById('dateTime').value = '';
  document.getElementById('content-results-js').style.display = 'none';
}

const userDetailsHostel = document.getElementById('popUpHostel-js');
const reviewBookingHostel = document.getElementById('reviewBooking');
const bookBookingHostel = document.getElementById('bookBooking');

function toggleResults() {
  const results = document.getElementById('content-results-js');
  if (results.style.display === 'none') {
    results.style.display = 'block';
  }
}


function bookHostel() {
  if (userDetailsHostel.style.display === 'none') {
    userDetailsHostel.style.display = 'block';
  }
}


function cross() {
  if (userDetailsHostel.style.display === 'block') {
    userDetailsHostel.style.display = 'none';
  } else {
    userDetailsHostel.style.display = 'block';
  }
};


function crossReview() {
  if (reviewBookingHostel.style.display === 'block') {
    reviewBookingHostel.style.display = 'none';
  } else {
    reviewBookingHostel.style.display = 'block';
  }
};


function reviewBooking() {
  if (userDetailsHostel.style.display === 'block') {
    userDetailsHostel.style.display = 'none';
    document.getElementById('reviewBooking').style.display = 'block';
  }
}

// function backToHostel() {
//   if (userDetailsHostel.style.display === 'none') {
//    userDetailsHostel.style.display = 'block';
//     document.getElementById('reviewBooking').style.display = 'none';
//   }
// }

function backToHostel() {
  if (reviewBookingHostel.style.display === 'block') {
    reviewBookingHostel.style.display = 'none';
    userDetailsHostel.style.display = 'block';
  }
}


function bookBooking() {
  if (reviewBookingHostel.style.display === 'block') {
    reviewBookingHostel.style.display = 'none';
    bookBookingHostel.style.display = 'block';
  }
}

function exitBooking() {
  if (bookBookingHostel.style.display === 'block') {
    bookBookingHostel.style.display = 'none';
  }
}


// eslint-disable-next-line require-jsdoc
function show1() {
  document.getElementById('div1').style.display = 'none';
}

// eslint-disable-next-line require-jsdoc
function show2() {
  document.getElementById('div1').style.display = 'block';
}

// eslint-disable-next-line require-jsdoc
function dietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'none';
}
// eslint-disable-next-line require-jsdoc
function noDietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'block';
}


$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    const inputValue = $(this).attr('value');
    $('.' + inputValue).toggle();
  });
});


$(document).ready(function() {
  $('#display').click(function() {
    var meals = [];
    $.each($('input[name=\'mealOptions\']:checked'), function() {
      meals.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('result').innerHTML = 'Complimentary meals: ' + meals.join(', ');
      }
    });

    var lunchOptions = [];
    $.each($('input[name=\'lunch\']:checked'), function() {
      lunchOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('lunchResult').innerHTML = 'Lunch: ' + lunchOptions.join(', ');
      }
    });

    var starterOptions = [];
    $.each($('input[name=\'starter\']:checked'), function() {
      starterOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('starterResult').innerHTML = 'Starter: ' + starterOptions.join(', ');
      }
    });

    var dessertOptions = [];
    $.each($('input[name=\'dessert\']:checked'), function() {
      dessertOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dessertResult').innerHTML = 'Dessert: ' + dessertOptions.join(', ');
      }
    });

    var mainOptions = [];
    $.each($('input[name=\'main\']:checked'), function() {
      mainOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('mainResult').innerHTML = 'Main: ' + mainOptions.join(', ');
      }
    });

    let dietaryResult = document.getElementById('dietaryRequirementsResult').innerHTML;
    const dietaryRequirementsOptions = [];
    $.each($('input[name=\'dietaryRequirements\']:checked'), function() {
      dietaryRequirementsOptions.push($(this).val());
      if ($(this).is(':checked')) {
        dietaryResult = 'Dietary requirements: ' + dietaryRequirementsOptions.join(', ');
      }
    });

    const dietaryOptions = [];
    $.each($('input[name=\'dietary\']:checked'), function() {
      dietaryOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dietaryResult').innerHTML = dietaryOptions;
      }
    });
  });
});

function guestDetails() {
  const firstName = document.getElementById('bookingForm').elements['firstname'].value;
  const lastName = document.getElementById('bookingForm').elements['lastname'].value;
  const email = document.getElementById('bookingForm').elements['email'].value;
  const phone = document.getElementById('bookingForm').elements['phone'].value;
  document.getElementById('guestFirstName').innerHTML = 'First name: ' + firstName;
  document.getElementById('guestLastName').innerHTML = 'Last name: ' + lastName;
  document.getElementById('guestEmail').innerHTML = 'Email: ' + email;
  document.getElementById('guestPhone').innerHTML = 'Phone: ' + phone;
  
  const destination = document.getElementById('searchForm').elements['city'].value;
  const dateTimes = document.getElementById('searchForm').elements['dateTimes'].value;
  const guests = document.getElementById('searchForm').elements['guests'].value;
  const rooms = document.getElementById('searchForm').elements['rooms'].value;
  document.getElementById('searchDestination').innerHTML = 'Destination: ' + destination;
  document.getElementById('searchDateTimes').innerHTML = 'Check in/Check out: ' + dateTimes;
  document.getElementById('searchGuests').innerHTML = 'No. of guests: ' + guests;
  document.getElementById('searchRooms').innerHTML = 'No. of rooms: ' + rooms;
}

//window.onload = function () {

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

// eslint-disable-next-line require-jsdoc
// function guestDetails() {
//   const elements = document.getElementById('bookingForm').elements;
//   const obj = {};
//   for (let i = 0; i < elements.length; i++) {
//     const item = elements.item(i);
//     obj[item.name] = item.value;
//   }
//   console.log(JSON.stringify(obj));
//   document.getElementById('guestDetails').innerHTML = JSON.stringify(obj);
// }


