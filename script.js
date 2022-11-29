// Script for Home Page 
function load1() 
{
    // Home Page Feature Slider Implementation 

    const nextButton = document.getElementById("slide-next");
    const prevButton = document.getElementById("slide-prev");
    const slides = document.querySelector(".slides");  
    const slide = document.querySelectorAll(".slider");  
    const dots = document.querySelectorAll(".dot"); 
    const numOfSlides = slide.length; 

    let slideNum = 0; 

    nextButton.addEventListener("click", () => 
    {
        slide.forEach((slide) => 
        {
            slide.classList.remove("active");  
        }); 

        dots.forEach((dot) => 
        {
            dot.classList.remove("active"); 
        }); 

        slideNum ++; // Move next by incrementing by one 

        if (slideNum > (numOfSlides - 1)) // Go to the first slide in case we next from the last slide
        {
            slideNum = 0; 
        }

        slide[slideNum].classList.add("active"); 
        dots[slideNum].classList.add("active"); 
    }); 

    prevButton.addEventListener("click", () => 
    {
        slide.forEach((slide) => 
        {
            slide.classList.remove("active");  
        }); 

        dots.forEach((dot) => 
        {
            dot.classList.remove("active"); 
        }); 

        slideNum --; 

        if (slideNum < 0) // Go to the last slide in case we prev from the first slide  
        {
            slideNum = numOfSlides - 1; 
        }

        slide[slideNum].classList.add("active"); 
        dots[slideNum].classList.add("active");
    });

    // For each dot button 

    for (let n = 0; n < 3; n ++) 
    {
        dots[n].addEventListener("click", () => 
        {
            slide.forEach((slide) => 
            {
                slide.classList.remove("active");  
            }); 
    
            dots.forEach((dot) => 
            {
                dot.classList.remove("active"); 
            }); 
            
            slide[n].classList.add("active"); 
            dots[n].classList.add("active");

            slideNum = n; // Set up slideNum for further interaction 
        }); 
    }

    // Auto play feature for slide (Use set interval function for auto play)

    let slidePlayer; 

    const autoRepeat = function() 
    {
        slidePlayer = setInterval(function() // Set as moving forward using similar function as used for next  
        {
            slide.forEach((slide) => 
            {
                slide.classList.remove("active");  
            }); 

            dots.forEach((dot) => 
            {
                dot.classList.remove("active"); 
            }); 

            slideNum ++; // Move next by incrementing by one 

            if (slideNum > (numOfSlides - 1)) // Go to the first slide in case we next from the last slide
            {
                slideNum = 0; 
            }

            slide[slideNum].classList.add("active"); 
            dots[slideNum].classList.add("active");
        
        }, 10000); // Every 10 Seconds 
    }

    autoRepeat(); // Call Function 

    // Stop and set autoplay depending on mouse location in relation to slide

    slides.addEventListener("mouseover", () => 
    {
        nextButton.style.opacity = 1; 
        prevButton.style.opacity = 1; 
        clearInterval(slidePlayer); 
    }); 

    slides.addEventListener("mouseout", () => 
    {
        nextButton.style.opacity = 0; 
        prevButton.style.opacity = 0;
        autoRepeat();
    });

    // Change Promo in Specials depending on the day of the week 

    const promoHeader1 = document.querySelector('#promo-header1'); 
    const promoHeader2 = document.querySelector('#promo-header2');

    const promoInfo1 = document.querySelector('#promo-info1');
    const promoInfo2 = document.querySelector('#promo-info2');

    const promoImage1 = document.querySelector('#image-promo1');
    const promoImage2 = document.querySelector('#image-promo2'); 

    const d = new Date(); 
    const dayofWeek = d.getDay(); // Get day of the week using getDay function

    if (dayofWeek === 0 || dayofWeek === 6) // Case of weekend 
    {
        promoHeader1.innerHTML = "Savory and Sweet For the Weekends!"; 
        promoInfo1.innerHTML = "The mix of flavors for you to rest!"; 
        promoImage1.src = "feature/savory_delight.jpg"; 

        promoHeader2.innerHTML = "Chocolate Day!"; 
        promoInfo2.innerHTML = "Enjoy our weekend choco specials made by the best!"; 
        promoImage2.src = "feature/chocolate_day.jpg";
    } 
    else 
    {
        promoHeader1.innerHTML = "Our Weekly Sweets"; 
        promoInfo1.innerHTML = "Enjoy our week day sweets!"; 
        promoImage1.src = "feature/weekday_sweets.jpg"; 

        promoHeader2.innerHTML = "Bread Day !"; 
        promoInfo2.innerHTML = "Every week day is bread day!"; 
        promoImage2.src = "feature/wheat_special.jpg";
    }

       // Specials Feature 

    const dealImage1 = document.querySelector("#deal1-image"); 
    const dealName1 = document.querySelector(".deal1-bread"); 
    const dealOld1 = document.querySelector(".old-price1");
    const dealNew1 = document.querySelector(".new-price1");

    const dealImage2 = document.querySelector("#deal2-image"); 
    const dealName2 = document.querySelector(".deal2-bread"); 
    const dealOld2 = document.querySelector(".old-price2");
    const dealNew2 = document.querySelector(".new-price2");

    const dealImage3 = document.querySelector("#deal3-image"); 
    const dealName3 = document.querySelector(".deal3-bread"); 
    const dealOld3 = document.querySelector(".old-price3");
    const dealNew3 = document.querySelector(".new-price3");

    const dealImage4 = document.querySelector("#deal4-image"); 
    const dealName4 = document.querySelector(".deal4-bread"); 
    const dealOld4 = document.querySelector(".old-price4");
    const dealNew4 = document.querySelector(".new-price4");


    // Set up using day of week for bread of the day 

    if (dayofWeek === 0 || dayofWeek === 6) // Weekends  
    {
        dealImage1.src = "Menu_Pictures/donut.jpg"; 
        dealName1.innerHTML = "Glazed Donut"; 
        dealOld1.innerHTML = "$1.5"; 
        dealNew1.innerHTML = `$${1.5/2}`; 

        dealImage2.src = "Menu_Pictures/whitebread.jpg"; 
        dealName2.innerHTML = "White Bread"; 
        dealOld2.innerHTML = "$3"; 
        dealNew2.innerHTML = `$${3 - (3 * 0.25)}`; 

        dealImage3.src = "Menu_Pictures/sourdough.jpg"; 
        dealName3.innerHTML = "Sourdough"; 
        dealOld3.innerHTML = "$5"; 
        dealNew3.innerHTML = `$${5 * 0.95}`; 

        dealImage4.src = "Menu_Pictures/muffin.jpg"; 
        dealName4.innerHTML = "Chocolate Muffin"; 
        dealOld4.innerHTML = "$2"; 
        dealNew4.innerHTML = `$${2 * 0.80}`; 
    }
    else if (dayofWeek === 2 || dayofWeek === 4) // Tuesday, Thursday 
    {
        dealImage1.src = "Menu_Pictures/baguette.jpg"; 
        dealName1.innerHTML = "Baguette"; 
        dealOld1.innerHTML = "$3"; 
        dealNew1.innerHTML = `$${3 * 0.75}`; 

        dealImage2.src = "Menu_Pictures/croissant.jpg"; 
        dealName2.innerHTML = "Croissant"; 
        dealOld2.innerHTML = "$2.5"; 
        dealNew2.innerHTML = `$${2.5 - (2.5 * 0.15)}`; 

        dealImage3.src = "Menu_Pictures/cinnamon.jpg"; 
        dealName3.innerHTML = "Cinnamon Rolls"; 
        dealOld3.innerHTML = "$2"; 
        dealNew3.innerHTML = `$${2 * 0.75}`; 

        dealImage4.src = "Menu_Pictures/brioche.jpg"; 
        dealName4.innerHTML = "Brioche"; 
        dealOld4.innerHTML = "$2"; 
        dealNew4.innerHTML = `$${2 * 0.75}`;
    }
    else // Every other day (Monday, Wednesday, Friday)
    {
        dealImage1.src = "Menu_Pictures/baguette.jpg"; 
        dealName1.innerHTML = "Baguette"; 
        dealOld1.innerHTML = "$3"; 
        dealNew1.innerHTML = `$${3 * 0.75}`; 

        dealImage2.src = "Menu_Pictures/focaccia.jpg"; 
        dealName2.innerHTML = "Focaccia"; 
        dealOld2.innerHTML = "$4"; 
        dealNew2.innerHTML = `$${4 - (4 * 0.10)}`; 

        dealImage3.src = "Menu_Pictures/whitebread.jpg"; 
        dealName3.innerHTML = "White Bread"; 
        dealOld3.innerHTML = "$3"; 
        dealNew3.innerHTML = `$${3 * 0.85}`; 

        dealImage4.src = "Menu_Pictures/sourdough.jpg"; 
        dealName4.innerHTML = "Sourdough"; 
        dealOld4.innerHTML = "$5"; 
        dealNew4.innerHTML = `$${5 * 0.85}`;
    }

    // Note: We can also choose to set specific bread of the week for each (Depends on what the business wants)

    // Menu Code 

    /* 
    let botd = 2;
    botd = Math.floor(Math.random() * (1 - 1 + 9)) + 1
    
    if (botd == 1)
    document.getElementById('b1').innerHTML = "White Bread " + 3/2 + "$";
    else
    document.getElementById('b1').innerHTML = "White Bread " + 3 + "$";

    if (botd == 2)
    document.getElementById('b2').innerHTML = "Sourdough " + 5/2 + "$";
    else
    document.getElementById('b2').innerHTML = "Sourdough " + 5 + "$";

    if (botd == 3)
    document.getElementById('b3').innerHTML = "Baguette " + 3/2 + "$";
    else
    document.getElementById('b3').innerHTML = "Baguette " + 3 + "$";

    if (botd == 4)
    document.getElementById('b4').innerHTML = "Focaccia " + 4/2 + "$";
    else
    document.getElementById('b4').innerHTML = "Focaccia " + 4 + "$";

    if (botd == 5)
    document.getElementById('b5').innerHTML = "Brioche " + 4/2 + "$";
    else
    document.getElementById('b5').innerHTML = "Brioche " + 4 + "$";

    if (botd == 6)
    document.getElementById('b6').innerHTML = "Croissant " + 2.5/2 + "$";
    else
    document.getElementById('b6').innerHTML = "Croissant " + 2.5 + "$";

    if (botd == 7)
    document.getElementById('b7').innerHTML = "Glazed Donuts " + 1.5/2 + "$";
    else
    document.getElementById('b7').innerHTML = "Glazed Donuts " + 1.5 + "$";

    if (botd == 8)
    document.getElementById('b8').innerHTML = "Cinnamon Rolls " + 2/2 + "$";
    else
    document.getElementById('b8').innerHTML = "Cinnamon Rolls " + 2 + "$";

    if (botd == 9)
    document.getElementById('b9').innerHTML = "Chocolate Muffin " + 1.5/2 + "$";
    else
    document.getElementById('b9').innerHTML = "Chocolate Muffin " + 1.5 + "$";

    */

    // Chat Box Stuff 

    const chat_popup = document.querySelector('.chat-box'); 
    const chat_button = document.querySelector('.chat-button'); 
    const close_button = document.querySelector('.close'); 
    const chat_area = document.querySelector('.chat-area'); 
    const input_msg = document.querySelector('.message-input'); 
    const msg_submit = document.querySelector('.message-submit'); 

    // Toggle Chat Button and Close Chat 

    chat_button.addEventListener('click', () => 
    {
        chat_popup.classList.toggle('show-chat'); 
    });

    close_button.addEventListener('click', () => 
    {
        chat_popup.classList.toggle('show-chat'); 
    });

    // For Sending Messages and Message Responses 

    msg_submit.addEventListener('click', ()=> 
    {
        let user_input = input_msg.value;

        if(user_input === '') // Do nothing if input is blank upon hitting submit 
        {
            return; 
        }

        let user_output = ` <div class = "message-output"> 
                                <span class = "outgoing-message"> ${user_input} </span>
                                <img src = "chat_box/user-avatar.jpg" alt = "User Avatar" class = "avatar-icon"> 
                            </div> `

        chat_area.insertAdjacentHTML("beforeend", user_output); // Insert 
        input_msg.value = ''; // Clear after Inserting  

        // Conditional Replies 

        if (user_input === "1") 
        {
            let response1 = `<div class = "incoming-message"> 
                                <img src = "chat_box/chat-avatar.png" alt = "Bot Avatar" class = "avatar-icon">
                                <span class = "msg"> 012 123 123 </span>
                            </div>`

            chat_area.insertAdjacentHTML("beforeend", response1);
        }
        else if (user_input === '2') 
        {
            let response2 = `<div class = "incoming-message"> 
                                <img src = "chat_box/chat-avatar.png" alt = "Bot Avatar" class = "avatar-icon">
                                <span class = "msg"> bakery@gmail.com </span>
                            </div>`

            chat_area.insertAdjacentHTML("beforeend", response2);
        }
        else if (user_input === '3') 
        {
            let response3 = `<div class = "incoming-message"> 
                                <img src = "chat_box/chat-avatar.png" alt = "Bot Avatar" class = "avatar-icon">
                                <span class = "msg"> 
                                    <p> 420th Street </p>
                                    <p> Mao Tse Toung Blvd </p> 
                                </span>
                            </div>`

            chat_area.insertAdjacentHTML("beforeend", response3);
        }
        else 
        {
            let default_response = `<div class = "incoming-message"> 
                                <img src = "chat_box/chat-avatar.png" alt = "Bot Avatar" class = "avatar-icon">
                                <span class = "msg">  <p> Command unvalid. </p>  <p> Please try again! </p> </span>
                            </div>`

            chat_area.insertAdjacentHTML("beforeend", default_response);
        }

    });

    // For Dealing with Scrolling 
    
    // Deal with specific keys that can be used for scrolling 

    let scroll_keys = {37: 1, 38: 1, 39: 1, 40: 1}; 
    
    // Function for preventing 

    function preventDefault(event) 
    {
        event.preventDefault(); 
    }

    function defaultPreventScrollKeys(event) 
    {
        if (scroll_keys[event.keyCode]) 
        {
            preventDefault(event); 
            return false; 
        }
    }

    // Dealing with requriements of chrome (modern) - passive events (Note: In particular, it was also added for scroll performance)

    let passiveSupport = false; 

    try 
    {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', 
        {
            get: function ()
            {
                passiveSupport = true; 
            }
        })); 
    }
    catch (e) 
    {
        // Do nothing 
    }

    // Regarding using wheels for scrolling 

    let wheelOption = passiveSupport ? { passive:false } : false; 
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; 

    // Functions for disabling and enabling 

    function scrollDisable() 
    {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // Older 
        window.addEventListener('keydown', defaultPreventScrollKeys, false); // Dealing with keys 
        window.addEventListener('touchmove', preventDefault, wheelOption); // For mobile devices (touch screen)
        window.addEventListener(wheelEvent, preventDefault, wheelOption); // For dealing with modern pcs (desktops)
    }

    function scrollEnable() 
    {
        window.removeEventListener('DOMMouseScroll', preventDefault, false); // Older 
        window.removeEventListener('keydown', defaultPreventScrollKeys, false); // Dealing with keys 
        window.removeEventListener('touchmove', preventDefault, wheelOption); // For mobile devices (touch screen)
        window.removeEventListener(wheelEvent, preventDefault, wheelOption); // For dealing with modern pcs (desktops)
    }

    // Nav Bar Manipulation 

    let nav_button = document.querySelector('#btn'); 
    let nav_cancel = document.querySelector('#cancel'); 
    let main_body = document.querySelector('body'); 

    nav_button.addEventListener('click', ()=> 
    {
        // Avoid clash with chat box 

        if(chat_popup.classList.contains('show-chat')) 
        {
            chat_popup.classList.toggle('show-chat');
        } 

        // Prevent Scrolling for nav button 
        scrollDisable(); 
        main_body.style.overflow = "hidden"; // Hide scroll bar 
    });

    nav_cancel.addEventListener('click', ()=> 
    {
        scrollEnable(); 
        main_body.style.overflow = "visible"; // Show scroll bar 
    });

}


