$(document).ready(function(){
    $("#burgerMenu").click(function(){
        $("#menu").toggleclass("open");
    });
    $(".tabs span").click(function(){
        $(".tabs div").hide();
        $(".tabs div." + $(this).attr("id")).show();
    });
});