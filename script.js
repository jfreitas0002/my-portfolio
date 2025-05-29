// Create and insert the button into the page
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Style the button with fade-in CSS
const style = document.createElement('style');
style.innerHTML = `
  #backToTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 16px;
    background-color: #00adb5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  }

  #backToTop.visible {
    opacity: 1;
    pointer-events: auto;
  }

  #backToTop:hover {
    background-color: #007b7f;
  }
`;
document.head.appendChild(style);

// Show/hide button with fade-in effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollPosition = scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollY > 300 || scrollPosition >= pageHeight - 10) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Scroll to top on button click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});