// Load for other 3 pages (Dealing with nav bar and scrolling) (Note: Included in load1() as well due to interaction with chat box)
function load() 
{
    // For Dealing with Scrolling 
    
    // Deal with specific keys that can be used for scrolling 

    let scroll_keys = {37: 1, 38: 1, 39: 1, 40: 1}; 
    
    // Function for preventing 

    function preventDefault(event) 
    {
        event.preventDefault(); 
    }

    function defaultPreventScrollKeys(event) 
    {
        if (scroll_keys[event.keyCode]) 
        {
            preventDefault(event); 
            return false; 
        }
    }

    // Dealing with requriements of chrome (modern) - passive events (Note: In particular, it was also added for scroll performance)

    let passiveSupport = false; 

    try 
    {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', 
        {
            get: function ()
            {
                passiveSupport = true; 
            }
        })); 
    }
    catch (e) 
    {
        // Do nothing 
    }

    // Regarding using wheels for scrolling 

    let wheelOption = passiveSupport ? { passive:false } : false; 
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; 

    // Functions for disabling and enabling 

    function scrollDisable() 
    {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // Older 
        window.addEventListener('keydown', defaultPreventScrollKeys, false); // Dealing with keys 
        window.addEventListener('touchmove', preventDefault, wheelOption); // For mobile devices (touch screen)
        window.addEventListener(wheelEvent, preventDefault, wheelOption); // For dealing with modern pcs (desktops)
    }

    function scrollEnable() 
    {
        window.removeEventListener('DOMMouseScroll', preventDefault, false); // Older 
        window.removeEventListener('keydown', defaultPreventScrollKeys, false); // Dealing with keys 
        window.removeEventListener('touchmove', preventDefault, wheelOption); // For mobile devices (touch screen)
        window.removeEventListener(wheelEvent, preventDefault, wheelOption); // For dealing with modern pcs (desktops)
    }

    // Nav Bar Manipulation 

    let nav_button = document.querySelector('#btn'); 
    let nav_cancel = document.querySelector('#cancel'); 
    let main_body = document.querySelector('body'); 

    nav_button.addEventListener('click', ()=> 
    {
        // Prevent Scrolling for nav button 
        scrollDisable(); 
        main_body.style.overflow = "hidden"; // Hide scroll bar 
    });

    nav_cancel.addEventListener('click', ()=> 
    {
        scrollEnable(); 
        main_body.style.overflow = "visible"; // Show scroll bar 
    });
}

