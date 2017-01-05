$("#content-video").resizable();
$('#content-video').resize(function(){
   $('#content-page').width($("#content").width()-$("#content-video").width()); 
});
$(window).resize(function(){
   $('#content-page').width($("#content").width()-$("#content-video").width()); 
   $('#content-video').height($("#content").height()); 
});

function resize() { 
    var box = document.getElementById('divTest');
    if (document.body) {
        var larg = (document.body.clientWidth);
        var haut = (document.body.clientHeight);
    } else { 
        var larg = (window.innerWidth);
        var haut = (window.innerHeight);
    } 
    box.style.width = Math.ceil(larg/10) +'px';
    box.style.height = Math.ceil(haut/10) +'px';
    document.getElementById('divTest').innerHTML=box.style.width+ " x "+box.style.height;
    } 