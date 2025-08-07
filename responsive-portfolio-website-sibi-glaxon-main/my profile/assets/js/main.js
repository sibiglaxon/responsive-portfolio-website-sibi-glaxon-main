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

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

document.addEventListener("DOMContentLoaded", function () {
    // Select all social icon links
    const socialLinks = document.querySelectorAll(".about__social-icon");

    // Define the URLs for each platform
    const socialURLs = {
        "bx bxl-linkedin": "https://www.linkedin.com/in/sibi-glaxon",
        "bx bxl-github": "https://www.github.com/sibiglaxon",
    };

    // Loop through each icon and add an event listener
    socialLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action
            
            // Get the icon class from the <i> tag inside the <a>
            const iconClass = this.querySelector("i").className;

            // Open the corresponding URL in a new tab
            if (socialURLs[iconClass]) {
                window.open(socialURLs[iconClass], "_blank");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all social media links in the footer
    const socialLinks = document.querySelectorAll(".footer__social");

    // Define the URLs for each social platform
    const socialURLs = {
        "bx bxl-facebook": "https://www.facebook.com/share/14wwnWkypo/",
        "bx bxl-instagram": "https://www.instagram.com/yesuran_sibi_glaxon?igsh=MXV4aWUyd3l5eWZtcw==",
    };

    // Add event listeners to each social icon
    socialLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the icon class inside the <i> tag
            const iconClass = this.querySelector("i").className;

            // Open the corresponding URL in a new tab
            if (socialURLs[iconClass]) {
                window.open(socialURLs[iconClass], "_blank");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let name = document.querySelector("input[placeholder='Name']").value.trim();
        let email = document.querySelector("input[placeholder='Email']").value.trim();
        let message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        alert("Form submitted successfully!");
        form.reset(); // Clear the form after submission
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});