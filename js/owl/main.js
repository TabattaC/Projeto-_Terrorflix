$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const button = document.querySelector('.botao')


function showModal(){
    var element = document.getElementById("Modal")
    element.classList.add("show-modal")
}

function closeModal(){
    var element= document.getElementById("Modal")
    element.classList.remove("show-modal")
}
