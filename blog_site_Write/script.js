$('.sub-title1').hover(
    function(){
        $(this).find('.sub-title1-1').addClass('text-active');
    },
    function(){
        $(this).find('.sub-title1-1').removeClass('text-active');
    }
);
// $('.sub-title1').hover(
//     function(){
//         $(this).find('.sub-title1-1').show();
//     },
//     function(){
//         $(this).find('.sub-title1-1').hide();
//     }
// );