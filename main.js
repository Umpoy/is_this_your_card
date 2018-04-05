var first_click;
var second_click;
$(document).ready(initialize);

function initialize() {
    assign_click_handler();
}

function assign_click_handler() {
    $('.suit').on('click', find_value)
}

function find_value() {
    if (second_click) {
        return
    }
    if (first_click) {
        second_click = $(this).attr("id");
        render_card()
    }
    first_click = $(this).attr("id");
}

function render_card() {
    var suit = null;
    switch (second_click) {
        case '2':
        case '3':
        case '4':
            suit = "H";
            break;
        case '5':
        case '6':
        case '7':
            suit = "S";
            break;
        case '8':
        case '9':
        case '0':
            suit = "D";
            break;
        case 'J':
        case 'Q':
        case 'K':
            suit = "C";
            break;
    }
    var img = document.createElement("IMG");
    img.src = "https://deckofcardsapi.com/static/img/" + first_click + suit + ".png";
    $('.reveal').html(img);
    call_shake_api()
}

function call_shake_api() {
    //listen to shake event
    var shakeEvent = new Shake({ threshold: 15 });
    shakeEvent.start();
    window.addEventListener('shake', function () {
        $(".back").addClass('hide');
    }, false);
    //stop listening
    function stopShake() {
        shakeEvent.stop();
    }
}