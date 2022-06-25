/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
// Hostel meals: Lunch, Starter, Main, Dessert
const hotelMeals1 = ['Beef Lasagna', 'Salt and pepper squid', 'Angus scotch fillet', 'Tiramisu'];
const hotelMeals2 = ['Pumpkin ravioli (vg)', 'Garlic bread (vg)', 'Grilled portobello mushroom steak (v)', 'Salted caramel chocolate tart (v)'];

const motelMeals1 = ['Beef Lasagna', 'Cheeseburger', 'Quiche', 'Caesar Salad'];
const motelMeals2 = ['Pumpkin ravioli (vg)', 'Buffalo Cauliflower(v)', 'Pesto Gnocchi(vg)', 'Tofu Green Curry'];

const houseMeals1 = ['Beef Lasagna', 'Cheeseburger', 'Quiche', 'Caesar Salad'];
const houseMeals2 = ['Pumpkin ravioli (vg)', 'Buffalo Cauliflower(v)', 'Pesto Gnocchi(vg)', 'Tofu Green Curry'];

const hotelLunch1 = hotelMeals1[0];
const hotelLunch2 = hotelMeals2[0];
const hotelStarter1 = hotelMeals1[1];
const hotelStarter2 = hotelMeals2[1];
const hotelMain1 = hotelMeals1[2];
const hotelMain2 = hotelMeals2[2];
const hotelDessert1 = hotelMeals1[3];
const hotelDessert2 = hotelMeals2[3];

const motelLunch1 = motelMeals1[0];
const motelLunch2 = motelMeals2[0];
const motelStarter1 = motelMeals1[1];
const motelStarter2 = motelMeals2[1];
const motelMain1 = motelMeals1[2];
const motelMain2 = motelMeals2[2];
const motelDessert1 = motelMeals1[3];
const motelDessert2 = motelMeals2[3];

const houseLunch1 = houseMeals1[0];
const houseLunch2 = houseMeals2[0];
const houseStarter1 = houseMeals1[1];
const houseStarter2 = houseMeals2[1];
const houseMain1 = houseMeals1[2];
const houseMain2 = houseMeals2[2];
const houseDessert1 = houseMeals1[3];
const houseDessert2 = houseMeals2[3];


const price = [30, 157, 90, 240];
const hostelPrice = price[0];
const hotelPrice = price[1];
const motelPrice = price[2];
const housePrice = price[3];


const buttonList = document.querySelectorAll('.type');
buttonList.forEach(function(i) {
  i.addEventListener('click', function(e) {
    const type = e.target.value;
    document.getElementById('acommodationType').innerHTML = 'Acommodation type: ' + type;

    const roomsAmount = document.getElementById('sidebar__searchform-js').elements['rooms'].value;

    if (type === 'Hostel') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * hostelPrice;
    }

    if (type === 'Hotel') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * hotelPrice;
      document.getElementById('lunch1').innerHTML = hotelLunch1;
      document.getElementById('lunch2').innerHTML = hotelLunch2;
      document.getElementById('starter1').innerHTML = hotelStarter1;
      document.getElementById('starter2').innerHTML = hotelStarter2;
      document.getElementById('main1').innerHTML = hotelMain1;
      document.getElementById('main2').innerHTML = hotelMain2;
      document.getElementById('dessert1').innerHTML = hotelDessert1;
      document.getElementById('dessert2').innerHTML = hotelDessert2;
    }

    if (type === 'Motel') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * motelPrice;
      document.getElementById('lunch1').innerHTML = motelLunch1;
      document.getElementById('lunch2').innerHTML = motelLunch2;
      document.getElementById('starter1').innerHTML = motelStarter1;
      document.getElementById('starter2').innerHTML = motelStarter2;
      document.getElementById('main1').innerHTML = motelMain1;
      document.getElementById('main2').innerHTML = motelMain2;
      document.getElementById('dessert1').innerHTML = motelDessert1;
      document.getElementById('dessert2').innerHTML = motelDessert2;
    }

    if (type === 'House') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * housePrice;
      document.getElementById('lunch1').innerHTML = houseLunch1;
      document.getElementById('lunch2').innerHTML = houseLunch2;
      document.getElementById('starter1').innerHTML = houseStarter1;
      document.getElementById('starter2').innerHTML = houseStarter2;
      document.getElementById('main1').innerHTML = houseMain1;
      document.getElementById('main2').innerHTML = houseMain2;
      document.getElementById('dessert1').innerHTML = houseDessert1;
      document.getElementById('dessert2').innerHTML = houseDessert2;
    }
  });
});

$(document).ready(function() {
  $('#display').click(function() {
    const meals = [];
    $.each($('input[name=\'mealOptions\']:checked'), function() {
      meals.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('result').innerHTML = 'Complimentary meals: ' + meals.join(', ');
      }
    });


    const lunchBox = [hotelLunch1, hotelLunch2, motelLunch1, motelLunch2, houseLunch1, houseLunch2];
    $.each($('lunchBox:checked'), function() {
      lunchBox.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('lunchResult').innerHTML = 'Lunch: ' + lunchBox;
      }
    });

    const starterOptions = [hotelStarter1, hotelStarter2, motelStarter1, motelStarter2, houseStarter1, houseStarter2];
    $.each($('input[name=\'starter\']:checked'), function() {
      starterOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('starterResult').innerHTML = 'Starter: ' + starterOptions.join(', ');
      }
    });

    const mainOptions = [];
    $.each($('input[name=\'main\']:checked'), function() {
      mainOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('mainResult').innerHTML = 'Main: ' + mainOptions.join(', ');
      }
    });

    const dessertOptions = [];
    $.each($('input[name=\'dessert\']:checked'), function() {
      dessertOptions.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('dessertResult').innerHTML = 'Dessert: ' + dessertOptions.join(', ');
      }
    });


    // const dietaryResult = document.getElementById('dietaryRequirementsResult').innerHTML;
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
