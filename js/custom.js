
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
    $("p").click(function () {
        alert("Element Selector");
    });
    $("#btn-id").click(function () {
        alert("ID Selector");
    });
    $(".btn-class").click(function () {
        alert("Class Selector");
    });
})