/* ===================================
   NAVIGATION TOGGLE
   =================================== */
function toggleMenu() {
  const navLinks = document.querySelector('.navLinks');
  navLinks.classList.toggle('active');
}

/* ===================================
   SCROLL ANIMATION FOR BOXES
   =================================== */
const boxes = document.querySelectorAll('.box');

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8;
  
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

// Initialize on page load
window.addEventListener('scroll', checkBoxes);
checkBoxes();

/* ===================================
   SKILL COUNTER ANIMATION
   =================================== */
const skillNumbers = document.querySelectorAll('.num');

skillNumbers.forEach((element) => {
  let count = 0;
  const target = parseInt(element.getAttribute('data-parcent'));
  
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      element.textContent = `${count}%`;
    } else {
      clearInterval(interval);
    }
  }, 16);
});

/* ===================================
   PROJECT FILTERING
   =================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projectcard');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get filter target
    const filterTarget = button.getAttribute('data-filter');
    
    // Filter cards
    projectCards.forEach((card) => {
      const isMatch = filterTarget === 'all' || card.classList.contains(filterTarget);
      
      // Remove previous states
      card.classList.remove('show', 'hide');
      
      // Add appropriate state
      if (isMatch) {
        card.classList.add('show');
      } else {
        card.classList.add('hide');
      }
    });
  });
});
