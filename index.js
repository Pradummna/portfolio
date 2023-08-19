const navbarToggle = document.querySelector('.hemburger');
const navbarLinks = document.querySelector('.nav_items');

navbarToggle.addEventListener('click', () => 
{
navbarLinks.classList.toggle('active');
}
);


// button submit function

const button = document.querySelector('.sub-btn');

// Define the event listener function
function buttonClickHandler() {
  alert('Thanks for your feedback');
}

// Attach the event listener to the element
button.addEventListener('click', buttonClickHandler);