const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  backdrop.classList.add("active");
  navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("active");
  navLinks.classList.remove("active");
});

  document.getElementById('size-dropdown').addEventListener('change', function () {
    const selectedSize = this.value;

    // Check if a size is selected
    if (selectedSize) {
        console.log("Selected Size: " + selectedSize);
        // Update the display element
        const displayElement = document.querySelector('.selected-size-display');
        if (displayElement) {
            displayElement.textContent = `Selected Size: ${selectedSize}`;
        }
    } else {
        // This alert will only show if no size is selected (i.e., the default option)
        alert('Please select a size.');
    }
});


  