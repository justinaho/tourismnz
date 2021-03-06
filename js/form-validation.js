$(document).ready(function() {
  $('#sidebar__searchform-js').validate({

    rules: {
      city: {
        required: true,
      },

      dateTimes: {
        required: true,
      },
      guests: {
        required: true,
        min: 1,
        digits: true,
      },
    },

    messages: {

      city: {
        required: 'Please select a city',
      },

      dateTimes: {
        required: 'Please pick a date and time',
      },
      guests: {
        required: 'This field is required',
        min: 'A number greater than 0 is required',
      },
    },

    submitHandler: function(form) {
      toggleResults();
      return false;
    },
  });


  $('#bookingform-js').validate({

    rules: {
      firstname: {
        required: true,
      },

      lastname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 13,
      },
      meals: {
        required: true,
      },
      dietaryRequirements: {
        required: true,
      },
    },
    errorPlacement: function(error, element) {
      if (element.attr('name') == 'meals') {
        error.appendTo('#meals-error');
      }
      if (element.attr('name') == 'dietaryRequirements') {
        error.appendTo('#errorBox2');
      }
      if (element.attr('name') == 'firstname') {
        error.insertAfter(element);
      }
      if (element.attr('name') == 'lastname') {
        error.insertAfter(element);
      }
      if (element.attr('name') == 'email') {
        error.insertAfter(element);
      }
      if (element.attr('name') == 'phone') {
        error.insertAfter(element);
      }
    },
    messages: {

      firstname: {
        required: 'Please enter your first name',
      },

      lastname: {
        required: 'Please enter your last name',
      },
      email: {
        required: 'Please enter an email address',
        email: 'Please enter a valid email address',
      },
      phone: {
        required: 'Please enter your phone number',
        digits: 'Please enter digits',
      },
      meals: {
        required: 'This field is required',
      },
      dietaryRequirements: {
        required: 'This field is required',
      },

    },

    submitHandler: function(form) {
      review();
      return false;
    },
  });
});
