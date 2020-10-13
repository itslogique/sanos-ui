$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".headerlink").slideToggle();
    });
    
    $(".select li a").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
    });
});