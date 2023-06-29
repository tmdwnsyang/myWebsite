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

  initializeNav();
  initializeHiddenFonts();
  backgroundChange();
});


function initializeHiddenFonts() {
  // $('span.text-primary').css({opacity: 0})

}


function initializeNav() {
  let allProjectsSection = document.querySelector('#all-projects');
  let projectDropdown = document.querySelector('#project-dropdown');
  let hiddenNav = document.querySelector('#hidden-nav');
  // let allResumes = document.querySelector('#all-resumes');

  /* adds */
  projectDropdown.addEventListener('mouseover', () => {
    // console.log('hovered!')
    // e.stopPropagation();
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
  })

   hiddenNav.addEventListener('mouseover', () => {
    // console.log('hovered!')
    
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
  })


  allProjectsSection.addEventListener('mouseover', (e) => {
    // console.log('mouseHover!');

    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
    
  })

  /* Dropdown effect when mouse is hovered away  */
  projectDropdown.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css(projectChildHidden)
  })
  allProjectsSection.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css(projectChildHidden)
  })

  hiddenNav.addEventListener('mouseout', () => {
    $('#hidden-nav').css({height: '0', transition: '1s'})
    $('.project-child > a').css(projectChildHidden)
  })
}

let bsCollapse = new bootstrap.Collapse( $('div.navbar-collapse')[0])

function backgroundChange() {
  $(window).on('activate.bs.scrollspy', function( e) {
    let text = e.relatedTarget.textContent;
    let element = e.relatedTarget;
    /* If the project page is naviaged out */
    if (element.parentElement !== $('li .project-child')[0] && 
    text !== 'Projects') {
      $('button.navbar-toggler').css('visibility', 'visible')


      /* Reset the bg to white and the nav opacity back to 1 */
      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_WHITE_H)
      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '1')
      let headings = document.querySelectorAll('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p>a')

      for (each of headings) {
        if (each.parentElement === $('#projects > div.resume-section-content')[0]){
          $('#projects > div.resume-section-content>h2')[0].style.setProperty('opacity', '0')
          $('#projects > div.resume-section-content>h3')[0].style.setProperty('opacity', '0')
          $('#projects > div.resume-section-content>p')[0].style.setProperty('opacity', '0')
        }
        else{
          // each.style.setProperty('color', 'white')
          each.style.setProperty('color', '#343a40')
        }
      }
    }
    if (text === 'About') {
      setTimeout(() => {
        $('h1.mb-0').css({opacity: 1})

        setTimeout( ()=> {
          $('span.text-primary').css({opacity: 1})
          setTimeout( ()=> {
            $('.name-phone-email~p, .name-phone-email~.social-icons').css({opacity: 1, transform: 'translateY(0em)'})
          }, 500)
        }, 500)
      }, 500)
      document.querySelector(':root').style.setProperty('--bs-primary-rgb',  PRIMARY_BLUE)
      document.querySelector(':root').style.setProperty('--bs-link-hover-color',  PRIMARY_DARK_BLUE_H)
    }
    else if (text === 'Experience') {
        document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_PURPLE)
    }
    else if (text === 'Education') {
      document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_ORANGE)
    }
    else if (text === 'Skills') {
      document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_RED)
    }
    else if (text === 'Interests') {
      
     
      document.querySelector(':root').style.setProperty('--bs-primary-rgb', PRIMARY_GREEN)
    }
    /* Note the background uses HEX */
    else if (element.parentElement === $('li .project-child')[0] || 
            text === 'Projects') {
      /* Hide only for mobiles  */
      if ($('#navbarResponsive').css('display') !== 'flex'){
        $('button.navbar-toggler').css('visibility', 'collapse')
        bsCollapse.hide();

      }

      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_DARK_H)
      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '0')
      let headings = document.querySelectorAll('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p>a')
      
      for (each of headings) {
        if (each.parentElement === $('#projects > div.resume-section-content')[0]){
          setTimeout(() => {
            $('#projects > div.resume-section-content>h2')[0].style.setProperty('opacity', '1')
            $('#projects > div.resume-section-content>h2')[0].style.setProperty('color', 'white')
            setTimeout(() => {
              $('#projects > div.resume-section-content>h3')[0].style.setProperty('opacity', '1')
              $('#projects > div.resume-section-content>h3')[0].style.setProperty('color', 'white')
              setTimeout(() => {
                $('#projects > div.resume-section-content>p')[0].style.setProperty('opacity', '1')
                $('#projects > div.resume-section-content>p')[0].style.setProperty('color', 'white')
              }, 750)
            }, 750)
          }, 750)
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
const PRIMARY_DARK_BLUE_H ='#18759a'

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