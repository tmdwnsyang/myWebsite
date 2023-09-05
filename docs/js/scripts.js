window.addEventListener("DOMContentLoaded", (event) => {

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
  
  mySpyScroll();

  //! Debug
  window.scrollTo(top);

  backgroundChange();
  window.addEventListener('load', resizeGrid)
  // resizeGrid();
});

/* For the purpose of enabling dynamic css property change for pseudo elements. */
const style = document.createElement("style");
document.head.appendChild(style);
const styleSheet = style.sheet;

// let projectDropTimer = false;
function initializeNav() {
  let allProjectsSection = document.querySelector("#all-projects");
  let projectDropdown = document.querySelector("#project-dropdown");
  let hiddenNav = document.querySelector("#hidden-nav");
  let sideNav = document.querySelector("#sideNav");
  // let allResumes = document.querySelector('#all-resumes');

  /* adds dropdown animation. */
  projectDropdown.addEventListener("mouseover", () => {
    Object.assign(
      document.querySelector("#hidden-nav").style,
      projectDropdownVisible
    );
    setStyleForAll("li.project-child > a", projectChildVisible);
  });
  hiddenNav.addEventListener("mouseover", () => {
    setStyleForAll("li.project-child > a", projectChildVisible);
    Object.assign(
      document.querySelector("#hidden-nav").style,
      projectDropdownVisible
    );
  });
  allProjectsSection.addEventListener("mouseover", (e) => {
    setStyleForAll("li.project-child > a", projectChildVisible);
    Object.assign(
      document.querySelector("#hidden-nav").style,
      projectDropdownVisible
    );
  });
  /* Dropdown effect when mouse is hovered away  */
  allProjectsSection.addEventListener("mouseleave", collapseDebounce);
  sideNav.addEventListener("mouseleave", collapseDebounce);
}

let postProj = false,
  firstTimeRunning = true;
function backgroundChange() {
  // document.addEventListener("activate.bs.scrollspy", function (e) {
    projectListItems = document.querySelector("section#all-projects");
    // CURRENTLY_BROWSING = e.relatedTarget
    //   .getAttribute("href")
    //   .toLowerCase()
    //   .slice(1);
    let element = document.querySelector(`#${CURRENTLY_BROWSING}`);
    /* If currently not viewing any of the project pages */
    if (isViewingGallery()){
      return;
    }
    if (!postProj && !currentlyBrowsingProjects()) {
      cleanUpStyling();
    }
    if (CURRENTLY_BROWSING === "about") {
      deviceTransitionAnimate();

      if (firstTimeRunning) {
        Object.assign(
          document.querySelector(".name-only>h1:first-of-type").style,
          whiteAndOpacityD1Filter
        );
        Object.assign(
          document.querySelector("h1.text-primary").style,
          whiteAndOpacityD2_5
        );

        let introParagraphsQ =
          ".name-phone-email~h3, .name-phone-email+h3+p, .name-phone-email~.social-icons";
        setStyleForAll(introParagraphsQ, {
          opacity: 1,
          transform: "translateY(0em)",
          transitionDuration: "1s",
          transitionDelay: "1s",
        });
        firstTimeRunning = false;
      } else {
        Object.assign(
          document.querySelector(".name-only>h1:first-of-type").style,
          whiteAndOpacityInstantFilter
        );
        setPseudoCSSProperty(
          ".name-only>h1:first-of-type::after",
          "background: white"
        );
        document.querySelector('.resume-section h3.mb-3').style.setProperty('transition-delay', '0s');
        document
          .querySelector(".name-only>h1+h1")
          .style.setProperty("transition", "0s");

        document.querySelector('#copyright').style.setProperty('transition', '0.5s');
      }
      setLastNameColor('#a9ffeb');
      setGradientBgShowAbout();
      setCurrentParagraphColor("var(--bs-gray-300)");
      setNavAndPrimaryColors('none');

      setHyperLinkColor('#a9ffeb');
      setHyperLinkHoverColor(PRIMARY_WHITE_H);
      setHeaderColor(3, "white"); /* light red */
      setHeaderColor(2, "lightgrey");
      setResumeParagraphColor(LIGHT_GREY_H);
      document.querySelector('section#gradient-bg').classList.add('show');
      
      /* Resetting animation for sibling */
      setContentInvisibleNUnanimate('education');
      setContentInvisibleNUnanimate('experience');


    } else if (CURRENTLY_BROWSING === "education") {
      
      setNavVisible(0);
      /* Reset the bg to white and the nav opacity back to 1 */
      document.querySelector('#copyright').style.opacity = 0;
      setBg(PRIMARY_LIGHT_GREEN_H);
      setHeaderColor(1, PRIMARY_DEFAULT_FONT_COLOR_H);
      setHeaderColor(2, PRIMARY_DEFAULT_FONT_COLOR_H);
      setGradientBgHidden();
      setNavDividerInvisible();
      setNavAndPrimaryColors(PRIMARY_RED);
      setHeaderColor(3, PRIMARY_RED, true);
      setResumeParagraphColor(PRIMARY_DEFAULT_FONT_COLOR_H);

      /* Animation */
      setContentVisibleNAnimate(0);
      setContentInvisibleNUnanimate('skills');

    } else if (CURRENTLY_BROWSING === "experience") {
      setNavVisible();
      // Might wanna come back to this
      setGradientBgHidden();
      
      setBg(PRIMARY_LIGHT_GREEN_H);
      
      setNavDividerInvisible();
      setNavAndPrimaryColors(PRIMARY_AQUA_BLUE);
      setHeaderColor(3, PRIMARY_AQUA_BLUE, true);

      /* Animation */
      setContentVisibleNAnimate();
      setUnanimateGrids();
      setContentInvisibleNUnanimate('interests');
    } else if (CURRENTLY_BROWSING === "skills") {
      setNavVisible();
      setGradientBgHidden();
      setBg('PRIMARY_LIGHT_GREEN_H');
      setNavAndPrimaryColors(PRIMARY_GREEN);
      setNavDividerInvisible();
      setHeaderColor(3, PRIMARY_DARK_BROWN, true);
      
      /* Animation */
      setContentVisibleNAnimate();
   
    } else if (CURRENTLY_BROWSING === "interests") {
      setNavVisible();
      setBg('PRIMARY_LIGHT_GREEN_H');
      setBg();
      setNavDividerInvisible();
      setNavAndPrimaryColors('230, 97, 97');
      
      setColor(`.grid>#text1 .disc h5`, "#E6E6E6");
      setColor(`.grid>#text2 .disc h5`, "#735C5C");
      setColor(`.grid>#text3 .disc h5`, "#E6E6E6");

      /* Animation */
      setContentVisibleNAnimate();
      setAnimateGrids();
    } else if (
    /* Note the background uses HEX */
      element.parentElement === projectListItems ||
      CURRENTLY_BROWSING === "projects"
    ) {
      postProj = false;
      /* Hide only for mobiles  */
      if (isMobile()) {
        setNavbarDismissed();
      }
      /* Everything that should apply to ALL project subsections once user is in the projects page. */
      setBg(PRIMARY_DARK_H);
      setNavInvisible();
      /* Now per page behavior */
      if (CURRENTLY_BROWSING === "projects") {
        projectsIntroAnimate();
      } else if (CURRENTLY_BROWSING === PROJECT_1_NAME) {
        project1Animate();
      } else if (CURRENTLY_BROWSING === PROJECT_2_NAME) {
        project2Animate();
      } else if (CURRENTLY_BROWSING === PROJECT_3_NAME) {
        project3Animate();
      }
    }
  // });
}

