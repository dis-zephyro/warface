$(".popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});


(function($) {
    $(function() {

        $('.select').styler();

    });
})(jQuery);


/* Поле отправки файла */

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}


$(function(){
    $('.personag a').click(function(e){
        e.preventDefault();
        $('.personag a').css({
            "border": "none",
            "z-index": $(this).css,
            "position": "absolute"
        });
        $('a.shturm').css({"z-index":"2", "border": "1px solid #050504"});
        $('a.killer').css({"z-index":"3", "border": "1px solid #050504" });
        $('.ingener').css({"z-index":"4", "border": "1px solid #050504" });
        $('a.medic').css({"z-index":"1", "border": "1px solid #050504" });

        $(this).css({
            "border": "6px #f08441 solid",
            "position": "absolute",
            //"margin": "20px 0 0 543px",
            "-webkit-border-radius": "5px",
            "-moz-border-radius":"5px",
            "z-index":"5"
        });
    });
});