const rating = document.querySelectorAll('.btn')

rating.forEach(function(rating, i){
    rating.addEventListener('click', function(){
        
            console.log(rating, i)
    })
});