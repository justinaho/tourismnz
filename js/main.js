/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

window.addEventListener('load', (event) => {
  clearForm();
});


function clearForm() {
  document.getElementById('city').value = '';
  document.getElementById('dateTimes').value = '';
  document.getElementById('guests').value = '';
  document.getElementById('rooms').value = '';
  document.getElementById('content__results-js').style.display = 'none';
}


const userDetails = document.getElementById('screen-js');
const reviewBooking = document.getElementById('reviewScreen-js');
const bookBooking = document.getElementById('bookBooking');

function hideMealOptions() {
  document.getElementById('mealOptions').style.display = 'none';
}

// eslint-disable-next-line require-jsdoc
function showMealOptions() {
  document.getElementById('mealOptions').style.display = 'block';
}

// eslint-disable-next-line require-jsdoc
function hideDietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'none';
}
// eslint-disable-next-line require-jsdoc
function showDietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'block';
}

function clearBookingFields() {
  document.getElementById('firstname').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('searchDestination').value = '';
  document.getElementById('searchDateTimes').value = '';
  document.getElementById('searchGuests').value = '';
  document.getElementById('searchRooms').value = '';

  $('input[type="checkbox"]').prop('checked', false);
  $('input[type="radio"]').prop('checked', false);
  hideMealOptions();
  hideDietaryOptions();

  document.getElementById('menuOptions').style.display = 'none';
}

// function backToDetails() {
//   if (reviewBooking.style.display === 'block') {
//     reviewBooking.style.display = 'none';
//     document.getElementById('screen-js').style.display = 'block';
//   }
// }

function cancelFormStep1() {
  userDetails.style.display = 'none';
  clearBookingFields();
}

function cancelFormStep2() {
  reviewBooking.style.display = 'none';
  clearBookingFields();
}

function cancelFormStep3() {
  bookBooking.style.display = 'none';
  clearBookingFields();
}


function toggleResults() {
  const results = document.getElementById('content__results-js');
  if (results.style.display === 'none') {
    results.style.display = 'block';
  }
}

function showBookingForm() {
  if (userDetails.style.display === 'none') {
    userDetails.style.display = 'block';
  }
}

function review() {
  if (userDetails.style.display === 'block') {
    userDetails.style.display = 'none';
    reviewBooking.style.display = 'block';
  }
}

function showBooked() {
  if (reviewBooking.style.display === 'block') {
    reviewBooking.style.display = 'none';
    bookBooking.style.display = 'block';
  }
}

function exitBooking() {
  if (bookBooking.style.display === 'block') {
    bookBooking.style.display = 'none';
  }
  clearBookingFields();
}


$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    const inputValue = $(this).attr('value');
    $('.' + inputValue).toggle();
  });
});

function guestDetails() {
  const firstName = document.getElementById('bookingform-js').elements['firstname'].value;
  const lastName = document.getElementById('bookingform-js').elements['lastname'].value;
  const email = document.getElementById('bookingform-js').elements['email'].value;
  const phone = document.getElementById('bookingform-js').elements['phone'].value;
  document.getElementById('guestFirstName').innerHTML = 'First name: ' + firstName;
  document.getElementById('guestLastName').innerHTML = 'Last name: ' + lastName;
  document.getElementById('guestEmail').innerHTML = 'Email: ' + email;
  document.getElementById('guestPhone').innerHTML = 'Phone: ' + phone;

  const destination = document.getElementById('sidebar__searchform-js').elements['city'].value;
  const dateTimes = document.getElementById('sidebar__searchform-js').elements['dateTimes'].value;
  const guests = document.getElementById('sidebar__searchform-js').elements['guests'].value;
  const rooms = document.getElementById('sidebar__searchform-js').elements['rooms'].value;

  document.getElementById('searchDestination').innerHTML = 'Destination: ' + destination;
  document.getElementById('searchDateTimes').innerHTML = 'Check in/Check out: ' + dateTimes;
  document.getElementById('searchGuests').innerHTML = 'No. of guests: ' + guests;
  document.getElementById('searchRooms').innerHTML = 'No. of rooms: ' + rooms;
}

function showHostelInfo() {
  const showHostel = document.getElementById('hostel__panel');

  if (showHostel.style.display === 'none') {
    showHostel.style.display = 'block';
  } else {
    showHostel.style.display = 'none';
  }
}

function showHotelInfo() {
  const showHotel = document.getElementById('hotel__panel');

  if (showHotel.style.display === 'none') {
    showHotel.style.display = 'block';
  } else {
    showHotel.style.display = 'none';
  }
}


function showMotelInfo() {
  const showMotel = document.getElementById('motel__panel');

  if (showMotel.style.display === 'none') {
    showMotel.style.display = 'block';
  } else {
    showMotel.style.display = 'none';
  }
}

function showHouseInfo() {
  const showHouse = document.getElementById('house__panel');

  if (showHouse.style.display === 'none') {
    showHouse.style.display = 'block';
  } else {
    showHouse.style.display = 'none';
  }
}
