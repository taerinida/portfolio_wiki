$('.wrap .menu').on('click', function(){
    $('.subpage').show(500)
    $('').css('filter', 'blur(30px)')
})
$('.subpage .right').on('click', function(){
    $('.subpage').hide(500)
    $('').css('filter', 'blur(0)')
})
$('.p2_best1 .p2_left .p2_left1').on('click', function(){
    $('.p2_center').hide();
    $('.p2_best1 .p2_center').fadeIn(500).css('display', 'flex')
    $('.p2_left1 a').css('backgroundColor', '#4B5F93')
    $('.p2_left1 a').css('padding', '5px')
    $('.p2_left1 a').css('borderRadius', '10px')
    $('.p2_left1 a').css('color', '#ffffff')

    $('.p2_left2 a').css('backgroundColor', 'transparent')
    $('.p2_left2 a').css('padding', '0')
    $('.p2_left2 a').css('borderRadius', '0')
    $('.p2_left2 a').css('color', '#000000')
    $('.p2_left3 a').css('backgroundColor', 'transparent')
    $('.p2_left3 a').css('padding', '0')
    $('.p2_left3 a').css('borderRadius', '0')
    $('.p2_left3 a').css('color', '#000000')
     return false;
})
$('.p2_best1 .p2_left .p2_left2').on('click', function(){
    $('.p2_center').hide();
    $('.p2_best2 .p2_center').fadeIn(500).css('display', 'flex')
    $('.p2_left2 a').css('backgroundColor', '#4B5F93')
    $('.p2_left2 a').css('padding', '5px')
    $('.p2_left2 a').css('borderRadius', '10px')
    $('.p2_left2 a').css('color', '#ffffff')

    $('.p2_left3 a').css('backgroundColor', 'transparent')
    $('.p2_left3 a').css('padding', '0')
    $('.p2_left3 a').css('borderRadius', '0')
    $('.p2_left3 a').css('color', '#000000')
    $('.p2_left1 a').css('backgroundColor', 'transparent')
    $('.p2_left1 a').css('padding', '0')
    $('.p2_left1 a').css('borderRadius', '0')
    $('.p2_left1 a').css('color', '#000000')
     return false;
})
$('.p2_best1 .p2_left .p2_left3').on('click', function(){
    $('.p2_center').hide();
    $('.p2_best3 .p2_center').fadeIn(500).css('display', 'flex')
    $('.p2_left3 a').css('backgroundColor', '#4B5F93')
    $('.p2_left3 a').css('padding', '5px')
    $('.p2_left3 a').css('borderRadius', '10px')
    $('.p2_left3 a').css('color', '#ffffff')

    $('.p2_left1 a').css('backgroundColor', 'transparent')
    $('.p2_left1 a').css('padding', '0')
    $('.p2_left1 a').css('borderRadius', '0')
    $('.p2_left1 a').css('color', '#000000')
    $('.p2_left2 a').css('backgroundColor', 'transparent')
    $('.p2_left2 a').css('padding', '0')
    $('.p2_left2 a').css('borderRadius', '0')
    $('.p2_left2 a').css('color', '#000000')
     return false;
})
$('.slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
            }
        },
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
            }
        },
    ]
});

$( function() {
var dateFormat = "mm/dd/yy",
from = $( "#from" )
.datepicker({
  defaultDate: "+1w",
  changeMonth: true,
  numberOfMonths: 3
})
.on( "change", function() {
  to.datepicker( "option", "minDate", getDate( this ) );
}),
to = $( "#to" ).datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 3
})
.on( "change", function() {
from.datepicker( "option", "maxDate", getDate( this ) );
});

function getDate( element ) {
var date;
try {
date = $.datepicker.parseDate( dateFormat, element.value );
} catch( error ) {
date = null;
}

return date;
}
} );