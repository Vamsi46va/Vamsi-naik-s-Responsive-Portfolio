/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===================clock==================*/
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time (add leading zeros)
    const hour = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Update the DOM with the current time
    document.getElementById('date-time').textContent = `${formattedTime} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function initially
updateClock();
/*===================about__container======================*/
document.addEventListener("DOMContentLoaded", function () {
    const aboutContainer = document.querySelector(".about__container");
    aboutContainer.classList.add("show"); // Show the container with the transition

    const myElement = document.querySelector('.my-element');
    let rotation = 0;

    function rotateElement() {
        rotation += 1;
        myElement.style.transform = `rotate(${rotation}deg)`;
    }

    gsap.to('.my-element', {
        duration: 1,
        x: 200,
        rotation: 360,
        ease: 'power2.out',
    });

    const canvas = document.getElementById('my-canvas');
    const ctx = canvas.getContext('2d');

    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }

    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        drawCircle(x, y);
    }, 1000);
});


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


    window.onbeforeunload = function() {
        return 'Are you sure you want to leave?';
    };

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// Get references to form and button
const contactForm = document.getElementById('contact-form');
const sendButton = document.getElementById('send-button');
const countrySelect = document.getElementById('country-select'); 
let selectedCountryCode;
// Event listener for form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values (name, email, message, phone)
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const message = document.getElementById('message-input').value.trim();
    const phone = document.getElementById('phone-input').value.trim();
   

    // Validate input fields
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    // Validate email format (same as before)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter your message.');
        return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit numeric value
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Construct the email subject and body (same as before)
    const subject = encodeURIComponent('Regarding Your Contact Form Submission');
    const body = encodeURIComponent(`Hi,\n\nI need your help to develop something. Here are the details:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`);

    // Create the mailto link
    const mailtoLink = `mailto:vamsi46va@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Optional: Provide visual feedback to the user (e.g., confirmation message)
    alert('Your message will be sent via email. Thank you!');

});
countrySelect.addEventListener('change', function () {
     selectedCountryCode=countrySelect.value;
     
});

/*===================call us===============*/
const callUsButton = document.getElementById('callUsButton');

callUsButton.addEventListener('click', () => {
    const phoneNumber = '+9121671635'; // Replace with your actual phone number
    window.location.href = `tel:${phoneNumber}`;
});








sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



