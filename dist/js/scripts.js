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
  backgroundChange();
});

// let projectDropTimer = false;
function initializeNav() {
  let allProjectsSection = document.querySelector('#all-projects');
  let projectDropdown = document.querySelector('#project-dropdown');
  let hiddenNav = document.querySelector('#hidden-nav');
  // let allResumes = document.querySelector('#all-resumes');

  /* adds */
  projectDropdown.addEventListener('mouseover', () => {
    $('#hidden-nav').css({height: '8em', transition: '1s'})
    $('.project-child > a').css(projectChildVisible)
    // clearTimeout(projectDropTimer)
    // projectDropTimer = setTimeout( () => {
    // }, 200)
  })
   hiddenNav.addEventListener('mouseover', () => {
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

let postProj = false;
function backgroundChange() {
  $(window).on('activate.bs.scrollspy', function( e) {

    CURRENTLY_BROWSING = e.relatedTarget.getAttribute('href').toLowerCase().slice(1);
    console.log(CURRENTLY_BROWSING);
    let element = e.relatedTarget;
    /* If currently not viewing any of the project pages */
    if (!postProj && !currentlyBrowsingProjects()) {
      $('button.navbar-toggler').css('visibility', 'visible')

      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '1')
      let headings = document.querySelectorAll('h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p>a')

      for (head of headings) {
        head.style.setProperty('color', PRIMARY_DARK_BLUE_H_H1)
        head.style.setProperty('transition', '1s')
        head.style.setProperty('transition-delay', 'none')
      }
      /* Resetting all CURRENTLY_BROWSING opacities under Projects section*/
      $('#projects > div.resume-section-content>h2').css(noOpacityAndTrans)
      $('#projects > div.resume-section-content>h3').css(noOpacityAndTrans)
      $('#projects > div.resume-section-content>p').css(noOpacityAndTrans)

      $(`#${PROJECT_1_NAME} > div.resume-section-content>h2`).css(noOpacityAndTrans)
      $(`#${PROJECT_1_NAME} > div.resume-section-content>h3`).css(noOpacityAndTrans)
      $(`#${PROJECT_1_NAME} > div.resume-section-content>img`).css(noOpacityAndTrans)
      $(`#${PROJECT_1_NAME} > div.resume-section-content>p`).css(noOpacityAndTrans)

      $(`#${PROJECT_2_NAME} > div.resume-section-content>h2`).css(noOpacityAndTrans)
      $(`#${PROJECT_2_NAME} > div.resume-section-content>h3`).css(noOpacityAndTrans)
      $(`#${PROJECT_2_NAME} > div.resume-section-content>img`).css(noOpacityAndTrans)
      $(`#${PROJECT_2_NAME} > div.resume-section-content>p`).css(noOpacityAndTrans)

      $(`#${PROJECT_3_NAME} > div.resume-section-content>h2`).css(noOpacityAndTrans)
      $(`#${PROJECT_3_NAME} > div.resume-section-content>h3`).css(noOpacityAndTrans)
      $(`#${PROJECT_3_NAME} > div.resume-section-content>img`).css(noOpacityAndTrans)
      $(`#${PROJECT_3_NAME} > div.resume-section-content>p`).css(noOpacityAndTrans)
      // $(`#${PROJECT_3_NAME} > div.resume-section-content>p`).css(noOpacityAndTrans)
      /* Hide back the arrow animation */
      
      console.log('reset arrow.') 
      $('#projects.resume-section-content').css({opacity: 0})
      $('section.scroll-down-disclaimer').css(arrowHideEffect)
      postProj = true;
    }
    if (CURRENTLY_BROWSING === 'about') {
      deviceTransitionAnimate()

      $('.name-only>h1:first-of-type').css(whiteAndOpacityD1Filter )
      
      $('h1.text-primary').css(whiteAndOpacityD2_5)
      $('.name-phone-email~p, .name-phone-email~.social-icons').css({opacity: 1, transform: 'translateY(0em)', transitionDuration: '1s', transitionDelay: '1s'})
      /* 1. */
      
      $(':root').css('--bs-link-color', PRIMARY_DARK_BLUE_H)
      
      /* 2. The background color */
      $(':root').css('--bs-body-bg', DARK_GRAY_H)
      $(':root').css('--bs-primary-rgb', PRIMARY_LIGHT_BLUE)
      
      $('.name-phone-email h1').css('color', 'white')
      document.querySelector(':root').style.setProperty('--bs-link-hover-color',  PRIMARY_LIGHT_BLUE)
      // $(':root').css('--bs-link-color', 'white')
      $('.resume-section-content p').css('color', LIGHT_GREY_H)
      // $('email-and-address-container').css()
    }
    else if (CURRENTLY_BROWSING === 'education') {
      setNavVisible()

      /* Reset the bg to white and the nav opacity back to 1 */
      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_WHITE_H)
      setNavDividerInvisible()

      document.querySelector(':root').style.setProperty('--bs-primary-rgb', '170, 40, 0')
    }
    else if (CURRENTLY_BROWSING === 'experience') {
      setNavVisible()

      setNavDividerInvisible()
      setNavColor(PRIMARY_PURPLE)
      }
    else if (CURRENTLY_BROWSING === 'skills') {
      setNavVisible()

      setNavDividerInvisible()
      setNavColor(PRIMARY_RED)
    }
    else if (CURRENTLY_BROWSING === 'interests') {
      setNavVisible()

      setNavDividerInvisible()
      setBgColor()
      setNavColor(PRIMARY_GREEN)
    }
    /* Note the background uses HEX */
    else if (element.parentElement === $('li .project-child')[0] || CURRENTLY_BROWSING === 'projects') {
      postProj = false;
      /* Hide only for mobiles  */
      if (isMobile()){
        $('button.navbar-toggler').css('visibility', 'collapse')
        $('#navbarResponsive').collapse('hide');

      }
      /* Everything that should apply to ALL project subsections once user is in the projects page. */
      document.querySelector(':root').style.setProperty('--bs-body-bg', PRIMARY_DARK_H)
      document.querySelector('.bg-primary').style.setProperty('--bs-bg-opacity', '0')
      /* Now per page behavior */
      if (CURRENTLY_BROWSING === 'projects'){
        projectsIntroAnimate();
      }
      else if (CURRENTLY_BROWSING === PROJECT_1_NAME){
        project1Animate();
      }
      else if (CURRENTLY_BROWSING === PROJECT_2_NAME){
        project2Animate();
      }
      else if (CURRENTLY_BROWSING === PROJECT_3_NAME){
        project3Animate();
      }
    }
    

  })
}

function projectsIntroAnimate(){
  
  $('#projects.resume-section-content').css({opacity: 1})
  $('#projects > div.resume-section-content>h2').css(whiteAndOpacityD1)
  $('#projects > div.resume-section-content>h3').css(whiteAndOpacityD2)
  $('#projects > div.resume-section-content>p').css(whiteAndOpacityD3)
  /* The arrow container and the arrow itself */
  $('section.scroll-down-disclaimer').css(arrowDisplayEffect)
  $('section.scroll-down-disclaimer>*').css(arrowDisplayEffect)
 
}

function project1Animate(){
  $(`#${PROJECT_1_NAME} > div.resume-section-content>h2`).css(whiteAndOpacityD1)
  $(`#${PROJECT_1_NAME} > div.resume-section-content>h3`).css(whiteAndOpacityD1_5)
  $(`#${PROJECT_1_NAME} > div.resume-section-content>p:first-of-type`).css(whiteAndOpacityD2)

  $(`#${PROJECT_1_NAME} > div.resume-section-content>p:first-of-type+p`).css(whiteAndOpacityD3)
  $(`#${PROJECT_1_NAME} > div.resume-section-content>img`).css(whiteAndOpacityD3_5)

  $(`#${PROJECT_1_NAME} > div.resume-section-content>img+p`).css(whiteAndOpacityD4)
  $(`#${PROJECT_1_NAME} > div.resume-section-content>img+p>a`).css(whiteAndOpacityD4)

  
}

function project2Animate(){
  $(`#${PROJECT_2_NAME} > div.resume-section-content>h2`).css(whiteAndOpacityD1)
  $(`#${PROJECT_2_NAME} > div.resume-section-content>h3`).css(whiteAndOpacityD1_5)
  $(`#${PROJECT_2_NAME} > div.resume-section-content>p:first-of-type`).css(whiteAndOpacityD2)

  $(`#${PROJECT_2_NAME} > div.resume-section-content>p:first-of-type+p`).css(whiteAndOpacityD3)
  $(`#${PROJECT_2_NAME} > div.resume-section-content>img`).css(whiteAndOpacityD3_5)

  $(`#${PROJECT_2_NAME} > div.resume-section-content>img+p`).css(whiteAndOpacityD4)
}

function project3Animate(){
  $(`#${PROJECT_3_NAME} > div.resume-section-content>h2`).css(whiteAndOpacityD1)
  $(`#${PROJECT_3_NAME} > div.resume-section-content>h3`).css(whiteAndOpacityD1_5)
  $(`#${PROJECT_3_NAME} > div.resume-section-content>p:first-of-type`).css(whiteAndOpacityD2)

  $(`#${PROJECT_3_NAME} > div.resume-section-content>p:first-of-type+p`).css(whiteAndOpacityD3)
  $(`#${PROJECT_3_NAME} > div.resume-section-content>img`).css(whiteAndOpacityD3_5)

  $(`#${PROJECT_3_NAME} > div.resume-section-content>img+p`).css(whiteAndOpacityD4)
}

window.addEventListener('resize', function() {
  timerResize = setTimeout( deviceTransitionAnimate, 250 );
})
function isMobile() {
  if (window.innerWidth < 992 ){
    return true;
  } 
  return false;
}

/**
 * 
 * Turns on the navbar colors on mobile, and turns it off for desktop
 */
function deviceTransitionAnimate(){
  /* Sets the nav color when on mobile. */
  if (!isMobile() && CURRENTLY_BROWSING === 'about' ){
    setNavInvisible()
    // $('#sideNav-divider').css(noOpacityAndTrans)
    $('#sideNav-divider').css(styleNavDividerShow)
  }
  /* At this point the nav divider should be hidden */
  else if (isMobile()){
    setNavDividerInvisible();
    if ( currentlyBrowsingProjects()){
      setNavInvisible();
    } else {
        setNavVisible();
    }
  }
}

function currentlyBrowsingProjects(){
  return ALL_PROJECT_NAMES.includes(CURRENTLY_BROWSING); 
}
function setNavInvisible(){
  $('#sideNav').css('--bs-bg-opacity', '0')
}
function setNavDividerInvisible(){
  $('#sideNav-divider').css(styleNavDividerHide)
}
function setNavVisible(){
  $('#sideNav').css('--bs-bg-opacity', '1')
}
/**
 * Sets the default color
 * @param {string} color
 */
function setNavColor(color){
  
  document.querySelector(':root').style.setProperty('--bs-primary-rgb', color)
}
/**
 * @description  Sets the background color with the given Hex. If no argument given, it  will assign white as default.
 * @param {string} colorHex 
 */
function setBgColor(colorHex = PRIMARY_WHITE_H) {
  document.querySelector(':root').style.setProperty('--bs-body-bg', colorHex)
}


let CURRENTLY_BROWSING = ''
/* Note all names will be processed in lower case */
const PROJECT_1_NAME = 'youtubeilist'
const PROJECT_2_NAME = 'project2'
const PROJECT_3_NAME = 'project3'
const ALL_PROJECT_NAMES = ['projects', PROJECT_1_NAME, PROJECT_2_NAME, PROJECT_3_NAME]

const PRIMARY_BLUE = '67, 142, 200'
const PRIMARY_ORANGE = '255, 174, 36'
const PRIMARY_PURPLE ='117, 45, 250'
const PRIMARY_GREEN = '109, 181, 139'
const PRIMARY_RED = '232, 115, 97'
const PRIMARY_DARK = '24, 26, 27'
const PRIMARY_DARK_BROWN = '46, 41, 40'
const PRIMARY_DARK_RED= '170, 40, 0'
const PRIMARY_DARK_H = '#181a1b'
const PRIMARY_WHITE_H = '#ffffff'
const PRIMARY_DARK_BLUE_H ='#18759a'
const PRIMARY_DARK_BLUE_H_H1 = '#343a40'
const LIGHT_GREY_H ='#adadad'
const DARK_GRAY_H ='#41464c'
const PRIMARY_BLUE_H ='#438ec8'
const PRIMARY_LIGHT_BLUE='79, 190, 255'
const PRIMARY_LIGHT_BLUE_H='#4fbeff'
/* styles */
const projectChildVisible = {
  visibility: 'visible', transition: '0.7s', transform: 'scaleY(1)'
}
const projectChildHidden = {
  visibility: 'hidden', transition: '0.7s', transform: 'scaleY(0)'
}
const whiteAndOpacityInstant = {
  opacity: '1',
  color: 'white'
}
const whiteAndOpacityD1 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '1000ms'
}
const whiteAndOpacityD1Filter = {
  opacity: '1',
  color: 'white',
  transitionDelay: '1000ms',
  filter: 'drop-shadow(1px 0px 4px rgb(171, 171, 171))'
}
const whiteAndOpacityD1_5 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '1500ms'
}
const whiteAndOpacityD2 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '2000ms'
}
const whiteAndOpacityD2_5 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '2500ms'
}
const whiteAndOpacityD3 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '3000ms'
}
const whiteAndOpacityD3_5 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '3500ms'
}
const whiteAndOpacityD4 = {
  opacity: '1',
  color: 'white',
  transitionDelay: '4000ms'
}
const noOpacityAndTrans = {
  opacity: '0',
  transition: '1s',
  transitionDelay: 0,
}
const styleNavDividerShow = {
  position: 'absolute',
  opacity: 1,
  width: '0.4em',
  background: 'white',
  height: '90%',
  left: '17em',
  bottom: '3em',
  transition: '1s',
  transitionDelay: '1s',
  transform: 'scale(1,1)',
  transformOrigin: 'center'

}
const styleNavDividerHide = {
  position: 'absolute',
  opacity: 1,
  width: '0.4em',
  background: 'white',
  // height: '0',
  left: '17em',
  bottom: '3em',
  transition: '1s',
  transitionDelay: '0s',
  transform: 'scale(0,1)',
  transformOrigin: '0em 3em'
}


const arrowDisplayEffect = {
  filter: 'drop-shadow(1px 0px 2px rgb(171, 171, 171))',
  opacity: 1,
  color: 'white',
  transition: '2s',
  transitionDelay: '4500ms'

}
const arrowHideEffect = {
  filter: 'None',
  opacity: 0,
  color: 'white',
  transition: '1s',
}


const bgNoOpacity = {
  '--bs-bg-opacity': 0,
  'transition': '1s',
  'background-color': 'rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important',
  'transition-delay' : 0,
}

let bgOpacity = {
  '--bs-bg-opacity': 1,
  'transition': '1s',
  'background-color': 'rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important'
}


function setStyleRecursively(element, attribute, value){
  $(element).css(attribute, value);
  $(element).children().each( function() {
    setStyleRecursively(this, attribute, value);
  }
  )
}