function projectsIntroAnimate() {
  Object.assign(
    document.querySelector("#projects > div.resume-section-content>h2").style,
    whiteAndOpacityD1
  );
  Object.assign(
    document.querySelector("#projects > div.resume-section-content>h3").style,
    whiteAndOpacityD1_5
  );
  Object.assign(
    document.querySelector("#projects > div.resume-section-content>p").style,
    whiteAndOpacityD2
  );
  /* The arrow container and the arrow itself */
  Object.assign(
    document.querySelector("section.scroll-down-disclaimer").style,
    arrowDisplayEffect
  );
  setStyleForAll("section.scroll-down-disclaimer>*", whiteAndOpacityInstant);
}

function project1Animate() {
  Object.assign(
    document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>h2`)
      .style,
    whiteAndOpacityD1
  );
  Object.assign(
    document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>h3`)
      .style,
    whiteAndOpacityD1_5
  );

  let paragraphs = document.querySelectorAll(
    `#${PROJECT_1_NAME} > div.resume-section-content>p`
  );

  Object.assign(paragraphs[0].style, whiteAndOpacityD2);
  Object.assign(paragraphs[1].style, whiteAndOpacityD2);

  Object.assign(
    document.querySelector(
      `#${PROJECT_1_NAME} > div.resume-section-content>img`
    ).style,
    whiteAndOpacityD2_5
  );

  Object.assign(paragraphs[2].style, whiteAndOpacityD3);
  Object.assign(
    document.querySelector(
      `#${PROJECT_1_NAME} > div.resume-section-content>img+p>a`
    ).style,
    whiteAndOpacityD3
  );
}

function project2Animate() {
  Object.assign(
    document.querySelector(`#${PROJECT_2_NAME} > div.resume-section-content>h2`)
      .style,
    whiteAndOpacityD1
  );
  Object.assign(
    document.querySelector(
      `#${PROJECT_2_NAME} > div.resume-section-content>p.mb-4`
    ).style,
    { opacity: 1, color: "var(--bs-gray-500)", transitionDelay: "1s" }
  );
  setStyleForAll(
    `#${PROJECT_2_NAME} > div.resume-section-content>h4`,
    whiteAndOpacityD1
  );
  let sections = document.querySelectorAll(
    `#${PROJECT_2_NAME} > div.resume-section-content>section`
  );

  Object.assign(sections[0].style, {
    transform: "translateY(-4em)",
    opacity: 1,
    transitionDelay: "1.25s",
  });
  /* "Currently In Development" */
  setStyleForAll("#project2 .development-tile>h5", {
    opacity: 1,
    color: "var(--bs-gray-400)",
    transitionDelay: "1.5s",
  });
  Object.assign(sections[1].style, {
    transform: "translateY(-4em)",
    opacity: 1,
    transitionDelay: "1.5s",
  });
}

