$(function(){
    $("#dismiss, .overlay").on("click", function(){
        //removes active class to make sidebar disappear
        $("#sidebar").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $("#sidebarCollapse").on("click", function(){
       //adds active class to make sidebar reappear
        $("#sidebar").addClass("active");
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
      
    });
});