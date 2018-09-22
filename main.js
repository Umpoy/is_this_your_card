var count = 0;
var on_mobile = false;

$(document).ready(initialize);

function initialize() {
    assign_click_handler();
    call_first_card_image();
    resize_card();
    $("div").on('click', function () {
        console.log(this);
    })
    alert_on_desktop();
}

function alert_on_desktop() {
    function check_if_mobile() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }
    on_mobile = true;
    setInterval(function () {
        if (!check_if_mobile()) {
            alert('Sorry this application is ment for mobile only, please close this tab');
        }
    }, 1);
}

function assign_click_handler() {
    if (!on_mobile) {
        $(".card_back").on("click", function () {
            $(".card_back").addClass('hide');
        })
    }
    first_click = $(this).attr("id");
    console.log("first click: ", first_click);
    console.log("second click: ", second_click)

}

function render_to_screen() {
    var img = document.createElement("IMG");
    var front = img;
    var back = img;
    front.src = "https://deckofcardsapi.com/static/img/" + $("#card_value").val() + $("#card_suite").val() + ".png";
    $(".card_front").html(front);
    $(".card_back").prepend('<img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1523371937" />');
    $(".card_front").on("click", () => {
        setTimeout(() => {
            $(".card_front").addClass("hide");
        }, 2000);;
    })
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

function call_first_card_image() {
    const card_value_array = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"]
    const card_suits_array = ["H", "D", "S", "C"];
    var img = document.createElement("IMG");
    img.src = "https://deckofcardsapi.com/static/img/" + card_value_array[Math.floor(Math.random() * card_value_array.length)] + card_suits_array[Math.floor(Math.random() * card_suits_array.length)] + ".png";
    $('.front').html(img);
}

function new_card() {
    first_click = null;
    second_click = null;
    call_first_card_image();
    $('.front').removeClass('hide');
}

function resize_card() {
    $(".front").css({
        "width": $('.card').width(),
        "height": $('.card').height()
    });
    $(".back").css({
        "width": $('.card').width(),
        "height": $('.card').height()
    });
    $(".card img").css({
        "width": $('.card').width(),
        "height": $('.card').height()
    })

}

