document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("navbar-menu").classList.toggle("active");
  });

  const nav_btns = document.querySelectorAll(".navbar-menu-btn");

  nav_btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("navbar-menu").classList.remove("active");
    });
  });


  // Add an event listener to the "Show More" button
document.getElementById("show-more-btn").addEventListener("click", function () {
    // Select all hidden projects inside the project grid
    const hiddenProjects = document.querySelectorAll(".project-container.hidden");
    
    // Loop through the first 6 hidden projects and show them
    for (let i = 0; i < Math.min(hiddenProjects.length, 6); i++) {
      hiddenProjects[i].classList.remove("hidden");
    }
  
    // Hide the "Show More" button if there are no more hidden projects
    if (hiddenProjects.length <= 6) {
      this.style.display = "none";
    }
  });
  
  // JavaScript to execute when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Select all project containers inside the project grid
    const projectContainers = document.querySelectorAll(".project-container");
  
    // Hide projects starting from the 7th one (index 6)
    for (let i = 6; i < projectContainers.length; i++) {
      projectContainers[i].classList.add("hidden");
    }
  });
  