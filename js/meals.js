/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
/* eslint-disable max-len */

// Hostel meals: Lunch, Main, Dessert
const hostelMeals1 = ['Cheese rolls', 'Butter chicken', 'Chocolate cake'];
const hostelMeals2 = ['Pumpkin soup (v)', 'Chickpea curry (v)', 'Berry sorbet (v)'];

const hotelMeals1 = ['Beef lasagna', 'Angus scotch fillet', 'Tiramisu'];
const hotelMeals2 = ['Pumpkin ravioli (vg)', 'Buffalo cauliflower (v)', 'Salted caramel chocolate tart (v)'];

const motelMeals1 = ['Cheeseburger', 'Quiche', 'Crème brûlée'];
const motelMeals2 = ['Buffalo cauliflower(v)', 'Pesto gnocchi(vg)', 'Vegan apple tarte tatin (v)'];

const houseMeals1 = ['Caesar salad', 'Steak and mushroom pie', 'Chocolate mouse'];
const houseMeals2 = ['Tofu green curry (v)', 'Jackfruit burger (v)', 'Dark chocolate and berry cake (v)'];

const hostelLunch1 = hostelMeals1[0];
const hostelLunch2 = hostelMeals2[0];
const hostelMain1 = hostelMeals1[1];
const hostelMain2 = hostelMeals2[1];
const hostelDessert1 = hostelMeals1[2];
const hostelDessert2 = hostelMeals2[2];

const hotelLunch1 = hotelMeals1[0];
const hotelLunch2 = hotelMeals2[0];
const hotelMain1 = hotelMeals1[1];
const hotelMain2 = hotelMeals2[1];
const hotelDessert1 = hotelMeals1[2];
const hotelDessert2 = hotelMeals2[2];

const motelLunch1 = motelMeals1[0];
const motelLunch2 = motelMeals2[0];
const motelMain1 = motelMeals1[1];
const motelMain2 = motelMeals2[1];
const motelDessert1 = motelMeals1[2];
const motelDessert2 = motelMeals2[2];

const houseLunch1 = houseMeals1[0];
const houseLunch2 = houseMeals2[0];
const houseMain1 = houseMeals1[1];
const houseMain2 = houseMeals2[1];
const houseDessert1 = houseMeals1[2];
const houseDessert2 = houseMeals2[2];

$(document).ready(function() {
  $('#display').click(function() {
    const meals = [];
    $.each($('input[name=\'mealOptions\']:checked'), function() {
      meals.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('result').innerHTML = 'Complimentary meals: ' + meals.join(', ');
      }
    });

    // Selected Hostel meals
    // Lunch
    const selectedHostelLunch = $('input[name=\'lunch\']:checked').val();
    if (selectedHostelLunch == 1) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hostelLunch1;
    }
    if (selectedHostelLunch == 2) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hostelLunch2;
    }

    // Main

    const selectedHostelMain = $('input[name=\'main\']:checked').val();
    if (selectedHostelMain == 1) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + hostelMain1;
    }
    if (selectedHostelMain == 2) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + hostelMain2;
    }

    // Dessert

    const selectedHostelDessert = $('input[name=\'dessert\']:checked').val();
    if (selectedHostelDessert == 1) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + hostelDessert1;
    }
    if (selectedHostelDessert == 2) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + hostelDessert2;
    }

    // Selected Hotel meals
    // Lunch
    const selectedHotelLunch = $('input[name=\'lunch\']:checked').val();
    if (selectedHotelLunch == 1) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hotelLunch1;
    }
    if (selectedHotelLunch == 2) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hotelLunch2;
    }

    // Main

    const selectedHotelMain = $('input[name=\'main\']:checked').val();
    if (selectedHotelMain == 1) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + hotelMain1;
    }
    if (selectedHotelMain == 2) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + hotelMain2;
    }

    // Dessert

    const selectedHotelDessert = $('input[name=\'dessert\']:checked').val();
    if (selectedHotelDessert == 1) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + hotelDessert1;
    }
    if (selectedHotelDessert == 2) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + hotelDessert2;
    }

    // Selected Motel meals
    // Lunch
    const selectedMotelLunch = $('input[name=\'lunch\']:checked').val();
    if (selectedMotelLunch == 1) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + motelLunch1;
    }
    if (selectedMotelLunch == 2) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + motelLunch2;
    }

    // Main

    const selectedMotelMain = $('input[name=\'main\']:checked').val();
    if (selectedMotelMain == 1) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + motelMain1;
    }
    if (selectedMotelMain == 2) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + motelMain2;
    }

    // Dessert

    const selectedMotelDessert = $('input[name=\'dessert\']:checked').val();
    if (selectedMotelDessert == 1) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + motelDessert1;
    }
    if (selectedMotelDessert == 2) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + motelDessert2;
    }

    // Selected House meals
    // Lunch
    const selectedHouseLunch = $('input[name=\'lunch\']:checked').val();
    if (selectedHouseLunch == 1) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + houseLunch1;
    }
    if (selectedHouseLunch == 2) {
      document.getElementById('lunchResult').innerHTML = 'Lunch: ' + houseLunch2;
    }

    // Main

    const selectedHouseMain = $('input[name=\'main\']:checked').val();
    if (selectedHouseMain == 1) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + houseMain1;
    }
    if (selectedHouseMain == 2) {
      document.getElementById('mainResult').innerHTML = 'Dinner: ' + houseMain2;
    }

    // Dessert

    const selectedHouseDessert = $('input[name=\'dessert\']:checked').val();
    if (selectedHouseDessert == 1) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + houseDessert1;
    }
    if (selectedHouseDessert == 2) {
      document.getElementById('dessertResult').innerHTML = 'Dessert: ' + houseDessert2;
    }

    const dietaryRequirementsOptions = [];
    $.each($('input[name=\'dietaryRequirements\']:checked'), function() {
      dietaryRequirementsOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dietaryRequirementsResult').innerHTML = 'Dietary requirements: ' + dietaryRequirementsOptions.join(', ');
      }
    });

    const dietaryOptions = [];
    $.each($('input[name=\'dietary\']:checked'), function() {
      dietaryOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dietaryResult').innerHTML = dietaryOptions;
      }
    });

    if (meals.length === 0) {
      document.getElementById('result').innerHTML = 'none';
    }

    if (dietaryRequirementsOptions[0] === 'no') {
      document.getElementById('dietaryRequirementsResult').innerHTML = 'none';
    }

    const otherOption = document.getElementById('otherOption').value;
    if (document.getElementById('otherOption').value !== '') {
      document.getElementById('dietaryResult').innerHTML = otherOption;
    }
  });
});


