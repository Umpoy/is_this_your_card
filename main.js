$(document).ready(initialize);

function initialize() {
    assign_click_handler();
}

function assign_click_handler() {
    $("button").on('click', function () {
        $(".pop_up").addClass("hide");
        render_to_screen();
    });
}

function render_to_screen() {
    var img = document.createElement("IMG");
    var front = img;
    var back = img;
    front.src = "https://deckofcardsapi.com/static/img/" + $("#card_value").val() + $("#card_suite").val() + ".png";
    $(".card_front").html(front);
    $(".card_back").prepend('<img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1523371937" />')
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
