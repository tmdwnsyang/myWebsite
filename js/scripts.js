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

window.addEventListener('load', function() {

  let allProjectsSection = document.querySelector('#all-projects');
  let projectDropdown = document.querySelector('#project-dropdown');
  let hiddenNav = document.querySelector('#hidden-nav');

  /* adds */
  projectDropdown.addEventListener('mouseover', () => {
    console.log('hovered!')
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css({visibility: 'visible', transition: '0.7s', transform: 'scaleY(1)'})
  })

   hiddenNav.addEventListener('mouseover', () => {
    console.log('hovered!')
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css({visibility: 'visible', transition: '0.7s', transform: 'scaleY(1)'})
  })


  allProjectsSection.addEventListener('mouseover', () => {
    console.log('hovered!')
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css({visibility: 'visible', transition: '0.7s', transform: 'scaleY(1)'})
    
  })


  /* Removals */
  projectDropdown.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css({visibility: 'hidden', transition: '0.7s', transform: 'scaleY(0)'})
  })
  allProjectsSection.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css({visibility: 'hidden', transition: '0.7s', transform: 'scaleY(0)'})
  })

})