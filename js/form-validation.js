$(document).ready(function () {

    $('#myForm').validate({ // initialize the plugin
        rules: {
            date1: {
                required: true,
            },
            date2: {
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
            date1: {
                required: "Please pick a date",
            },

            date2: {
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

        submitHandler: function (form) { // for demo
             toggleResults();
            return false; 
        }
    });

});