// Note: Regarding Nav Bar and scroll manipulation (Technically changing overflow to body completely does the job however, additional prevents were added in case of potential issues)

// Script for Menu 
function load2() 
{
    const searchBar = document.querySelector('.search-bar');
    const figure = document.querySelectorAll('#menu-gallery figure');
    const fig_list = document.querySelectorAll('#menu-gallery figure figcaption'); 
    
    searchBar.addEventListener('keyup', (event) => 
    {
        let targetStr = event.target.value.toLowerCase(); 
        
        for (let i = 0; i < 9; i ++) 
        {
            if(fig_list[i].innerText.toLowerCase().includes(targetStr)) 
            { 
                figure[i].style.display = "block"; 
            }
            else 
            {
                figure[i].style.display = "none"; 
            }
        }
    }); 
}

// Script for Cake Customizer 

window.onload=init;
var state = {
    i : 0,
    j:0,
    k:0,
    l:0,
    a:0,
    b:0,
};
function init()
{
    state.i=1;
    state.j=1;
    state.a=1;
    state.b=1;
    state.k=1;
    state.l=1;
    var frostingB=document.getElementById("bottomFrosting");
	var layerB=document.getElementById("bottomLayer");
    var frostingT=document.getElementById("topFrosting");
    var layerT=document.getElementById("topLayer");
    var styleT=document.getElementById("topStyle");
    var styleB=document.getElementById("bottomStyle");
	frostingB.setAttribute("class","frostingBV");
    frostingT.setAttribute("class","frostingTV");
	layerB.setAttribute("class","layerBV");
    layerT.setAttribute("class","layerTV");
    styleT.setAttribute("class","EmptyStyle");
    styleB.setAttribute("class","EmptyStyle");
}
function nextFrostB()
{
    var button1=document.getElementById("nextFrostB");
    if (button1.value=="Next Bottom Frosting") button1.value = "Vanilla";
    else if (button1.value=="Vanilla") button1.value = "Chocolate";
    else if (button1.value=="Chocolate") button1.value = "Strawberry";
    else if (button1.value=="Strawberry") button1.value = "Vanilla";

    var frosting=document.getElementById("bottomFrosting");
    if(state.i===0){
    frosting.setAttribute("class","frostingBV");
        state.i++;
        
    }
    else
     if(state.i===1){
    frosting.setAttribute("class","frostingBC");
		state.i++;
    }
	else
     if(state.i===2){
    frosting.setAttribute("class","frostingBS");
		state.i=0;
    }
}

