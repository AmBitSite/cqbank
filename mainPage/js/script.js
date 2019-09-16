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
        $(".nav-btn__line:nth-child(1)").addClass("nav-btn__line-1st")
        $(".nav-btn__line:nth-child(2)").addClass("nav-btn__line-2st")
        $(".nav-btn__line:nth-child(3)").addClass("hide")
    }
    else if($(".nav").hasClass("changeHeight")){
        $(".nav").removeClass("changeHeight")
        $(".nav-block").removeClass("changeHeight")
        $(".nav-wrapp").fadeToggle()
        $(".nav-btn__line:nth-child(1)").removeClass("nav-btn__line-1st")
        $(".nav-btn__line:nth-child(2)").removeClass("nav-btn__line-2st")
        $(".nav-btn__line:nth-child(3)").removeClass("hide")
    }  
})
let test = document.querySelector("hide-menu__id");
let parent = document.querySelector("hide-menu-block")
let test2 = document.querySelector("hide-menu__pass")
let mainParent = document.querySelector("hide-menu")
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