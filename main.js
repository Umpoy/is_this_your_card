var count = 0;

$(document).ready(initialize);

function initialize() {
    assign_click_handler();
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

    setInterval(function () {
        if (!check_if_mobile()) {
            alert('Sorry this application only works on mobile, please close this tab');
        }
    }, 1);
}

function assign_click_handler() {
    $("button").on('click', function () {
        $(".hide").removeClass("hide");
        $(".pop_up").addClass("hide");
        render_to_screen();
    });
    $(".card_back").on("click", function () {
        $(".card_back").addClass('hide');
    })
    // $(".card_front").on("click", function () {
    //     count++;
    //     if (count == 5) {
    //         $(".pop_up").removeClass("hide");
    //         count = 0;
    //     }
    //     setTimeout(function () {
    //         count = 0;
    //     }, 10000)
    // })
}

function render_to_screen() {
    var img = document.createElement("IMG");
    var front = img;
    var back = img;
    front.src = "https://deckofcardsapi.com/static/img/" + $("#card_value").val() + $("#card_suite").val() + ".png";
    $(".card_front").html(front);
    $(".card_back").prepend('<img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1523371937" />');
    $(".card_front").on("click", function () {
        clear_screen();
    })
    call_shake_api();
}

function clear_screen() {
    $(".card_back").addClass('hide');
    $(".card_front").html("");
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
