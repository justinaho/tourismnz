/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

const userDetails = document.getElementById('detailsScreen-js');
const reviewBooking = document.getElementById('reviewScreen-js');
const bookBooking = document.getElementById('bookingScreen-js');

userDetails.style.display = 'none';
reviewBooking.style.display = 'none';
bookBooking.style.display = 'none';
document.getElementById('content__results-js').style.display = 'none';
document.getElementById('city').value = null;
document.getElementById('dateTimes').value = '';
document.getElementById('guests').value = '';
document.getElementById('rooms').value = '';
window.addEventListener('load', (event) => {
  document.getElementById('city').value = null;
  document.getElementById('dateTimes').value = '';
  document.getElementById('guests').value = '';
  document.getElementById('rooms').value = '';
});

// reset button sidebar
function clearForm() {
  document.getElementById('city').value = null;
  document.getElementById('dateTimes').value = '';
  document.getElementById('guests').value = '';
  document.getElementById('rooms').value = '';
  document.getElementById('content__results-js').style.display = 'none';
}

function hideMealOptions() {
  document.getElementById('mealOptions').style.display = 'none';
}


function showMealOptions() {
  document.getElementById('mealOptions').style.display = 'block';
}


function hideDietaryOptions() {
  document.getElementById('dietaryOptions').style.display = 'none';
}

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
  showGuests();
}

function showBookingForm() {
  if (userDetails.style.display === 'none') {
    userDetails.style.display = 'block';
  }
}

function backToDetails() {
  if (reviewBooking.style.display === 'block') {
    reviewBooking.style.display = 'none';
  }

  // if (reviewBooking.style.display === 'none') {
  //   userDetails.style.display = 'block';
  // }
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

// accodion more info tabs
function showHostelInfo() {
  const showHostel = document.getElementById('hostel__extra');

  if (showHostel.style.display === 'none') {
    showHostel.style.display = 'block';
  } else {
    showHostel.style.display = 'none';
  }
}

function showHotelInfo() {
  const showHotel = document.getElementById('hotel__extra');

  if (showHotel.style.display === 'none') {
    showHotel.style.display = 'block';
  } else {
    showHotel.style.display = 'none';
  }
}


function showMotelInfo() {
  const showMotel = document.getElementById('motel__extra');

  if (showMotel.style.display === 'none') {
    showMotel.style.display = 'block';
  } else {
    showMotel.style.display = 'none';
  }
}

function showHouseInfo() {
  const showHouse = document.getElementById('house__extra');

  if (showHouse.style.display === 'none') {
    showHouse.style.display = 'block';
  } else {
    showHouse.style.display = 'none';
  }
}

function showGuests() {
  const guests = document.getElementById('sidebar__searchform-js').elements['guests'].value;
  const rooms = document.getElementById('sidebar__searchform-js').elements['rooms'].value;

  // Hostel min 1 night, max 5 nights, max 1 guest
  if (guests !== 1) {
    document.getElementById('hostelCard').classList.remove('show');
  }

  // if (guests === rooms) {
  //   document.getElementById('hostelCard').classList.add('show');
  //   document.getElementById('hotelCard').classList.add('show');
  //   document.getElementById('motelCard').classList.add('show');
  //   document.getElementById('houseCard').classList.add('show');
  // }

  // Hotel min 1 night, max 5 nights, max 1-2 people

  if (guests > 2) {
    document.getElementById('hotelCard').classList.remove('show');
  }

  // Motel min 3 nights, max 10 nights,  max 2-4 people

  if (guests === 1 && guests > 4) {
    document.getElementById('motelCard').classList.remove('show');
  }

  // House min 2 nights, max 15 nights, 1-4 people

  if (guests > 4) {
    document.getElementById('houseCard').classList.remove('show');
  }
}
