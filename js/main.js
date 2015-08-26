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


jQuery("#slider").slider({
    min: 10,
    max: 50,
    values: [10,50],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minAge").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxAge").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
        jQuery("input#minAge").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxAge").val(jQuery("#slider").slider("values",1));
    }
});


jQuery("input#minAge").change(function(){
    var value1=jQuery("input#minAge").val();
    var value2=jQuery("input#maxAge").val();

    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input#minAge").val(value1);
    }
    jQuery("#slider").slider("values",0,value1);
});


jQuery("input#maxAge").change(function(){
    var value1=jQuery("input#minAge").val();
    var value2=jQuery("input#maxAge").val();

    if (value2 > 1000) { value2 = 1000; jQuery("input#maxAge").val(1000)}

    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input#maxAge").val(value2);
    }
    jQuery("#slider").slider("values",1,value2);
});


// Закрыть чат



$( ".partners-message" ).click(function(e){
    e.preventDefault();
    $( '.chat' ).show();
});

$( ".chat-close" ).click(function(e){
    e.preventDefault();
    $( '.chat' ).hide();
});