function nextLayerB()
{
    var button2=document.getElementById("nextLayerB");
    if (button2.value=="Next Bottom Layer") button2.value = "Vanilla";
    else if (button2.value=="Vanilla") button2.value = "Chocolate";
    else if (button2.value=="Chocolate") button2.value = "Strawberry";
    else if (button2.value=="Strawberry") button2.value = "Vanilla";
    var layer=document.getElementById("bottomLayer");
    if(state.j===0){
    layer.setAttribute("class","layerBV");
        state.j++;
    }
    else
     if(state.j===1){
    layer.setAttribute("class","layerBC");
		state.j++;
    }  
	else
     if(state.j===2){
    layer.setAttribute("class","layerBS");
		state.j=0;
    } 
}
function nextFrostT()
{
    var button3=document.getElementById("nextFrostT");
    if (button3.value=="Next Top Frosting") button3.value = "Vanilla";
    else if (button3.value=="Vanilla") button3.value = "Chocolate";
    else if (button3.value=="Chocolate") button3.value = "Strawberry";
    else if (button3.value=="Strawberry") button3.value = "Vanilla";
    var frosting=document.getElementById("topFrosting");
    if(state.a===0){
    frosting.setAttribute("class","frostingTV");
        state.a++;
        
    }
    else
     if(state.a===1){
    frosting.setAttribute("class","frostingTC");
		state.a++;
    }
	else
     if(state.a===2){
    frosting.setAttribute("class","frostingTS");
		state.a=0;
    }
}

