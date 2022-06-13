$(function() {
  $('input[name="datetimes"]').daterangepicker({
    
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    drops: "up",
    locale: {
      format: 'DD/MM/YYYY hh:mm A'
    }
  });
});
