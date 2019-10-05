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
       // $(".collapse.in").toggleClass("in");
       // $("a[aria-expanded=true]").attr("aria-expanded", "false");
      
    });
    $(".dropdown-toggle").click(function(){
        $(".toggle").toggleClass("opensub", 1000,"closesub");
        $(".toggle.opensub").toggleClass("closesub",1000, "opensub");
    });
});
