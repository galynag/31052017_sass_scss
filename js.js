$(document).ready(function(){

    $('.activator').on('click', function(){
        $('.card-reveal').animate({
          "top":"0"
        },
            500);
    });
    $('.card-reveal').on('click', function(){
        $('.card-reveal').animate({
                "top":"100%"
            },
            500);

    })

});
