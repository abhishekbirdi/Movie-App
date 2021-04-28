/*==================== SHOW MENU ====================*/
/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')






const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'




// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
})






var addtocart=JSON.parse(localStorage.getItem("data"))||[];
console.log(addtocart)
var card=document.querySelectorAll(".lks");

card.forEach((items)=>{
    items.addEventListener("click",(event)=>{
        var id=event.target.id;
        var title=event.target.parentElement.children[0].textContent;
        var img= event.target.parentElement.parentElement.children[0].children[0].src;
var price =event.target.parentElement.children[1].textContent;
        var flag=addtocart.some((item)=>{
            return id==item.id
  
        })
        if(flag){
            alert("already exist!!!")
        }else{
            addtocart.push({
                id:id,
                title:title,
                price:price,
                img:img,
                qty:1
            })
            localStorage.setItem('data',JSON.stringify(addtocart))
            
        }



       
     

    })
})







































































































-











document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();


    let tlFirstScroll = new TimelineMax();
    tlFirstScroll
    .set('.image-wrapper', {scale: 3, 
    transformOrigin:"center top"})

    .to('.image-wrapper', 3 ,{scale :2, y:"-40%"})
    .to('.image-wrapper', 3 ,{scale :0.8, y:"-20%"})



    let scene1 = new ScrollMagic.Scene({
        triggerElement: '.trigger1',
        duration: '100%',
        triggerHook: 0,
        offset:-100
       
    })
    .setTween(tlFirstScroll)
        // .addIndicators()
        .addTo(controller);







        let tlSecondScroll = new TimelineMax();

        tlSecondScroll

        
        .to('.iphone2' ,3 ,{x : "50%"})
        .to('.iphone1' ,3 ,{x : "-50%"}, "-=3")
        .from('.iphone1-text', 1 ,{autoAlpha:0}, "-=3")
        .from('.iphone2-text', 1 ,{autoAlpha:0}, "-=3")
        .to('.iphone1-text', 3 ,{x : "-50%"}, "-=3")
        .to('.iphone2-text', 3 ,{x : "50%"}, "-=3")
        


        let scene2 = new ScrollMagic.Scene({
            triggerElement: '.mys',
            duration: '100%',
            triggerHook: 0,
            offset:-210
           
        })
            .setTween(tlSecondScroll)
            // .addIndicators()
            .setPin('.mys')
            .addTo(controller);










            let tlthirdScroll = new TimelineMax();
            tlthirdScroll
            .set('.desk1', {scale: 0.3, 
                transformOrigin:"center top"})

                .to('.desk1', 3 ,{scale :0.5, y:"-10%"})
                .to('.desk1', 3 ,{scale :0.7, y:"-10%"})

                let scene3 = new ScrollMagic.Scene({
                    triggerElement: '.desk',
                    duration: '50%',
                    triggerHook: 0,
                    offset:-500
                   
                })
                .setTween(tlthirdScroll)
                    // .addIndicators()
                    .addTo(controller);





                    let tlfourthScroll = new TimelineMax();
                    tlfourthScroll
                    .set('.desk2', {scale: 1, 
                        transformOrigin:"center top"})
        
                        .to('.desk2', 3 ,{scale :1.5, y:"-50%"})
                        .to('.desk2', 3 ,{scale :2, y:"-10%"})
        
                        let scene4 = new ScrollMagic.Scene({
                            triggerElement: '.desk',
                            duration: '100%',
                            triggerHook: 0,
                            offset:-500
                           
                        })
                        .setTween(tlfourthScroll)
                            // .addIndicators()
                            .addTo(controller);
                    
            
})