function project3Animate() {
  Object.assign(
    document.querySelector(`#${PROJECT_3_NAME} > div.resume-section-content>h2`)
      .style,
    whiteAndOpacityD1
  );
  Object.assign(
    document.querySelector(
      `#${PROJECT_3_NAME} > div.resume-section-content>p.mb-4`
    ).style,
    { opacity: 1, color: "var(--bs-gray-500)", transitionDelay: "1s" }
  );
  setStyleForAll(
    `#${PROJECT_3_NAME} > div.resume-section-content>h4`,
    whiteAndOpacityD1
  );
  let sections = document.querySelectorAll(
    `#${PROJECT_3_NAME} > div.resume-section-content>section`
  );
  Object.assign(sections[0].style, {
    transform: "translateY(-4em)",
    opacity: 1,
    transitionDelay: "1.25s",
  });
  /* "Currently In Development" */

  let developmentTiles = document.querySelectorAll(
    "#project3 .resume-section-content .development-tile>h5"
  );
  for (tiles of developmentTiles) {
    Object.assign(tiles.style, {
      opacity: 1,
      color: "var(--bs-gray-400)",
      transitionDelay: "1.5s",
    });
  }
  Object.assign(sections[1].style, {
    transform: "translateY(-4em)",
    opacity: 1,
    transitionDelay: "1.5s",
  });
}

function cleanUpStyling() {
  // Get the button element by its class name and set its visibility style
  let button = document.querySelector("button.navbar-toggler");
  button.style.visibility = "visible";
  setNavVisible();
  let headings = document.querySelectorAll(
    "h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, .flex-grow-1p>a"
  );

  for (let head of headings) {
    head.style.color = PRIMARY_DARK_BLUE_H_H1;
    head.style.transition = "1s";
    head.style.transitionDelay = "";
    head.style.filter = "";
  }
  /* Resetting all CURRENTLY_BROWSING opacities under Projects section*/
  let projects = document.getElementById("projects");
  let projectsH2 = projects.querySelector("div.resume-section-content>h2");
  let projectsH3 = projects.querySelector("div.resume-section-content>h3");
  setStyleForAll("#projects>div.resume-section-content p", noOpacityAndTrans);
  Object.assign(projectsH2.style, noOpacityAndTrans);
  Object.assign(projectsH3.style, noOpacityAndTrans);
  let project1 = document.getElementById(PROJECT_1_NAME);
  let project1H2 = project1.querySelector("div.resume-section-content>h2");
  let project1H3 = project1.querySelector("div.resume-section-content>h3");
  let project1Img = project1.querySelector("div.resume-section-content>img");

  Object.assign(project1H2.style, noOpacityAndTrans);
  Object.assign(project1H3.style, noOpacityAndTrans);
  Object.assign(project1Img.style, noOpacityAndTrans);
  setStyleForAll(
    `#${PROJECT_1_NAME}>div.resume-section-content>p`,
    noOpacityAndTrans
  );

  /* For project 2 cleaning */
  let project2 = document.getElementById(PROJECT_2_NAME);

  let project2P = project2.querySelector("div.resume-section-content>p");
  let project2H2 = project2.querySelector("div.resume-section-content>h2");
  let project2FirstSection = project2.querySelector(
    "div.resume-section-content>section"
  );
  let project2SecondSection = project2.querySelector(
    "div.resume-section-content>section:nth-of-type(2)"
  );

  Object.assign(project2P.style, noOpacityAndTrans);
  Object.assign(project2H2.style, noOpacityAndTrans);
  setStyleForAll(
    `#${PROJECT_2_NAME} > div.resume-section-content>h4`,
    noOpacityAndTrans
  );
  Object.assign(project2FirstSection.style, {
    transform: "translateY(4em)",
    opacity: 0,
    transitionDelay: "0",
  });
  setStyleForAll(
    `#${PROJECT_2_NAME}>.development-tile>h5`,
    whiteAndOpacityD1_5
  );
  Object.assign(project2SecondSection.style, {
    transform: "translateY(4em)",
    opacity: 0,
    transitionDelay: "0",
  });

  /* For project 3 cleaning */
  let project3 = document.getElementById(PROJECT_3_NAME);

  let project3P = project3.querySelector("div.resume-section-content>p");
  let project3H2 = project3.querySelector("div.resume-section-content>h2");
  let project3FirstSection = project3.querySelector(
    "div.resume-section-content>section"
  );
  let project3SecondSection = project3.querySelector(
    "div.resume-section-content>section:nth-of-type(2)"
  );

  Object.assign(project3P.style, noOpacityAndTrans);
  Object.assign(project3H2.style, noOpacityAndTrans);
  setStyleForAll(
    `#${PROJECT_3_NAME}>div.resume-section-content>h4`,
    noOpacityAndTrans
  );
  Object.assign(project3FirstSection.style, {
    transform: "translateY(4em)",
    opacity: 0,
    transitionDelay: "0",
  });
  setStyleForAll(
    `#${PROJECT_3_NAME} .development-tile>h5`,
    whiteAndOpacityD1_5
  );
  Object.assign(project3SecondSection.style, {
    transform: "translateY(4em)",
    opacity: 0,
    transitionDelay: "0",
  });

  Object.assign(
    document.querySelector("section.scroll-down-disclaimer").style,
    arrowHideEffect
  );

  postProj = true;
}

