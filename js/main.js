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
$(document).ready(function() {
    $("#country-selection").hide();
    $("#domestic-options").hide();
    $("#overseas-options").hide();
    $("#toggle-domestic").click(function() {
        $("#overseas-options").hide();
        $("#domestic-options").show();
        $("#country-selection").css({ 
            display: "block", 
            top: $(this).position().top + $(this).outerHeight(),
            left: $(this).position().left
        }).slideDown();
        $("#toggle-domestic").addClass("active");
        $("#toggle-overseas").removeClass("active");
    });
    $("#toggle-overseas").click(function() {
        $("#domestic-options").hide();
        $("#overseas-options").show();
        $("#country-selection").css({ 
            display: "block", 
            top: $(this).position().top + $(this).outerHeight(),
            left: $(this).position().left
        }).slideDown();
        $("#toggle-overseas").addClass("active");
        $("#toggle-domestic").removeClass("active");
    });
    $(".select-country").click(function() {
        if (!$(this).hasClass("has-sub")) {  
            $("#selected-country").val($(this).text());
            $("#country-selection").slideUp();
        }
    });
    $(".sub-menu li").click(function(event) {
        event.stopPropagation();
        $("#selected-country").val($(this).text());
        $("#country-selection").slideUp();
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.search-container').length) {
            $("#country-selection").slideUp();
        }
    });
    $(".has-sub").hover(
        function() {
            $(this).find(".sub-menu").stop(true, true).fadeIn(200);
        },
        function() {
            $(this).find(".sub-menu").stop(true, true).fadeOut(200);
        }
    );
    flatpickr(".startDate, .endDate", {
        dateFormat: "Y-m-d",
        locale: "ko"
    });
    $(".guide1").click(function() {
        let startDate = $(".startDate").val();
        let endDate = $(".endDate").val();
        let destination = $("#selected-country").val();

        if (startDate && endDate && destination) {
            $(".guide_full").html(
                `<p>출발: ${startDate}</p>
                 <p>도착: ${endDate}</p>
                 <p>여행지: ${destination}</p>
                 <p>항공편 확인:</p>
                 <p>추천숙소:</p>`
            );
        } else {
            alert("출발 날짜, 도착 날짜, 여행지를 모두 선택하세요!");
        }
    });
});