function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(window).load(function() {
    $(".loader").fadeOut(2000);
    $('.hero').click();
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myTopnav").style.top = "0";
    } else {
        document.getElementById("myTopnav").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}


$(document).ready(function() {
    //var altoVentana = $('#Ventana').css('height').replace("px","");//usa este para que desaparezca despues de pasar el alto del div
    var altoVentana = 0;
    var Istructor = document.getElementById("Instructor").offsetTop;
    var Card = document.getElementById("Card").offsetTop;
    var Curso = document.getElementById("Curso").offsetTop;
    var Curso1 = document.getElementById("Curso1").offsetTop;
    var Curso2 = document.getElementById("Curso2").offsetTop;
    var Curso3 = document.getElementById("Curso3").offsetTop;

    $(window).scroll(function(event) {
        var posicionScroll = $(this).scrollTop();
        if (posicionScroll > (parseInt(Istructor) + parseInt(altoVentana))) {

            document.getElementById("RedesSociales").style.opacity = "1"
            document.getElementById("Cooreo").style.opacity = "1"
        }
        if (posicionScroll > (parseInt(Card) + parseInt(altoVentana))) {
            document.getElementById("RedesSociales").style.opacity = "0.8"
            document.getElementById("Cooreo").style.opacity = "0.8"
        }
        if (posicionScroll > (parseInt(Curso) + parseInt(altoVentana))) {
            document.getElementById("RedesSociales").style.opacity = "0.6"
            document.getElementById("Cooreo").style.opacity = "0.6"
        }

        if (posicionScroll > (parseInt(Curso1) + parseInt(altoVentana))) {
            document.getElementById("RedesSociales").style.opacity = "0.3"
            document.getElementById("Cooreo").style.opacity = "0.3"
        }

        if (posicionScroll > (parseInt(Curso2) + parseInt(altoVentana))) {
            document.getElementById("RedesSociales").style.opacity = "0.1"
            document.getElementById("Cooreo").style.opacity = "0.1"
        }

        if (posicionScroll > (parseInt(Curso3) + parseInt(altoVentana))) {
            document.getElementById("RedesSociales").style.opacity = "0.0"
            document.getElementById("Cooreo").style.opacity = "0.0"
        }



    });
});


var imagenes = new Array(
    ['assets/bx-code-alt.svg'], ['assets/bxl-c-plus-plus.svg'], ['assets/bxl-html5.svg']
);

var contador = 0;

function RotarImagenes() {
    contador++;
    document.getElementById("cambioImg").src = imagenes[contador % imagenes.length][0];

}

onload = function() {
    RotarImagenes();
    // Indicamos que cada  segundo cambie la imagen
    setInterval(RotarImagenes, 4000);
}