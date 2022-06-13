$(document).ready(function () {

    $('#myForm').validate({ 
        rules: {
            datetimes: {
                required: true,
            },
            guests: {
                required: true,
                min: 1
            },
            rooms: {
                required: true,
                min: 1
            }
        },

        messages: {
            datetimes: {
                required: "Please pick a date",
            },
            guests: {
                required: "This field is required",
                min: "A number greater than 0 is required"
            },
            rooms: {
                required: "This field is required",
                min: "A number greater than 0 is required"
            }

        },

        submitHandler: function (form) { 
             toggleResults();
            return false; 
        }
    });

});

