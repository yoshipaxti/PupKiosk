// Get all area elements
const areas = document.querySelectorAll('area');

// Loop through each area element and add a mouseover event listener
areas.forEach((area) => {
  area.addEventListener('mouseover', (e) => {
    // Get the modal ID from the data-modal attribute of the hovered area
    const modalId = area.getAttribute('data-modal');
  
    // Display the modal
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
  
  // Add a mouseout event listener to hide the modal on mouseout
  area.addEventListener('mouseout', () => {
    // Hide all modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = "none");
  });
});