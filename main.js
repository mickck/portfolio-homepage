'use strict';


//make navbar colorchanging when scroll donw or up.
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  
    if(window.scrollY >navbarHeight){
        navbar.classList.add('navbar--dark'); 
    }else{
        navbar.classList.remove('navbar--dark'); 
    }
})

//Handle scorlling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
   const target = event.target;
   const link = target.dataset.link;
   if(link == null){
       return;
   }
       scrollIntoViewer(link);
   
   
});

// Handle click on "contact me"
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener('click',(event)=>{
    const contact =event.target.dataset.link;
    if(contact==null){
        return;
    }
    scrollIntoViewer(contact);
});

function scrollIntoViewer(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"}) ;
}

//handle scroll "fade "
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1- window.scrollY/homeHeight;
});



// show arrow icon when scrolling down
document.addEventListener('scroll',()=>{

    console.log(window.scrollY);
    if(window.scrollY>0){
        arrowUp.style.display ="block";
        
        
    }else{
        arrowUp.style.display ="none";
        

    }
});

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener('click',()=>{
    window.scrollTo(0,0);
})