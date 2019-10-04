$(function(){
    var currentBackgound = 0;
    var backgrounds = ["../Images/background.png","../Images/backgroud2.png","../Images/background3.png"];
    $("#header").css({backgroundImage:"url("+backgrounds[0]+")"});
    setInterval(function(){
        currentBackgound++;
        if(currentBackgound>2) currentBackgound = 0;
        $("#header").fadeOut(1000, function(){
            $("#header").css({backgroundImage:"url("+backgrounds[currentBackgound]+")", backgroundColor: "black"});
            $("#header").fadeIn(1000);
        });
    },10000);
});
