const rateButtons = document.querySelectorAll(".btn")
const submitButton = document.querySelector(".submit")
const rating = document.querySelector(".rating")
const thanks = document.querySelector(".thanks")
thanks.classList.add('active');
rateButtons.forEach(function(button, i){
    button.addEventListener("click", function(){
        rateButtons.forEach(function (btn) {
            btn.classList.remove('clicked');
        })
        button.classList.add('clicked');
    });
})
submitButton.addEventListener("click", function(event){  
     rating.classList.add('active');

    console.log("i got clicked")
    if (rating.classList.contains('active')) {
        thanks.classList.remove('active');
    }
    
})
