const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerGrid = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show-grid');
    }
  });
});
const hiddenElementsGrid = document.querySelectorAll('.hidden-grid');
hiddenElementsGrid.forEach((el) => observerGrid.observe(el));


/*    DESKTOP NAVBAR    */


document.addEventListener('scroll', () =>{
  const navBar = document.querySelector(".header-box");
  if (window.scrollY > 0) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
})

let prevScroll = window.pageYOffset;
window.onscroll = function() {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-8rem";
  }
  prevScroll = currentScroll;
}


/*    MOBILE NAVBAR   */


const mobileNav = document.querySelector(".header-grid")
const navToggle = document.querySelector(".header-mobile-toggle");

navToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute('data-visible');
  if (visibility === "false") {
    mobileNav.setAttribute('data-visible', "true");
  } else if (visibility === "true") {
    mobileNav.setAttribute('data-visible', "false");
  }
  console.log(visibility);
})


/*    HEADER BUTTONS    */


let aboutButton = document.getElementById('about-button');
let aboutSection = document.getElementById('about-section');
aboutButton.onclick = function() {
  console.log("I was clicked!");
  mobileNav.setAttribute('data-visible', "false");
  aboutSection.scrollIntoView({behavior: 'smooth'});
}

let projectsButton = document.getElementById('projects-button');
let projectsSection = document.getElementById('projects-section');
projectsButton.onclick = function() {
  console.log("I was clicked!");
  mobileNav.setAttribute('data-visible', "false");
  projectsSection.scrollIntoView({behavior: 'smooth'});
}

let skillsButton = document.getElementById('skills-button');
let skillsSection = document.getElementById('skills-section');
skillsButton.onclick = function() {
  console.log("I was clicked!");
  mobileNav.setAttribute('data-visible', "false");
  skillsSection.scrollIntoView({behavior: 'smooth'});
}

let contactButton = document.getElementById('contact-button');
let contactSection = document.getElementById('contact-section');
contactButton.onclick = function() {
  console.log("I was clicked!");
  mobileNav.setAttribute('data-visible', "false");
  contactSection.scrollIntoView({behavior: 'smooth'});
}