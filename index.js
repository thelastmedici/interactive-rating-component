const rateButtons = document.querySelectorAll(".btn")

rateButtons.forEach(function(button, i){
    button.addEventListener("click", function(){
        rateButtons.forEach(function (btn) {
            btn.classList.remove('clicked');
        })
        button.classList.add('clicked');
    });
})