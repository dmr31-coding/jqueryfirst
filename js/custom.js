
// console.log($);
// console.log(jQuery);

// jQuery("button").click(function () {
//     console.log("Button clicked.");
// })


// $("button").click(function () {
//     console.log("Button clicked.");
// })


// jQuery(document).ready(function () {
//     jQuery("button").click(function () {
//         console.log("Button clicked.");
// })
// })

// $(document).ready(function () {
//     $("button").click(function () {
//         console.log("Button clicked.");
// })
// })


// $.noConflict();
// jQuery(document).ready(function () {
//     jQuery("button").click(function () {
//         console.log("Button clicked.");
// })
// })


// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//     $("button").click(function () {
//         console.log("Button clicked.");
// })
// })

// jQuery.noConflict();
// jQuery(document).ready(function ($) {
//     $("p").click(function () {
//         alert("Element Selector");
//     });
//     $("#btn-id").click(function () {
//         alert("ID Selector");
//     });
//     $(".btn-class").click(function () {
//         alert("Class Selector");
//     });
// })


jQuery.noConflict();
jQuery(document).ready(function ($) {

    // Mouse Events
    $("p").click(function () {
        console.log("clicked");
    });
    $("p").dblclick(function () {
        console.log("Double clicked");
    });
    $("p").mouseenter(function () {
        console.log("Mouse enter");
    });
    $("p").mouseleave(function () {
        console.log("Mouse Leave");
    });

    //keyboard events
    $("#name").keypress(function () {
        console.log("key pressed");
    });
    $("#name").keydown(function () {
        console.log("key Down");
    });
    $("#name").keyup(function () {
        console.log("key Up");
    });

    //form events
    $("#fname").focus(function () {
        console.log("Focus field");
    });
    $("#fname").blur(function () {
        console.log("Blur field");
    });
    $("#form-id").submit(function (e) {
        console.log("Form submitted.");
        e.preventDefault();
    });

    //window event
    $("window").resize(function () {
        console.log("window resized.");
    });
});