function isMobile() {
  if (window.innerWidth < 992) {
    return true;
  }
  return false;
}

function isPortrait(){
  // Based on min-width of .resume-overlay
  return window.innerWidth <= 576;
}

/**
 *
 * Turns on the navbar colors on mobile, and turns it off for desktop
 */
function deviceTransitionAnimate() {
  /* Sets the nav color when on mobile. */
  let nav = document.querySelector('#sideNav');
  if (!isMobile() && CURRENTLY_BROWSING === "about") {
    setNavInvisible();
    Object.assign(
      document.querySelector("#sideNav-divider").style,
      styleNavDividerShow
    );
    nav.style.setProperty('-webkit-backdrop-filter', 'none');
    nav.style.setProperty('backdrop-filter', 'none');
    nav.style.setProperty('background', 'none');
    toggleCopyright(1);
  } else if (isMobile()) {
  /* At this point the nav divider should be hidden */
    toggleCopyright(0);
    setNavDividerInvisible();
    if (currentlyBrowsingProjects()) {
      setNavInvisible();
    } else if (CURRENTLY_BROWSING == 'about'){
      setNavVisible();
      nav.style.setProperty('background', 'rgba(213, 228, 230, 0.2)');
      nav.style.setProperty('-webkit-backdrop-filter', 'blur(15px)');
      nav.style.setProperty('backdrop-filter', 'blur(15px)');

    }
  }
}

function currentlyBrowsingProjects() {
  return ALL_PROJECT_NAMES.includes(CURRENTLY_BROWSING);
}
function setNavInvisible(delay = 0) {
  let d =  document.querySelector("#sideNav");
  d.style.setProperty("--bs-bg-opacity", "0");
  document.querySelector('#sideNav').style.setProperty('-webkit-backdrop-filter', 'none');
  d.style.setProperty('backdrop-filter', 'none');
  d.style.setProperty('transition-delay', `${delay}s`)
}
function setNavDividerInvisible() {
  Object.assign(
    document.querySelector("#sideNav-divider").style,
    styleNavDividerHide
  );
}
function setNavVisible(delay = 0) {
  let nav = document.querySelector("#sideNav")
  nav.style.setProperty("--bs-bg-opacity", "1");
  nav.style.setProperty('background-color', 'none');
  nav.style.setProperty('transition-delay', `${delay}s`);
  nav.style.setProperty('background', '');
}

/**
 * Sets the color for navigation other primary elements, such as headers.
 * @param {string} color
 */
function setNavAndPrimaryColors(rgbColor) {
  document
    .querySelector(":root")
    .style.setProperty("--bs-primary-rgb", rgbColor);
}
/**
 * @description  Sets the background color with the given Hex. If no argument given, it  will assign white as default.
 * @param {string} colorHex
 */
function setBg(colorHex = PRIMARY_WHITE_H) {
  document.body.style.setProperty('background', colorHex);
}
function setHyperLinkColor(hexColor) {
  document.documentElement.style.setProperty("--bs-link-color", hexColor);
}
function setHyperLinkHoverColor(hexColor) {
  document.documentElement.style.setProperty("--bs-link-hover-color", hexColor);
}
/**
 * This collapses the content of the navbar (for mobile).
 */
function setNavbarDismissed() {
  document
    .querySelector("button.navbar-toggler")
    .style.setProperty("visibility", "collapse");
  // $('#navbarResponsive').collapse('hide');
  /* In case jQuery goes bust forever. */
  document.querySelector("#navbarResponsive").classList.remove("show");
  document.querySelector("#navbarResponsive").classList.add("collapse");
}

function setResumeParagraphColor(hexColor) {
  let ps = document.querySelectorAll(
    "#experience>.resume-section-content p, #education>.resume-section-content p"
  );
  for (p of ps) {
    p.style.setProperty("color", hexColor);
  }
}
/**
 * Loops through each children elements of resume-section-content, adjusts opacity, translation, and animation. 
 *  
 */
