/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// // eslint-disable-next-line require-jsdoc

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


function parseDate(input) {
  const parts = input.match(/(\d+)/g);
  // date, month, year
  return new Date(parts[2], parts[1] - 1, parts[0]);
}


$(function() {
  $('input[name="dateTimes"]').daterangepicker({
    timePicker: false,
    minDate: new Date(moment()),
    startDate: moment().endOf('hour'),
    endDate: moment().endOf('hour').add(24, 'hour'),
    drops: 'up',
    autoApply: true,
    locale: {
      format: 'DD/MM/YYYY',
    },
  });

  $('input[name="dateTimes"]').on('apply.daterangepicker', function showResults(ev, picker) {
    const date1 = parseDate(picker.startDate.format('DD/MM/YYYY'));
    const date2 = parseDate(picker.endDate.format('DD/MM/YYYY'));

    // To calculate the time difference of two dates
    const DifferenceInTime = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

    // Hostel min 1 night, max 5 nights
    if (DifferenceInDays >= 1 && DifferenceInDays <= 10) {
      document.getElementById('hostelCard').classList.add('show');
    } else {
      document.getElementById('hostelCard').classList.remove('show');
    }

    // Hotel min 1 night, max 5 nights
    if (DifferenceInDays >= 1 && DifferenceInDays <= 5) {
      document.getElementById('hotelCard').classList.add('show');
    } else {
      document.getElementById('hotelCard').classList.remove('show');
    }

    // Motel min 3 nights, max 10 nights
    if (DifferenceInDays >= 3 && DifferenceInDays <= 10) {
      document.getElementById('motelCard').classList.add('show');
    } else {
      document.getElementById('motelCard').classList.remove('show');
    }

    // House min 2 nights, max 15 nights
    if (DifferenceInDays >= 2 && DifferenceInDays <= 15) {
      document.getElementById('houseCard').classList.add('show');
    } else {
      document.getElementById('houseCard').classList.remove('show');
    }

    const buttonList = document.querySelectorAll('.type');
    buttonList.forEach(function(i) {
      i.addEventListener('click', function(e) {
        const type = e.target.value;
        document.getElementById('acommodationType').innerHTML = 'Acommodation type: ' + type;
        const price = [30, 157, 90, 240];
        const hostelPrice = price[0];
        const hotelPrice = price[1];
        const motelPrice = price[2];
        const housePrice = price[3];
        const guests = document.getElementById('sidebar__searchform-js').elements['guests'].value;

        if (type === 'Hostel') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + hostelPrice + ') = ' + '$' + DifferenceInDays * hostelPrice;
          document.getElementById('lunch1').innerHTML = hostelLunch1;
          document.getElementById('lunch2').innerHTML = hostelLunch2;
          document.getElementById('main1').innerHTML = hostelMain1;
          document.getElementById('main2').innerHTML = hostelMain2;
          document.getElementById('dessert1').innerHTML = hostelDessert1;
          document.getElementById('dessert2').innerHTML = hostelDessert2;

          const bookBtn = document.getElementById('display');
          bookBtn.addEventListener('click', function(e) {
            // Selected Hostel meals
            // Lunch
            const selectedHostelLunch = $('input[name=\'lunch\']:checked').val();
            if (selectedHostelLunch == 1) {
              console.log('hi');
              document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hostelLunch1;
            }
            if (selectedHostelLunch == 2) {
              console.log('hey');
              document.getElementById('lunchResult').innerHTML = 'Lunch: ' + hostelLunch2;
            } else {
              console.log('no');
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
          });
        }

        if (type === 'Hotel') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + hotelPrice + ') = ' + '$' + DifferenceInDays * hotelPrice;
          document.getElementById('lunch1').innerHTML = hotelLunch1;
          document.getElementById('lunch2').innerHTML = hotelLunch2;
          document.getElementById('main1').innerHTML = hotelMain1;
          document.getElementById('main2').innerHTML = hotelMain2;
          document.getElementById('dessert1').innerHTML = hotelDessert1;
          document.getElementById('dessert2').innerHTML = hotelDessert2;

          const bookBtn = document.getElementById('display');
          bookBtn.addEventListener('click', function(e) {
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
          });
        }

        if (type === 'Motel') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + motelPrice + ') = ' + '$' + DifferenceInDays * motelPrice;
          document.getElementById('lunch1').innerHTML = motelLunch1;
          document.getElementById('lunch2').innerHTML = motelLunch2;
          document.getElementById('main1').innerHTML = motelMain1;
          document.getElementById('main2').innerHTML = motelMain2;
          document.getElementById('dessert1').innerHTML = motelDessert1;
          document.getElementById('dessert2').innerHTML = motelDessert2;

          const bookBtn = document.getElementById('display');
          bookBtn.addEventListener('click', function(e) {
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
          });
        }

        if (type === 'House') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + housePrice + ') = ' + '$' + DifferenceInDays * housePrice;
          document.getElementById('lunch1').innerHTML = houseLunch1;
          document.getElementById('lunch2').innerHTML = houseLunch2;
          document.getElementById('main1').innerHTML = houseMain1;
          document.getElementById('main2').innerHTML = houseMain2;
          document.getElementById('dessert1').innerHTML = houseDessert1;
          document.getElementById('dessert2').innerHTML = houseDessert2;

          const bookBtn = document.getElementById('display');
          bookBtn.addEventListener('click', function(e) {
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
          });
        }
      });
    });
  });
});

