var elModalOpenButton = document.querySelector(".header-bottom__ask-link");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
    elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".modal-show__close")

elModalCloseButton.addEventListener("click" , function (){
  // `  // elModalWindnow.classList.add("modal-window-close");
    elModal.classList.remove("modal-show");
})



elModalCloseButton.addEventListener("click",function(){
  elModal.classList.remove("modal-show");
})