function setContentVisibleNAnimate(delay = 0){
  let resumeSectionContentElem = document.querySelector(`#${CURRENTLY_BROWSING} .resume-section-content`);
  
  let timer = delay;
  for (c of resumeSectionContentElem.children){
    c.style.setProperty('transition', '0.5s');
    // c.style.setProperty('transition-delay', `${timer}s`);
    c.style.setProperty('opacity', '1');
    c.style.setProperty('transform', 'translateY(0rem)');
    timer = timer + 0.15;
  }
}

/**
 * Loops through each children elements of resume-section-content, RESETS opacity, translation, and animation. Used to reset animation when navigating away.
 *  
 */
function setContentInvisibleNUnanimate(sectionID){
  let resumeSectionContentElem = document.querySelector(`#${sectionID} .resume-section-content`);
  for (c of resumeSectionContentElem.children){
    c.style.setProperty('transition', '0.5s');
    c.style.setProperty('transition-delay', '');
    c.style.setProperty('opacity', '0');
    c.style.setProperty('transform', 'translateY(4rem)');
  }
}

function setCurrentParagraphColor(color) {
  let ps = document.querySelectorAll(`#${CURRENTLY_BROWSING} p`);
  for (p of ps) {
    p.style.setProperty("color", color);
  }
}
/**
 *
 * @param {number} hnumber
 * @param {*} color
 * @param {boolean} rgb
 */
function setHeaderColor(hnumber, color, rgb) {
  if (rgb) {
    document
      .querySelector(`h${hnumber}`)
      .style.setProperty("color", `rgb(${color})`);
  } else {
    document.querySelector(`h${hnumber}`).style.setProperty("color", color);
  }
}
/* Returns true if the reader is hovering the navbar or the projects section. */
function isHoveringProjects() {
  return isHoveringAllProjects() || isHoveringNavbar();
}

function isHoveringAllProjects() {
  return document.querySelector("#all-projects:hover") !== null;
}
function isHoveringNavbar() {
  return document.querySelector("#sideNav:hover") !== null;
}
function toggleCopyright(integer){
  document.querySelector('#copyright').style.setProperty('opacity', integer);
  

}
/**
 * Attempts to collapse the projects sub navbar if the mouse is hovered away from the entire navbar. If the mouse is not hovered away, it will try again every x ms.
 */
function attemptCollapse() {

  if (!isHoveringProjects()) {
    Object.assign(
      document.querySelector("#hidden-nav").style,
      projectDropdownHidden
    );
    setStyleForAll("li.project-child > a", projectChildHidden);
  }
}
/**
 *
 * @param {string} queryStr
 * @param {Object} styleObj
 */
function setStyleForAll(queryStr, styleObj) {
  let els = document.querySelectorAll(queryStr);
  for (el of els) {
    Object.assign(el.style, styleObj);
  }
}

function setGradientBgHidden(){
  let l = document.querySelector('section#gradient-bg').classList;
  let copy = [...l];
  copy.forEach((item) => {
    console.log(item);
      l.remove(item);
  })
  switch (CURRENTLY_BROWSING){
    case 'experience': 
        l.add('first');
      break;
    default:
        setGradientHelper(l);  // Must be set to restore back the color
        l.add('default');

  }
  // if (CURRENTLY_BROWSING !== 'experience'){
  //   l.add('default');
  // } else{
  //   l.add('first');
  // }
  let body = document.body;
  body.classList.remove('no-scroll');
  
}

/**
 * Removes `experience` class from gradient bg
 * in (default delay 500ms) to restore the original bg
 */
const setGradientHelper = debounce( (l) => { 
  // We have to remove experience class because in addition to
  // the bg color, the z-index is different. 
  l.remove('experience'); 
  // Add other future classes that have diff colors...
}, 500 );
function setGradientBgShowExp(){
  
  let l = document.querySelector('section#gradient-bg').classList;
  
  // Perform clean up first...
  let copy = [...l];
  copy.forEach((prop) => {
    l.remove(prop);
  });
  
  l.add('first');
  l.add('experience');
  l.add('show');

  // Disable body scrolling
  let body = document.body;
  body.classList.add('no-scroll');
}

function setGradientBgShowAbout(){
  let l = document.querySelector('section#gradient-bg').classList;
  let copy = [...l];
  copy.forEach((prop) => {
    l.remove(prop);
  })
  let body = document.body;
  body.classList.remove('no-scroll');
  l.add('default');
  l.add('show');

}

function setColor(queryStr, color) {
  document.querySelector(queryStr).style.color = color;
}


function setLastNameColor(color){
  document.querySelector(".name-only .text-primary").style.setProperty('color', color);
}

