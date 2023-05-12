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

/*    HEADER BUTTONS    */

let aboutButton = document.getElementById('about-button');
let aboutSection = document.getElementById('about-section');
aboutButton.onclick = function() {
  console.log("I was clicked!");
  aboutSection.scrollIntoView({behavior: 'smooth'});
}

let projectsButton = document.getElementById('projects-button');
let projectsSection = document.getElementById('projects-section');
projectsButton.onclick = function() {
  console.log("I was clicked!");
  projectsSection.scrollIntoView({behavior: 'smooth'});
}

let skillsButton = document.getElementById('skills-button');
let skillsSection = document.getElementById('skills-section');
skillsButton.onclick = function() {
  console.log("I was clicked!");
  skillsSection.scrollIntoView({behavior: 'smooth'});
}

let contactButton = document.getElementById('contact-button');
let contactSection = document.getElementById('contact-section');
contactButton.onclick = function() {
  console.log("I was clicked!")
  contactSection.scrollIntoView({behavior: 'smooth'});
}