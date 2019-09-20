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
let urlAnchor = window.location.hash
    if (urlAnchor !== undefined){
        let arrUrlAnchor = urlAnchor.split('#')
        if(document.getElementById(`${arrUrlAnchor[1]}`)!==null)document.getElementById(`${arrUrlAnchor[1]}`).classList.add('show');
    }
// Получаем нужный элемент
var element = document.querySelector('.visElem');
// var element1 = document.querySelector(".visibleElem1")
// var elem = document.getElementsByClassName("visElem");
var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код

    target.classList.add("fadeinRight")
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
//   Visible(element1);
    // for(var i = 0; i<elem.length; i++){
        // Visible(elem[i])
    // }
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible (element);
// Visible(element1);
// for(var i = 0; i<elem.length; i++){
//     Visible(elem[i])
// }
Visible (element);