function resizeGrid() {
  const grid = document.querySelector(".grid");
  const rowHeight = getStyleVal(grid, "grid-auto-rows");
  const rowGap = getStyleVal(grid, "grid-row-gap");
  grid.style.gridAutoRows = "auto";

  /* ! Very important to reset the height before proceeding, 
    and setting to 100% after for calculation purposes.
  */
  setStyleForAll('.item.img>.content', { height: ''});

  grid.querySelectorAll(".item.img").forEach((item) => {
    item.style.gridRowEnd = `span ${Math.floor(
      (item.querySelector(".content").clientHeight + rowGap) /
        (rowHeight + rowGap)
    )}`;
  });
  grid.querySelectorAll(".item.text").forEach((item) => {
    item.style.gridRowEnd = `span ${Math.ceil(
      (item.querySelector(".content").clientHeight + rowGap) /
        (rowHeight + rowGap)
    )}`;
  });
  setStyleForAll('.item.img>.content', { height: '100%'});
  grid.removeAttribute("style");
}

function setAnimateGrids() {
  let items = document.querySelectorAll(".grid>.item");
  let delay = 0;
  
  for (item of items) {
    Object.assign(item.style, {
      transition: "0.75s",
      transitionDelay: `${delay}s`,
      opacity: 1,
      transform: 'translateY(0em)',

    });
    delay = delay + 0.10;
  }
}

function setUnanimateGrids() {
  let items = document.querySelectorAll(".grid>.item");
  
  for (item of items) {
    Object.assign(item.style, {
      transition: "0.75s",
      transitionDelay: 0,
      opacity: 0,
      transform: 'translateY(5em)',

    });
  }
}


function getStyleVal(elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
}

let CURRENTLY_BROWSING = "about";
/* Note all names will be processed in lower case */
const PROJECT_1_NAME = "project1";
const PROJECT_2_NAME = "project2";
const PROJECT_3_NAME = "project3";
/* If the user is browsing anywhere outside of these sections, perform styling reset.  */
const ALL_PROJECT_NAMES = [
  "projects",
  PROJECT_1_NAME,
  PROJECT_2_NAME,
  PROJECT_3_NAME,
];

const PRIMARY_BLUE = "67, 142, 200";
const PRIMARY_ORANGE = "255, 174, 36";
const PRIMARY_PURPLE = "117, 45, 250";
const PRIMARY_GREEN = "141, 170, 152";
const PRIMARY_RED = "170, 40, 0";
const PRIMARY_DARK = "24, 26, 27";
const PRIMARY_DARK_BROWN = "38, 27, 51";
const PRIMARY_DARK_RED = "170, 40, 0";
const PRIMARY_DARK_H = "#181a1b";
const PRIMARY_WHITE_H = "#ffffff";
const PRIMARY_DARK_BLUE_H = "#18759a";
const PRIMARY_DARK_BLUE_H_H1 = "#343a40";
const LIGHT_GREY_H = "#adadad";
const DARK_GRAY_H = "#41464c";
const PRIMARY_BLUE_H = "#438ec8";
const PRIMARY_LIGHT_BLUE = "79, 190, 255";
const PRIMARY_LIGHT_BLUE_H = "#4fbeff";
const PRIMARY_DEFAULT_FONT_COLOR_H = "#6C757D";
const PRIMARY_LIGHT_GREEN_H = "#f5f7f4";
const PRIMARY_AQUA_BLUE = "62, 171, 196";
/* styles */
const projectChildVisible = {
  visibility: "visible",
  transition: "0.3s",
  transform: "scaleY(1)",
};
const projectChildHidden = {
  visibility: "hidden",
  transition: "0.3s",
  transform: "scaleY(0)",
  transitionDelay: "0.5s",
};
const projectDropdownHidden = {
  height: "0",
  transition: "0.7s",
  transitionDelay: "0.5s",
};
const projectDropdownVisible = { height: "8em", transition: "0.7s" };
const whiteAndOpacityInstant = {
  opacity: "1",
  color: "white",
};
const whiteAndOpacityInstantFilter = {
  opacity: "1",
  color: "white",
  transitionDelay: "0ms",
  filter: "drop-shadow(1px 0px 4px rgb(171, 171, 171))",
};
const whiteAndOpacityD1 = {
  opacity: "1",
  color: "white",
  transitionDelay: "1000ms",
};
const whiteAndOpacityD1Filter = {
  opacity: "1",
  color: "white",
  transitionDelay: "1000ms",
  filter: "drop-shadow(1px 0px 4px rgb(171, 171, 171))",
};

const whiteAndOpacityD1_5 = {
  opacity: "1",
  color: "white",
  transitionDelay: "1500ms",
};
const whiteAndOpacityD2 = {
  opacity: "1",
  color: "white",
  transitionDelay: "2000ms",
};
const whiteAndOpacityD2_5 = {
  opacity: "1",
  color: "white",
  transitionDelay: "2500ms",
};
const whiteAndOpacityD3 = {
  opacity: "1",
  color: "white",
  transitionDelay: "3000ms",
};
const whiteAndOpacityD3_5 = {
  opacity: "1",
  color: "white",
  transitionDelay: "3500ms",
};
const whiteAndOpacityD4 = {
  opacity: "1",
  color: "white",
  transitionDelay: "4000ms",
};
const noOpacityAndTrans = {
  opacity: "0",
  transition: "1s",
  transitionDelay: 0,
};
const styleNavDividerShow = {
  position: "absolute",
  opacity: 1,
  width: "0.4em",
  background: "white",
  height: "90%",
  left: "17em",
  bottom: "3em",
  transition: "1s",
  transitionDelay: "1s",
  transform: "scale(1,1)",
  transformOrigin: "center",
};
const styleNavDividerHide = {
  position: "absolute",
  opacity: 1,
  width: "0.4em",
  background: "white",
  // height: '0',
  left: "17em",
  bottom: "3em",
  transition: "1s",
  transitionDelay: "0s",
  transform: "scale(0,1)",
  transformOrigin: "0em 3em",
};

