
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


// jQuery.noConflict();
// jQuery(document).ready(function ($) {

//     // Mouse Events
//     $("p").click(function () {
//         console.log("clicked");
//     });
//     $("p").dblclick(function () {
//         console.log("Double clicked");
//     });
//     $("p").mouseenter(function () {
//         console.log("Mouse enter");
//     });
//     $("p").mouseleave(function () {
//         console.log("Mouse Leave");
//     });

//     //keyboard events
//     $("#name").keypress(function () {
//         console.log("key pressed");
//     });
//     $("#name").keydown(function () {
//         console.log("key Down");
//     });
//     $("#name").keyup(function () {
//         console.log("key Up");
//     });

//     //form events
//     $("#fname").focus(function () {
//         console.log("Focus field");
//     });
//     $("#fname").blur(function () {
//         console.log("Blur field");
//     });
//     $("#form-id").submit(function (e) {
//         console.log("Form submitted.");
//         e.preventDefault();
//     });

//     //window event
//     $("window").resize(function () {
//         console.log("window resized.");
//     });
// });


jQuery.noConflict();
jQuery(document).ready(function ($) {
    //hide
    $("#btn-hide").click(function () {
        $("#image-id").hide(2000, function () {
            console.log("Image hidden.")
        })
        
    })

    //show
    $("#btn-show").click(function () {
        $("#image-id").show(2000, function () {
            console.log("Image shown.")
        })
        
    })

    //hide and show -toggle
    $("#btn-toggle").click(function () {
        $("#image-id").toggle(2000, function () {
            console.log("Toggle hide/show Image.")
        })
        
    })

    //fadeout
    $("#btn-fadeout").click(function () {
        $("#image-id").fadeOut(2000, function () {
            console.log("fadeout Image.")
        })
        
    })

    //fadein
    $("#btn-fadein").click(function () {
        $("#image-id").fadeIn(2000, function () {
            console.log("fadein Image.")
        })
        
    })

    //fadetoggle
    $("#btn-fadetoggle").click(function () {
        $("#image-id").fadeToggle(2000, function () {
            console.log("fadetoggle Image.")
        })
        
    })

    //fade to
    $("#btn-fadeto").click(function () {
        $("#image-id").fadeTo(2000, 0.5, function () {
            console.log("fade to Image.")
        })
        
    })

    //slide up
    $("#btn-slideup").click(function () {
        $("#image-id").slideUp(2000, function () {
            console.log("slide up Image.")
        })
        
    })

    //slide down
    $("#btn-slidedown").click(function () {
        $("#image-id").slideDown(2000, function () {
            console.log("slide down Image.")
        })
        
    })

    //slide toggle
    $("#btn-slidetoggle").click(function () {
        $("#image-id").slideToggle(2000, function () {
            console.log("slide toggle Image.")
        })
        
    })

    //animate - perform a custom animation of a set of CSS properties
    $("#btn-animate").click(function () {
        $("#avif-id").animate({left:"+=80"}, 2000, function () {
            console.log("Animated Image.")
        })
        
    })

    // get text
    let textdata = $("p").text();
    console.log(textdata)

    // set text
    $("#btn-settext").click(function () {
        $("p").text("This is new text.");
    })

    // get HTML
    let htmldata = $("p").html();
    console.log(htmldata)

    // set HTML
    $("#btn-setHTML").click(function () {
        let newhtmldata = "<b>This is new html</b>";
        $("p").html(newhtmldata)
    })

    //get Value
    let inputValue = $("#name").val()
    console.log(inputValue);

    //set value
    $("#btn-setvalue").click(function () {
        let newsetvalue = "This is new set value";
        $("#name").val(newsetvalue)
    })
});