function nextLayerT()
{
    var button4=document.getElementById("nextLayerT");
    if (button4.value=="Next Top Layer") button4.value = "Vanilla";
    else if (button4.value=="Vanilla") button4.value = "Chocolate";
    else if (button4.value=="Chocolate") button4.value = "Strawberry";
    else if (button4.value=="Strawberry") button4.value = "Vanilla";
    var layer=document.getElementById("topLayer");
    if(state.b===0){
    layer.setAttribute("class","layerTV");
        state.b++;
    }
    else
     if(state.b===1){
    layer.setAttribute("class","layerTC");
		state.b++;
    }  
	else
     if(state.b===2){
    layer.setAttribute("class","layerTS");
		state.b=0;
    } 
}
function nextStack()
{
    var x=document.getElementById("topFrosting");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    var y=document.getElementById("topLayer");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    var y=document.getElementById("topStyle");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}
function nextStyleT()
{
    var style=document.getElementById("topStyle");
    if(state.k===0){
    style.setAttribute("class","EmptyStyle");
        state.k++;
    }
    else
     if(state.k===1){
    style.setAttribute("class","TopStyleR");
		state.k++;
    }  
	else
     if(state.k===2){
    style.setAttribute("class","TopStyleN");
		state.k=0;
    } 
}
function nextStyleB()
{
    var style=document.getElementById("bottomStyle");
    if(state.l===0){
    style.setAttribute("class","EmptyStyle");
        state.l++;
    }
    else
     if(state.l===1){
    style.setAttribute("class","BotStyleR");
		state.l++;
    }  
	else
     if(state.l===2){
    style.setAttribute("class","BotStyleN");
		state.l=0;
    } 
}