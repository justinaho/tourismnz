$(document).ready(function () {


    $('#searchForm').validate({

        rules: {
            city: {
                required: true,
            },

            datetimes: {
                required: true,
            },
            guests: {
                required: true,
                min: 1,
                digits: true,
            },
            rooms: {
                required: true,
                min: 1,
                digits: true,
            }
        },

        messages: {

            city: {
                required: "Please select a city"
            },

            datetimes: {
                required: "Please pick a date and time",
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


    $('#bookingForm').validate({

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
            // phone: {
            //     required: true,
            //     minLength: 2,
            //     maxLength: 5,
            // },
        },

        messages: {

            firstname: {
                required: "Please enter your first name",
            },

            lastname: {
                required: "Please enter your last name",
            },
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email address"
            },
            // phone: {
            //     required: "This field is required",
            //     minLength: "A mobile digit number is required"
            // }

        },

        submitHandler: function (form) {
            reviewBooking();
            return false;
        }
    });




    // $('#bookingForm').validate({
    //     rules: {
    //         firstname: {
    //             required: true,
    //         },

    //         lastname: {
    //             required: true,
    //         },
    //         email: {
    //             required: true,
    //             email: true,

    //         },
    //         phone: {
    //             required: true,
    //             minLength: 9,
    //             digits: true,
    //         },
    //     },

    //     messages: {

    //         fname: {
    //             required: "Please enter your first name",
    //         },

    //         lname: {
    //             required: "Please enter your last name",
    //         },
    //         email: {
    //             required: "Please enter an email address",
    //             email: "Please enter a valid email address"
    //         },
    //         phone: {
    //             required: "This field is required",
    //             minLength: "A mobile digit number is required"
    //         }

    //     },

    //     submitHandler: function () {
    //         reviewBooking();
    //         return false;
    //     }
    // });

});