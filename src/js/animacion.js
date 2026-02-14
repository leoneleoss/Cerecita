$(document).ready(function () {

    let abierto = false;

    function toggleCarta(){
        if(!abierto){
            $('.card').stop().animate({ top: '-90px' }, 500);
            abierto = true;
        }else{
            $('.card').stop().animate({ top: '0px' }, 500);
            abierto = false;
        }
    }

    // PC (mouse)
    $('.valentines').on('mouseenter', function(){
        $('.card').stop().animate({ top: '-90px' }, 500);
    });

    $('.valentines').on('mouseleave', function(){
        $('.card').stop().animate({ top: '0px' }, 500);
    });

    // CELULAR (TOUCH)
    $('.valentines').on('touchstart click', function(e){
        e.preventDefault();
        toggleCarta();
    });

});