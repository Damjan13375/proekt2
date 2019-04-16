$(function () {
    function imageChange() {
        $(".bgimg").css("background-image", "url('img/marketing.jpg')");

    }
    $("#logo2").css("display", "none");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            $("#nav1").css("background", "white");
            $(".upperCase").css("color", "black");
            $("#link4").css("color", "white");
            $("#logo2").css("display", "block");
            $("#logo1").css("display", "none");


        } else {
            $("#nav1").css("background", "transparent");
            $(".upperCase").css("color", "white");
            $("#logo2").css("display", "none");




        }
        if (scroll < 20) {
            $("#logo1").css("display", "block");

        }
    });
    $(".heading1").fadeIn(500, function () {
        $(".fade1").fadeIn(500, function () {
            $(".fade2").fadeIn(500);
        });
    });
    setInterval(imageChange, 5000);
    function checkDate() {
        //new york
        let currentDateNY = new Date();
        var hourDegreeNY = ((currentDateNY.getHours() - 6) + currentDateNY.getMinutes() / 60) / 12 * 360;
        var minuteDegreeNY = currentDateNY.getMinutes() / 60 * 360;
        $('.nyH').css({ transform: 'rotate(' + hourDegreeNY + 'deg)' });
        $('.nyM').css({ transform: 'rotate(' + minuteDegreeNY + 'deg)' });

        //london
        let currentDateLon = new Date();
        var hourDegreeLon = ((currentDateLon.getHours() - 1) + currentDateLon.getMinutes() / 60) / 12 * 360;
        var minuteDegreeLon = currentDateLon.getMinutes() / 60 * 360;
        $('.lH').css({ transform: 'rotate(' + hourDegreeLon + 'deg)' });
        $('.lM').css({ transform: 'rotate(' + minuteDegreeLon + 'deg)' });
        //toronto
        let currentDateTor = new Date();
        var hourDegreeTor = ((currentDateTor.getHours() - 6) + currentDateTor.getMinutes() / 60) / 12 * 360;
        var minuteDegreeTor = currentDateTor.getMinutes() / 60 * 360;
        $('.tH').css({ transform: 'rotate(' + hourDegreeTor + 'deg)' });
        $('.tM').css({ transform: 'rotate(' + minuteDegreeTor + 'deg)' });
        //hong kong
        let currentDateHK = new Date();
        var hourDegreeHK = ((currentDateHK.getHours() + 6) + currentDateHK.getMinutes() / 60) / 12 * 360;
        var minuteDegreeHK = currentDateHK.getMinutes() / 60 * 360;
        $('.hkH').css({ transform: 'rotate(' + hourDegreeHK + 'deg)' });
        $('.hkM').css({ transform: 'rotate(' + minuteDegreeHK + 'deg)' });
        //bucharest
        let currentDateB = new Date();
        var hourDegreeB = ((currentDateB.getHours() + 1) + currentDateB.getMinutes() / 60) / 12 * 360;
        var minuteDegreeB = currentDateB.getMinutes() / 60 * 360;
        $('.bH').css({ transform: 'rotate(' + hourDegreeB + 'deg)' });
        $('.bM').css({ transform: 'rotate(' + minuteDegreeB + 'deg)' });

        //warsaw
        let currentDateW = new Date();
        var hourDegreeW = (currentDateW.getHours() + currentDateW.getMinutes() / 60) / 12 * 360;
        var minuteDegreeW = currentDateW.getMinutes() / 60 * 360;
        $('.wH').css({ transform: 'rotate(' + hourDegreeW + 'deg)' });
        $('.wM').css({ transform: 'rotate(' + minuteDegreeW + 'deg)' });

    }
    $(".rightB").hover(function () {

        $(this).css({
            backgroundImage: "url('img/sitedesign.jpg')",
            backgroundSize: "cover"
        });
    });

    checkDate();
    setInterval(checkDate, 1000);
});