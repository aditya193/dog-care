(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery


// registeration
$(document).ready(function () {
    $('#loginModal').modal('show');
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
// registeration


// contact form
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function closeForm() {
    document.contactform.name.value = '';
    document.contactform.email.value = '';
    document.contactform.message.value = '';

    $('.email').removeClass('typing');
    $('.name').removeClass('typing');
    $('.message').removeClass('typing');

    $('.cd-popup').removeClass('is-visible');
    $('.notification').addClass('is-visible');
    $('#notification-text').html("Thanks for contacting us!");
}

$(document).ready(function ($) {

    /* ------------------------- */
    /* Contact Form Interactions */
    /* ------------------------- */
    $('#contact').on('click', function (event) {
        event.preventDefault();

        $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
        $('.contact').addClass('is-visible');

        if ($('#name').val().length != 0) {
            $('.name').addClass('typing');
        }
        if ($('#email').val().length != 0) {
            $('.email').addClass('typing');
        }
        if ($('#message').val().length != 0) {
            $('.message').addClass('typing');
        }
    });

    //close popup when clicking x or off popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });

    /* ------------------- */
    /* Contact Form Labels */
    /* ------------------- */
    $('#name').keyup(function () {
        $('.name').addClass('typing');
        if ($(this).val().length == 0) {
            $('.name').removeClass('typing');
        }
    });
    $('#email').keyup(function () {
        $('.email').addClass('typing');
        if ($(this).val().length == 0) {
            $('.email').removeClass('typing');
        }
    });
    $('#message').keyup(function () {
        $('.message').addClass('typing');
        if ($(this).val().length == 0) {
            $('.message').removeClass('typing');
        }
    });

    /* ----------------- */
    /* Handle submission */
    /* ----------------- */
    $('#contactform').submit(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var human = $('#human:checked').val();

        if (human) {
            if (validateEmail(email)) {
                if (name) {
                    if (message) {

                        closeForm();

                    } else {
                        $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
                        $('.notification').addClass('is-visible');
                    }
                } else {
                    $('#notification-text').html('<strong>Please provide a name.</strong>');
                    $('.notification').addClass('is-visible');
                }
            } else {
                $('#notification-text').html('<strong>Please use a valid email address.</strong>');
                $('.notification').addClass('is-visible');
            }
        } else {
            $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
            $('.notification').addClass('is-visible');
        }

        return false;
    });
});

// contact form
