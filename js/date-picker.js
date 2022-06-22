/* eslint-disable max-len */
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
      // format: 'DD/MM/YYYY hh:mm A',
    },
  });

  $('input[name="dateTimes"]').on('apply.daterangepicker', function(ev, picker) {
    const date1 = new Date(start.format('DD/MM/YYYY'));
    const date2 = new Date(end.format('DD/MM/YYYY'));
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) + 1);
    $('#calculated').html(diffDays + ' Days');
  });
});

// $(function() {
//   $('input[name="dateTimes"]').daterangepicker({
//     opens: 'left',
//   }, function(start, end, label) {
//     document.getElementById('start').innerHTML = start.format('DD-MM-YYYY');
//     document.getElementById('end').innerHTML = end.format('DD-MM-YYYY');

//     // Calculation of Duration:
//     const date1 = new Date(start.format('YYYY-MM-DD'));
//     const date2 = new Date(end.format('YYYY-MM-DD'));
//     const timeDiff = Math.abs(date2.getTime() - date1.getTime());
//     const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) + 1);
//     $('.duration_days').html(diffDays + ' Days');
//     // console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//   });
// });

// $( function() {
//   const dateFormat = 'dd/mm/yy',
//     from = $( '#from' )
//         .datepicker({
//           defaultDate: '+1w',
//           changeMonth: true,
//           numberOfMonths: 1,
//         })
//         .on( 'change', function() {
//           to.datepicker( 'option', 'minDate', getDate( this ) );
//         }),
//     to = $( '#to' ).datepicker({
//       defaultDate: '+1w',
//       changeMonth: true,
//       numberOfMonths: 1,
//     })
//         .on( 'change', function() {
//           from.datepicker( 'option', 'maxDate', getDate( this ) );
//         });

//   function getDate( element ) {
//     let date;
//     try {
//       date = $.datepicker.parseDate( dateFormat, element.value );
//     } catch (error) {
//       date = null;
//     }

//     return date;
//   }
// } );

// $(function() {
//   $('#from').datepicker({dateFormat: 'dd-mm-yy'});
//   $('#to').datepicker({dateFormat: 'dd-mm-yy'});
// });
// $('#submit').click(function() {
//   const start = $('#from').datepicker('getDate');
//   const end = $('#to').datepicker('getDate');
//   const days = (end - start)/1000/60/60/24;
//   console.log(days);
// });

