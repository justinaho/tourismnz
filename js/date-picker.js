/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// // eslint-disable-next-line require-jsdoc

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
        }

        if (type === 'Hotel') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + hotelPrice + ') = ' + '$' + DifferenceInDays * hotelPrice;
          document.getElementById('lunch1').innerHTML = hotelLunch1;
          document.getElementById('lunch2').innerHTML = hotelLunch2;
          document.getElementById('main1').innerHTML = hotelMain1;
          document.getElementById('main2').innerHTML = hotelMain2;
          document.getElementById('dessert1').innerHTML = hotelDessert1;
          document.getElementById('dessert2').innerHTML = hotelDessert2;
        }

        if (type === 'Motel') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + motelPrice + ') = ' + '$' + DifferenceInDays * motelPrice;
          document.getElementById('lunch1').innerHTML = motelLunch1;
          document.getElementById('lunch2').innerHTML = motelLunch2;
          document.getElementById('main1').innerHTML = motelMain1;
          document.getElementById('main2').innerHTML = motelMain2;
          document.getElementById('dessert1').innerHTML = motelDessert1;
          document.getElementById('dessert2').innerHTML = motelDessert2;
        }

        if (type === 'House') {
          document.getElementById('bookingCosts').innerHTML = guests + ' guest(s) x ' + DifferenceInDays + ' night(s) ($' + housePrice + ') = ' + '$' + DifferenceInDays * housePrice;
          document.getElementById('lunch1').innerHTML = houseLunch1;
          document.getElementById('lunch2').innerHTML = houseLunch2;
          document.getElementById('main1').innerHTML = houseMain1;
          document.getElementById('main2').innerHTML = houseMain2;
          document.getElementById('dessert1').innerHTML = houseDessert1;
          document.getElementById('dessert2').innerHTML = houseDessert2;
        }
      });
    });
  });
});

