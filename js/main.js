$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});


$(".rslides_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function(){
    setTimeout(() => {
        $(".introducao h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(() => {
        $(".introducao blockquote").addClass("animated fadeInDown");
    }, 800);
    setTimeout(() => {
        $(".introducao .btn").addClass("animated fadeInDown");
    }, 1200);
    setTimeout(() => {
        $(".animar-home").addClass("animated fadeInDown");
    }, 1600);
    setTimeout(() => {
        $(".animar").addClass("animated fadeInDown");
    }, 400);

    setTimeout(() => {
        $(".introducao-interna h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(() => {
        $(".introducao-interna p").addClass("animated fadeInDown");
    }, 800);
    
})