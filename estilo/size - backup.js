$(document).ready(function () {
    $(".a, .b, .logo, #ea, #eb, #ec, header, footer, img").css("-webkit-user-select", "none").css("-moz-user-select", "none").css("-ms-user-select", "none").css("-o-user-select", "none").css("user-select", "none");
    $("img").bind("contextmenu", function () {
        return false;
    }).mousedown(function () {
        return false
    });
    $('#btn-menu').click(function () {
        if ($(this).is(":checked")) {
            aniin();
        } else {
            aniout();
        }
    });

    $('#ea').on('click', function () {
        var parent_box = $(this).closest("#principal");
        parent_box.siblings().find('#tab').hide();
        parent_box.find('#tab').toggle();
    });

    $('#eb').on('click', function () {
        var parent_box = $(this).closest("#principal");
        parent_box.siblings().find('#tab1').hide();
        parent_box.find('#tab1').toggle();
    });

    $('#ec').on('click', function () {
        var parent_box = $(this).closest("#principal");
        parent_box.siblings().find('#tab2').hide();
        parent_box.find('#tab2').toggle();
    });

});


function colorMenu() {
    var valor = document.body.scrollTop;
    var tamanho = document.getElementById("tamanho").scrollHeight;
    var cor = document.getElementById("header").style.backgroundColor;
    $('.logo').parent().css('z-index', '');

    if (window.innerWidth <= 600) {
        if (valor <= tamanho && cor != "#eee") {
            if (!($("#btn-menu").is(":checked")))
                document.getElementById("header").style.backgroundColor = "#eee";
            $('.a').css({
                "visibility": "visible"
            });
        } else {
            if (!($("#btn-menu").is(":checked")))
                document.getElementById("header").style.backgroundColor = "";
            $('.a').css({
                "visibility": "hidden"
            });
        }
        $('.logo').css({
            "visibility": "visible"
        });
        $(".selected").css("background-color", 'rgba(15, 15, 15, 0.9);');
    } else {
        if ($("#btn-menu").is(":checked"))
            $("#btn-menu").attr('checked', false);
        if (valor < tamanho - 39) {
            document.getElementById("header").style.backgroundColor = "";
            $('.logo').css({
                "visibility": "visible"
            });
            $('.a').css({
                "visibility": "visible"
            });
            $('.logo').parent().css('z-index', 0);
        } else {
            document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.8)";
            $('.logo').css({
                "visibility": "hidden"
            });
            $('.a').css({
                "visibility": "hidden"
            });
        }
        $(".selected").css("background-color", 'rgba(0, 0, 0, 0.2)');
    }
    var img = document.getElementById('tamanhoimg').height - 5;
    $("#tamanho").height(img).css();
}

function aniin() {
    $("header").animate({
        backgroundColor: "#ddd"
    });
}

function aniout() {
    var valor = document.body.scrollTop;
    var tamanho = document.getElementById("tamanho").scrollHeight;
    if (valor <= tamanho && window.innerWidth <= 600) {
        $("header").animate({
            backgroundColor: "#eee"
        });
    } else {
        $("header").animate({
            backgroundColor: "rgba(0,0,0,0.4)"
        });
    }
}

window.onload = colorMenu;
window.onresize = colorMenu;
window.onscroll = colorMenu;