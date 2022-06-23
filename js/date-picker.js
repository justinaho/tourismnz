/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
// // eslint-disable-next-line require-jsdoc
function parseDate(input) {
  const parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[2], parts[1]-1, parts[0]); // months are 0-based
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

  $('input[name="dateTimes"]').on('apply.daterangepicker', function(ev, picker) {
    const date1 = parseDate(picker.startDate.format('DD/MM/YYYY'));
    const date2 = parseDate(picker.endDate.format('DD/MM/YYYY'));

    // To calculate the time difference of two dates
    const DifferenceInTime = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

    //To display the final no. of days (result)
    alert(DifferenceInDays);

    if (DifferenceInDays === 1){
      document.getElementsByClassName('motel__card').element.classList.remove('show');
    }
  });
});


