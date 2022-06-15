

$(function() {
  $('input[name="datetimes"]').daterangepicker({
    timePicker: true,
    minDate: new Date(moment()),
    startDate: moment().endOf('hour'),
    endDate: moment().endOf('hour').add(24, 'hour'),
    drops: "up",
    locale: {
      format: 'DD/MM/YYYY hh:mm A'
    }
  });
});

