/* eslint-disable no-invalid-this */
/* eslint-disable max-len */
// Hostel meals: Lunch, Starter, Main, Dessert
const hostelMeals1 = ['Beef', 'Salt and pepper squid', 'Angus scotch fillet', 'Tiramisu'];
const hostelMeals2 = ['Pumpkin ravioli (vg)', 'Garlic bread (vg)', 'Grilled portobello mushroom steak (v)', 'Salted caramel chocolate tart (v)'];

// const starter1 = ['Beef Lasagna', 'Cheeseburger', 'Quiche', 'Caesar Salad'];
// const starter2 = ['Pumpkin ravioli (vg)', 'Buffalo Cauliflower(v)', 'Pesto Gnocchi(vg)', 'Tofu Green Curry'];

// const main1 = ['Beef Lasagna', 'Cheeseburger', 'Quiche', 'Caesar Salad'];
// const main2 = ['Pumpkin ravioli (vg)', 'Buffalo Cauliflower(v)', 'Pesto Gnocchi(vg)', 'Tofu Green Curry'];

// const dessert1 = ['Beef Lasagna', 'Cheeseburger', 'Quiche', 'Caesar Salad'];
// const dessert2 = ['Pumpkin ravioli (vg)', 'Buffalo Cauliflower(v)', 'Pesto Gnocchi(vg)', 'Tofu Green Curry'];

const hostelLunch1 = hostelMeals1[0];
const hostelLunch2 = hostelMeals2[0];

$(document).ready(function() {
  $('#display').click(function() {
    const meals = [];
    $.each($('input[name=\'mealOptions\']:checked'), function() {
      meals.push($(this).val());
      if ($(this).is(':checked')) {
        document.getElementById('result').innerHTML = 'Complimentary meals: ' + meals.join(', ');
      }
    });


    const lunchOptions = [];
    $.each($('input[name=\'lunch\']:checked'), function() {
      lunchOptions.push($(this).val());

      if ($(this).is(':checked')) {
        document.getElementById('lunchResult').innerHTML = 'Lunch: ' + lunchOptions.join(', ');
      }
    });

    const starterOptions = [];
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
      document.getElementById('lunchBox').innerHTML = hostelLunch1;
    }

    if (type === 'Hotel') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * hotelPrice;
    }

    if (type === 'Motel') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * motelPrice;
    }

    if (type === 'House') {
      document.getElementById('bookingCosts').innerHTML = 'Total cost: $' + roomsAmount * housePrice;
    }
  });
});
