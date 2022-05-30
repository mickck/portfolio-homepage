'use strict';


//make navbar colorchanging when scroll donw or up.
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY >navbarHeight){
        navbar.classList.add('navbar--dark'); 
    }else{
        navbar.classList.remove('navbar--dark'); 
    }
})