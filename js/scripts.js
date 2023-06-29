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
  initializeNav();
  backgroundChange();
})



function initializeNav() {
  let allProjectsSection = document.querySelector('#all-projects');
  let projectDropdown = document.querySelector('#project-dropdown');
  let hiddenNav = document.querySelector('#hidden-nav');

  /* adds */
  projectDropdown.addEventListener('mouseover', () => {
    // console.log('hovered!')
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
  })

   hiddenNav.addEventListener('mouseover', () => {
    // console.log('hovered!')
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
  })


  allProjectsSection.addEventListener('mouseover', () => {
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
    
  })

  /* Removals */
  projectDropdown.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css(projectChildHidden)
  })
  allProjectsSection.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css(projectChildHidden)
  })
}


function backgroundChange() {
  $(window).on('activate.bs.scrollspy', function( e) {
    let text = e.relatedTarget.textContent;
    let element = e.relatedTarget;
    if (element.parentElement != $('li .project-child')[0] && 
    text != 'Projects') {
      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_WHITE_H)
      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '1')
      console.log('not projects')
      let headings = document.querySelectorAll('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p>a')

      for (each of headings) {
        if (each.parentElement === $('#projects > div.resume-section-content')[0]){
        $('#projects > div.resume-section-content>h2')[0].style.setProperty('opacity', '0')
          $('#projects > div.resume-section-content>h3')[0].style.setProperty('opacity', '0')
        }
        else{
          // each.style.setProperty('color', 'white')
          each.style.setProperty('color', '#343a40')
        }
      }
    }
    if (text === 'About') {
      document.querySelector(':root').style.setProperty('--bs-primary-rgb',  PRIMARY_BLUE)
    }
    else if (text === 'Experience') {
        document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_PURPLE)
    }
    else if (text === 'Education') {
      document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_ORANGE)
    }
    else if (text === 'Interests') {
      document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_GREEN)
    }
    /* Note the background uses HEX */
    else if (element.parentElement === $('li .project-child')[0] || 
            text == 'Projects') {
      // console.log('here')
      // document.querySelector(':root').style.setProperty('--bs-bg-opacity', '0')
      // document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_DARK_BROWN)

      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_DARK_H)
      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '0')
      let headings = document.querySelectorAll('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p>a')
      
      for (each of headings) {
        if (each.parentElement === $('#projects > div.resume-section-content')[0]){
          setTimeout(() => {
            $('#projects > div.resume-section-content>h2')[0].style.setProperty('opacity', '1')
        
            $('#projects > div.resume-section-content>h2')[0].style.setProperty('color', 'white')
          }, 1500)
          setTimeout(() => {
            $('#projects > div.resume-section-content>h3')[0].style.setProperty('opacity', '1')
            $('#projects > div.resume-section-content>h3')[0].style.setProperty('color', 'white')
          }, 3000)
        }
        else{
          each.style.setProperty('color', 'white')
        }
      }
     
    }

  })
}

const PRIMARY_BLUE = '67, 142, 200'
const PRIMARY_ORANGE = '255, 174, 36'
const PRIMARY_PURPLE ='117, 45, 250'
const PRIMARY_GREEN = '109, 181, 139'
const PRIMARY_RED = '232, 115, 97'
const PRIMARY_DARK = '24, 26, 27'
const PRIMARY_DARK_BROWN = '46, 41, 40'
const PRIMARY_DARK_H = '#181a1b'
const PRIMARY_WHITE_H = '#ffffff'


/* styles */
let projectChildVisible = {
  visibility: 'visible', transition: '0.7s', transform: 'scaleY(1)'
}
let projectChildHidden = {
  visibility: 'hidden', transition: '0.7s', transform: 'scaleY(0)'
}

let bgNoOpacity = {
  '--bs-bg-opacity': 0,
  'transition': '1s',
  'background-color': 'rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important'
}

let bgOpacity = {
  '--bs-bg-opacity': 1,
  'transition': '1s',
  'background-color': 'rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important'
}