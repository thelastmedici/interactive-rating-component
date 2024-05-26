const rateButtons = document.querySelectorAll(".btn")
const submitButton = document.querySelector(".submit")
const rating = document.querySelector(".rating")
const thanks = document.querySelector(".thanks")
thanks.classList.add('active');
const innerText = document.querySelector(".inner-text")
rateButtons.forEach(function(button, i){
    button.addEventListener("click", function(){
        rateButtons.forEach(function (btn) {
            btn.classList.remove('clicked');
        })
        button.classList.add('clicked');
    });
})
submitButton.addEventListener("click", function(event){
    const selectedRating = document.querySelector('.clicked');
    if (selectedRating) {
        innerText.textContent = `You rated us ${selectedRating.textContent} out of 5!`
    } else {
        innerText.textContent = `Please select a rating!`
    }
     rating.classList.add('active');
    if (rating.classList.contains('active')) {
        thanks.classList.remove('active');
    }
    
})
