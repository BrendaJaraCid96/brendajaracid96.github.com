let elementList = document.querySelectorAll(".fa-star");


console.log(elementList)

elementList.forEach(function(element){
    element.addEventListener('click', function(){
        element.classList.remove("far");
        element.classList.add ("fas");
    })
    }); 

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("bounceInRight");
        content.classList.add("animated");
        content.classList.add("bounceOutRight")
        setTimeout(() => {
            location.href="../index.html";
        }, 1000);
        

    });
})

