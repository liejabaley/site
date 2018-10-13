menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $('.gallery').slick({
        centerMode: true,
        centerPadding: '20px',
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '30px',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
    },

            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    autoplay: true,
                    autoplaySpeed: 4000,
                    slidesToShow: 1
                }
    }
  ]
    });
});
