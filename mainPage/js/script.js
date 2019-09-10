$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('nav_scroll');
        $(".toTop").fadeIn();   
    } else {
        $('nav').removeClass('nav_scroll');
        $('.toTop').fadeOut();
    }
});

$('.toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});
$(".online-bank__btn").click(function(){
    $(".hide-menu").fadeIn()
})
$(".hide-menu-close").click(function(){
    $(".hide-menu").fadeOut()
})
$(".nav-btn").click(function(){
    if(!$(".nav").hasClass("changeHeight")){
        $(".nav").addClass("changeHeight")
        $(".nav-block").addClass("changeHeight")
        $(".nav-wrapp").fadeToggle()
    }
    else if($(".nav").hasClass("changeHeight")){
        $(".nav").removeClass("changeHeight")
        $(".nav-block").removeClass("changeHeight")
        $(".nav-wrapp").fadeToggle()
    }  
})

let test = document.querySelector(".hide-menu__id");
let parent = document.querySelector(".hide-menu-block")
let test2 = document.querySelector(".hide-menu__pass")
let mainParent = document.querySelector(".hide-menu")
mainParent.addEventListener("click", (e)=>{
    let x = e.target;
    if (x == test){
        test.value = ""
        if(test2.value =="")test2.value = "Password:"
    }
    else if(x == test2){
        test2.value = ""
        if(test.value =="")test.value = "Client ID:"
    }
    else if(x == mainParent){
        e.stopImmediatePropagation();
        if(test.value == "")test.value = "Client ID:"
        else if(test2.value == "")test2.value = "Password:"
    }
})

