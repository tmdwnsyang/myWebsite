/*!
 * Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Create a MutationObserver instance and pass a callback function

const observer = new MutationObserver(function (mutations) {
  // Loop through the mutations list and check for attribute changes
  mutations.forEach(function (mutation) {
    // If the class attribute has changed, do something
    if (mutation.attributeName === "class") {
      // You can access the element and the new class value like this
      var element = mutation.target;
      var newClass = $(element).attr("class");
      // do something with element and newClass
      setTimeout(function() {
        if (element.classList.contains('active')) {
          $("nav .project-child").attr("hidden", false);
          setTimeout(() => {
              $("nav .project-child").css({visibility:'visible', opacity:'1', transitionDelay:'0s'})
          }, 100)
        } else {
            $("nav .project-child").css({visibility:'hidden', opacity:'0', 
            transition:'visibility 0s 0.3s, opacity 0.3s linear'
          })
            setTimeout(() => { $("nav .project-child").attr("hidden", true); }, 500)
        }
      }, 500);

    }
  });
});

// Select the element to observe and specify the options
const target = $("#project-dropdown")[0];
const options = {
  attributes: true, // observe attribute changes
  attributeFilter: ["class"], // only observe class changes
};

// Start observing the element
observer.observe(target, options);