const arrowDisplayEffect = {
  filter: "drop-shadow(1px 0px 2px rgb(171, 171, 171))",
  opacity: 1,
  color: "white",
  transition: "2s",
  transitionDelay: "3000ms",
};
const arrowHideEffect = {
  filter: "none",
  opacity: 0,
  color: "white",
  transition: "1s",
};

const bgNoOpacity = {
  "--bs-bg-opacity": 0,
  transition: "1s",
  "background-color":
    "rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important",
  "transition-delay": 0,
};

let bgOpacity = {
  "--bs-bg-opacity": 1,
  transition: "1s",
  "background-color":
    "rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important",
};


function setPseudoCSSProperty(selector, cssPropertyStr) {
  for (let i = 0; i < styleSheet.cssRules.length; i++) {
    if (styleSheet.cssRules[i].selectorText.replace(" ", "") === selector) {
      styleSheet.deleteRule(i);
      styleSheet.insertRule(`${selector}{${cssPropertyStr}}`, i);
      return;
    }
  }
  styleSheet.insertRule(`${selector}{${cssPropertyStr}}`);
}

// Debouncer that resets the timer each time the mouse is hovered out,
// so it can wait after a bit each time.
function debounce(f, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f.apply(this, args);
    }, timeout);
  };
}
const collapseDebounce = debounce(() => attemptCollapse());
const transitionDebounce = debounce(() => deviceTransitionAnimate());
const gridResizeDebounce = debounce(() => resizeGrid(), 1000);
const enableAllTransitionsDebounce = debounce(() => enableAllTransitions(), 400)

window.addEventListener("resize", () => {
  tempDisableAllTransitions();
  transitionDebounce();
  gridResizeDebounce();
  showRotationWarning();
  
  setPersistentBackground();
});

/**
 * Restores the background while viewing gallery
 */
const setPersistentBackground = debounce (() => {
 if (isViewingGallery()){
  showResumePopup();
 }
} )

function enableAllTransitions(){
  document.body.classList.remove('resize-animation-stopper');
}

function tempDisableAllTransitions(){
  document.body.classList.add('resize-animation-stopper');
  enableAllTransitionsDebounce();
}

const showRotationWarning = debounce ( () => {
  if (isViewingGallery() && isPortrait()){
    document.querySelector('.rotation-warning').classList.add('show');
  } else{
    document.querySelector('.rotation-warning').classList.remove('show');
  }
})


function mySpyScroll(){

  

  let timer;
  window.onscroll = function () {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      let section = document.querySelectorAll(".resume-section");
      let sectionsScrollTops = {};
      let difference = (document.documentElement.clientHeight / 1.75);

      Array.prototype.forEach.call(section, function (e) {
        sectionsScrollTops[e.id] = e.offsetTop;
        });
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(sections);
      let idx = 0;
      let navItem = document.querySelector('.nav-item');
      let subNav = navItem.querySelector('.project-child');
      for (id in sectionsScrollTops) {
        if (sectionsScrollTops[id] - difference  <= scrollTop ) {
          if (idx > 5){ // num of items in nav
            // If idx = 6, then leave the last item to be remain activated. 
            
            // Remove active class of the sub nav items as needed
            let active =  subNav.querySelector('.active');
            if (active !== null){
              active.setAttribute('class', 'nav-link js-scroll-trigger' );
            }
          }
          else {
            // If browsing the main nav items, remove accordingly
            navItem.querySelectorAll(".active").forEach(elem => {elem.setAttribute("class", "nav-link js-scroll-trigger")});
          }
          // Update the  active nav.
          navItem
            .querySelector("a[href*=" + id + "]")
            .setAttribute("class", "nav-link js-scroll-trigger active");
          
        } else if (sectionsScrollTops[id] > scrollTop ){
          break;
        }
        
        idx += 1;
      }
      let currentSection = Object.keys(sectionsScrollTops)[idx - 1];
      if (CURRENTLY_BROWSING !== currentSection ){
        console.log(currentSection);
        CURRENTLY_BROWSING = currentSection;
        backgroundChange();
      }
    }, 0);
  };
}


