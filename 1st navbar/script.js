let nav = document.querySelector('.nav-links');
let burgerSymbol = document.querySelector('.burger');
let navLinks = document.querySelectorAll('.nav-links li');

burgerSymbol.addEventListener('click',()=>{
    nav.classList.toggle('active');
    burgerSymbol.classList.toggle('toggle');

    navLinks.forEach((Links , index)=> {
        if(Links.style.animation){
            Links.style.animation = ''
        }
        else{
        Links.style.animation = `navLinkFade 0.7s ease forwards ${index/7+0.5}s`;
        }
    })
})