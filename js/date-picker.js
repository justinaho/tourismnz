/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// // eslint-disable-next-line require-jsdoc
function parseDate(input) {
  const parts = input.match(/(\d+)/g);
  // date, month, year
  return new Date(parts[2], parts[1]-1, parts[0]);
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

    // const guests = document.getElementById('sidebar__searchform-js').elements['guests'].value;
    // const rooms = document.getElementById('sidebar__searchform-js').elements['rooms'].value;

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
  });
});


