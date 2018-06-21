// var first_click;
// var second_click;
// $(document).ready(initialize);

// function initialize() {
//     assign_click_handler();
//     alert_on_desktop();
// }

// function alert_on_desktop() {
//     function check_if_mobile() {
//         if (navigator.userAgent.match(/Android/i)
//             || navigator.userAgent.match(/webOS/i)
//             || navigator.userAgent.match(/iPhone/i)
//             || navigator.userAgent.match(/iPad/i)
//             || navigator.userAgent.match(/iPod/i)
//             || navigator.userAgent.match(/BlackBerry/i)
//             || navigator.userAgent.match(/Windows Phone/i)
//         ) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     setInterval(function () {
//         if (!check_if_mobile()) {
//             alert('Sorry this application only works on mobile, please close this tab');
//         }
//     })
// }

// function assign_click_handler() {
//     $('.suit').on('click', find_value)
// }

// function find_value() {
//     if (second_click) {
//         return
//     }
//     if (first_click) {
//         second_click = $(this).attr("id");
//         render_card()
//     }
//     first_click = $(this).attr("id");
// }

// function render_card() {
//     var suit = null;
//     switch (second_click) {
//         case '2':
//         case '3':
//         case '4':
//             suit = "H";
//             break;
//         case '5':
//         case '6':
//         case '7':
//             suit = "S";
//             break;
//         case '8':
//         case '9':
//         case '0':
//             suit = "D";
//             break;
//         case 'J':
//         case 'Q':
//         case 'K':
//             suit = "C";
//             break;
//     }
//     var img = document.createElement("IMG");
//     img.src = "https://deckofcardsapi.com/static/img/" + first_click + suit + ".png";
//     $('.reveal').html(img);
//     $('.card').on('click', function () {
//         $('body').html('');
//     });
//     call_shake_api();

// }

// function call_shake_api() {
//     //listen to shake event
//     var shakeEvent = new Shake({ threshold: 15 });
//     shakeEvent.start();
//     window.addEventListener('shake', function () {
//         $(".back").addClass('hide');
//     }, false);
//     //stop listening
//     function stopShake() {
//         shakeEvent.stop();
//     }
// }




var card_val = $("#card_value");
var card_suite = $("#card_suite");
var card_front = $(".front");
var card_back = $(".back");



$(document).ready(initialize);

function initialize() {
    assign_click_handler();
}

function assign_click_handler() {
    $("button").on('click', function () {
        render_to_screen();
    });
    $(".card_back").on('click', function () {
        $(this).addClass("hide");
    });
}

function render_to_screen() {
    //var img = $("img");
    var img = document.createElement("IMG");
    var front = img;
    var back = img;
    front.src = "https://deckofcardsapi.com/static/img/" + $("#card_value").val() + $("#card_suite").val() + ".png";
    $(".card_front").html(front);
    $(".card_back").prepend('<img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1523371937" />')
    //back.src = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1523371937";
    // $(".card_back").html(back);
    // $('.card').on('click', function () {
    //     $('body').html('');
    // });
    call_shake_api();
}

function call_shake_api() {
    //listen to shake event
    var shakeEvent = new Shake({ threshold: 15 });
    shakeEvent.start();
    window.addEventListener('shake', function () {
        $(".card_back").addClass('hide');
    }, false);
    //stop listening
    function stopShake() {
        shakeEvent.stop();
    }
}



// function initialize() {
//     assign_click_handler();
//     alert_on_desktop();
// }