//
function methods(){
  let maxIndx= 3;
  let currentPos = 0;
  let leftArrowElem = document.querySelector('.arrow.left');
  let rightArrowElem = document.querySelector('.arrow.right');
  let innerContentElem = document.querySelectorAll('.inner-content');
  let galleryContainer = document.querySelector('.gallery-container');
  let resumeOverlay = document.querySelector('.resume-overlay');
  let rotationWarning = document.querySelector('.rotation-warning');


  leftArrowElem.addEventListener('click', (e) => {
      document.querySelector('.arrow.right').classList.remove('disabled');

      if ((currentPos === 0)){

        return;
      }
      else{
        if (currentPos === 1){
          document.querySelector('.arrow.left').classList.add('disabled');
        } else {
        document.querySelector('.arrow.left').classList.remove('disabled');
        }
        console.log(currentPos);
        innerContentElem[currentPos].className = 'inner-content'
        currentPos -= 1;
        innerContentElem[currentPos].className = 'inner-content show';
        for (let i = 0; i <= maxIndx; i++){
          innerContentElem[i].style.transform = `translateX(${-currentPos * 100}%)`;
        }
      }
     }
  )
  rightArrowElem.addEventListener('click', (e) => {
    document.querySelector('.arrow.left').classList.remove('disabled');

    if (currentPos === maxIndx){
      return;
    } else {
      if (currentPos === ( maxIndx - 1)){
        document.querySelector('.arrow.right').classList.add('disabled');
      } else {
      document.querySelector('.arrow.right').classList.remove('disabled');
      }

      console.log(currentPos);
      innerContentElem[currentPos].className = 'inner-content';
      currentPos += 1;
      innerContentElem[currentPos].className = 'inner-content show';

      for (let i = 0; i <= maxIndx; i++){
        innerContentElem[i].style.transform = `translateX(${-currentPos * 100}%)`;
      }
    }
  })

  // document.querySelector('#gradient-bg').classList.add('show experience first');

  // let clientDashImg1 = document.querySelector('.triple-card-container > img:first-of-type');
  // clientDashImg1.addEventListener('click', (e)=>{
  //   if (!clientDashImg1.classList.contains('zoom')){
  //     clientDashImg1.classList.add('zoom');
  //   } else{
  //     clientDashImg1.classList.remove('zoom');
  //   }
  // })
  let closeButton = document.querySelector('.close-popup');
  closeButton.addEventListener( 'click' , (e) => {
    hideResumePopup();
  })

  let firstResumeBlock = document.querySelector('.resume-block:nth-of-type(1)');
  firstResumeBlock.addEventListener('click', () => {
    if (!isPortrait()){
      showResumePopup();
    } else{
      // disclaimer to rotate phone
      // 1. show resume overlay
      resumeOverlay.classList.add('show');
      resumeOverlay.classList.add('warning');
      
      // 2. show rotation-warning
      rotationWarning.classList.add('show');
      // 3. reset it after a bit.
      setTimeout(() => {
        resumeOverlay.classList.remove('warning');
        resumeOverlay.classList.remove('show');
        rotationWarning.classList.remove('show');
      }, 3000)
    }
  })
  function showResumePopup(){
    
    // 2. show gradient-bg
    setGradientBgShowExp();
    
    // 1. show resume overlay
    let rClassList = resumeOverlay.classList;
    let gClassList = galleryContainer.classList;
    rClassList.contains('show')? null : rClassList.add('show');
    gClassList.contains('show')? null : gClassList.add('show');
     // 3. disable scrolling
     document.body.classList.add('no-scroll');
     
     // 4. show sidenav
    //  setNavVisibilityOff();
    setNavInvisible();
  }
  function hideResumePopup(){
     // 1. hide resume overlay
     galleryContainer.classList.remove('show');
     resumeOverlay.classList.remove('show');
 
     // 2. hide gradient-bg
     setGradientBgHidden();
     
     // 3. enable scrolling
     document.body.classList.remove('no-scroll');

     // 4. show navbar
    //  setNavVisibilityOn();
    setNavVisible();

  }
  let clientDashImgs = document.querySelectorAll('.triple-card-container > img');
  let tripleCardContainer = document.querySelector('.triple-card-container');
  // for (let elem of clientDashImgs){
  //   elem.addEventListener('click', (e)=>{

  //     if (!elem.classList.contains('zoom')){
  //       clientDashImgs.forEach((el) => {
  //         el.classList.remove('zoom');
  //       })
  //       elem.classList.add('zoom');
  //     } else{
  //       elem.classList.remove('zoom');
  //     }

  //   })
    // tripleCardContainer.addEventListener('mouseleave', (e) => {
    //   clientDashImgs.forEach((el) => {
    //     el.classList.remove('zoom');
    //   })
    // })
  // }
  function isViewingGallery(){
    return document.querySelector('.gallery-container').classList.contains('show');

  }
  
  return {isViewingGallery, showResumePopup};
}
const {isViewingGallery, showResumePopup} = methods();
function setNavVisibilityOff(){
  let sideNav = document.querySelector('#sideNav');
  sideNav.classList.add('hide');
}
function setNavVisibilityOn(){
  let sideNav = document.querySelector('#sideNav');
  sideNav.classList.remove('hide');
}