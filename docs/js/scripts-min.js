window.addEventListener("DOMContentLoaded",e=>{window.scrollTo(top),document.body.querySelector("#sideNav")&&new bootstrap.ScrollSpy(document.body,{target:"#sideNav",rootMargin:"0px 0px -40%"});const t=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(e){e.addEventListener("click",()=>{"none"!==window.getComputedStyle(t).display&&t.click()})}),initializeNav(),backgroundChange(),window.addEventListener("load",resizeGrid)});const style=document.createElement("style");document.head.appendChild(style);const styleSheet=style.sheet;function initializeNav(){let e=document.querySelector("#all-projects"),t=document.querySelector("#project-dropdown"),o=document.querySelector("#hidden-nav"),n=document.querySelector("#sideNav");t.addEventListener("mouseover",()=>{Object.assign(document.querySelector("#hidden-nav").style,projectDropdownVisible),setStyleForAll("li.project-child > a",projectChildVisible)}),o.addEventListener("mouseover",()=>{setStyleForAll("li.project-child > a",projectChildVisible),Object.assign(document.querySelector("#hidden-nav").style,projectDropdownVisible)}),e.addEventListener("mouseover",e=>{setStyleForAll("li.project-child > a",projectChildVisible),Object.assign(document.querySelector("#hidden-nav").style,projectDropdownVisible)}),e.addEventListener("mouseleave",collapseDebounce),n.addEventListener("mouseleave",collapseDebounce)}let postProj=!1,firstTimeRunning=!0;function backgroundChange(){document.addEventListener("activate.bs.scrollspy",function(e){projectListItems=document.querySelector("li .project-child"),CURRENTLY_BROWSING=e.relatedTarget.getAttribute("href").toLowerCase().slice(1);let t=e.relatedTarget;if(postProj||currentlyBrowsingProjects()||cleanUpStyling(),"about"===CURRENTLY_BROWSING){if(deviceTransitionAnimate(),firstTimeRunning){Object.assign(document.querySelector(".name-only>h1:first-of-type").style,whiteAndOpacityD1Filter),Object.assign(document.querySelector("h1.text-primary").style,whiteAndOpacityD2_5),setStyleForAll(".name-phone-email~h3, .name-phone-email+h3+p, .name-phone-email~.social-icons",{opacity:1,transform:"translateY(0em)",transitionDuration:"1s",transitionDelay:"1s"}),firstTimeRunning=!1}else Object.assign(document.querySelector(".name-only>h1:first-of-type").style,whiteAndOpacityInstantFilter),setPseudoCSSProperty(".name-only>h1:first-of-type::after","background: white"),document.querySelector(".resume-section h3.mb-3").style.setProperty("transition-delay","0s"),document.querySelector(".name-only>h1+h1").style.setProperty("transition","0s"),document.querySelector("#copyright").style.setProperty("transition","0.5s");setLastNameColor("#a9ffeb"),setCurrentParagraphColor("var(--bs-gray-300)"),setNavAndPrimaryColors("none"),setHyperLinkColor("#a9ffeb"),setHyperLinkHoverColor(PRIMARY_WHITE_H),setHeaderColor(3,"white"),setHeaderColor(2,"lightgrey"),setResumeParagraphColor(LIGHT_GREY_H),document.querySelector("section#gradient-bg").style.setProperty("transform",""),setContentInvisibleNUnanimate("education"),setContentInvisibleNUnanimate("experience")}else"education"===CURRENTLY_BROWSING?(document.querySelector("#sideNav").style.setProperty("background",""),setNavVisible(.3),document.querySelector("#copyright").style.opacity=0,setBg(PRIMARY_LIGHT_GREEN_H),setHeaderColor(1,PRIMARY_DEFAULT_FONT_COLOR_H),setHeaderColor(2,PRIMARY_DEFAULT_FONT_COLOR_H),document.querySelector("section#gradient-bg").style.setProperty("transform","translateY(-100%)"),setNavDividerInvisible(),setNavAndPrimaryColors(PRIMARY_RED),setHeaderColor(3,PRIMARY_RED,!0),setResumeParagraphColor(PRIMARY_DEFAULT_FONT_COLOR_H),setContentVisibleNAnimate(.3),setContentInvisibleNUnanimate("skills")):"experience"===CURRENTLY_BROWSING?(setNavVisible(),setBg(PRIMARY_LIGHT_GREEN_H),setNavDividerInvisible(),setNavAndPrimaryColors(PRIMARY_AQUA_BLUE),setHeaderColor(3,PRIMARY_AQUA_BLUE,!0),setContentVisibleNAnimate(),setUnanimateGrids(),setContentInvisibleNUnanimate("interests")):"skills"===CURRENTLY_BROWSING?(setNavVisible(),setBg(PRIMARY_LIGHT_GREEN_H),setNavAndPrimaryColors(PRIMARY_GREEN),setNavDividerInvisible(),setHeaderColor(3,PRIMARY_DARK_BROWN,!0),setContentVisibleNAnimate()):"interests"===CURRENTLY_BROWSING?(setNavVisible(),setBg(),setNavDividerInvisible(),setBg(PRIMARY_LIGHT_GREEN_H),setNavAndPrimaryColors(PRIMARY_DARK_BROWN),setColor(".grid>#text1 .disc h5","#E6E6E6"),setColor(".grid>#text2 .disc h5","#735C5C"),setColor(".grid>#text3 .disc h5","#E6E6E6"),setContentVisibleNAnimate(),setAnimateGrids()):t.parentElement!==projectListItems&&"projects"!==CURRENTLY_BROWSING||(postProj=!1,isMobile()&&setNavbarDismissed(),setBg(PRIMARY_DARK_H),setNavInvisible(),"projects"===CURRENTLY_BROWSING?projectsIntroAnimate():CURRENTLY_BROWSING===PROJECT_1_NAME?project1Animate():CURRENTLY_BROWSING===PROJECT_2_NAME?project2Animate():CURRENTLY_BROWSING===PROJECT_3_NAME&&project3Animate())})}function projectsIntroAnimate(){Object.assign(document.querySelector("#projects > div.resume-section-content>h2").style,whiteAndOpacityD1),Object.assign(document.querySelector("#projects > div.resume-section-content>h3").style,whiteAndOpacityD1_5),Object.assign(document.querySelector("#projects > div.resume-section-content>p").style,whiteAndOpacityD2),Object.assign(document.querySelector("section.scroll-down-disclaimer").style,arrowDisplayEffect),setStyleForAll("section.scroll-down-disclaimer>*",whiteAndOpacityInstant)}function project1Animate(){Object.assign(document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>h2`).style,whiteAndOpacityD1),Object.assign(document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>h3`).style,whiteAndOpacityD1_5);let e=document.querySelectorAll(`#${PROJECT_1_NAME} > div.resume-section-content>p`);Object.assign(e[0].style,whiteAndOpacityD2),Object.assign(e[1].style,whiteAndOpacityD2),Object.assign(document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>img`).style,whiteAndOpacityD2_5),Object.assign(e[2].style,whiteAndOpacityD3),Object.assign(document.querySelector(`#${PROJECT_1_NAME} > div.resume-section-content>img+p>a`).style,whiteAndOpacityD3)}function project2Animate(){Object.assign(document.querySelector(`#${PROJECT_2_NAME} > div.resume-section-content>h2`).style,whiteAndOpacityD1),Object.assign(document.querySelector(`#${PROJECT_2_NAME} > div.resume-section-content>p.mb-4`).style,{opacity:1,color:"var(--bs-gray-500)",transitionDelay:"1s"}),setStyleForAll(`#${PROJECT_2_NAME} > div.resume-section-content>h4`,whiteAndOpacityD1);let e=document.querySelectorAll(`#${PROJECT_2_NAME} > div.resume-section-content>section`);Object.assign(e[0].style,{transform:"translateY(-4em)",opacity:1,transitionDelay:"1.25s"}),setStyleForAll("#project2 .development-tile>h5",{opacity:1,color:"var(--bs-gray-400)",transitionDelay:"1.5s"}),Object.assign(e[1].style,{transform:"translateY(-4em)",opacity:1,transitionDelay:"1.5s"})}function project3Animate(){Object.assign(document.querySelector(`#${PROJECT_3_NAME} > div.resume-section-content>h2`).style,whiteAndOpacityD1),Object.assign(document.querySelector(`#${PROJECT_3_NAME} > div.resume-section-content>p.mb-4`).style,{opacity:1,color:"var(--bs-gray-500)",transitionDelay:"1s"}),setStyleForAll(`#${PROJECT_3_NAME} > div.resume-section-content>h4`,whiteAndOpacityD1);let e=document.querySelectorAll(`#${PROJECT_3_NAME} > div.resume-section-content>section`);Object.assign(e[0].style,{transform:"translateY(-4em)",opacity:1,transitionDelay:"1.25s"});let t=document.querySelectorAll("#project3 .resume-section-content .development-tile>h5");for(tiles of t)Object.assign(tiles.style,{opacity:1,color:"var(--bs-gray-400)",transitionDelay:"1.5s"});Object.assign(e[1].style,{transform:"translateY(-4em)",opacity:1,transitionDelay:"1.5s"})}function cleanUpStyling(){document.querySelector("button.navbar-toggler").style.visibility="visible",setNavVisible();let e=document.querySelectorAll("h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, .flex-grow-1p>a");for(let t of e)t.style.color=PRIMARY_DARK_BLUE_H_H1,t.style.transition="1s",t.style.transitionDelay="",t.style.filter="";let t=document.getElementById("projects"),o=t.querySelector("div.resume-section-content>h2"),n=t.querySelector("div.resume-section-content>h3");setStyleForAll("#projects>div.resume-section-content p",noOpacityAndTrans),Object.assign(o.style,noOpacityAndTrans),Object.assign(n.style,noOpacityAndTrans);let r=document.getElementById(PROJECT_1_NAME),i=r.querySelector("div.resume-section-content>h2"),s=r.querySelector("div.resume-section-content>h3"),l=r.querySelector("div.resume-section-content>img");Object.assign(i.style,noOpacityAndTrans),Object.assign(s.style,noOpacityAndTrans),Object.assign(l.style,noOpacityAndTrans),setStyleForAll(`#${PROJECT_1_NAME}>div.resume-section-content>p`,noOpacityAndTrans);let c=document.getElementById(PROJECT_2_NAME),a=c.querySelector("div.resume-section-content>p"),y=c.querySelector("div.resume-section-content>h2"),d=c.querySelector("div.resume-section-content>section"),u=c.querySelector("div.resume-section-content>section:nth-of-type(2)");Object.assign(a.style,noOpacityAndTrans),Object.assign(y.style,noOpacityAndTrans),setStyleForAll(`#${PROJECT_2_NAME} > div.resume-section-content>h4`,noOpacityAndTrans),Object.assign(d.style,{transform:"translateY(4em)",opacity:0,transitionDelay:"0"}),setStyleForAll(`#${PROJECT_2_NAME}>.development-tile>h5`,whiteAndOpacityD1_5),Object.assign(u.style,{transform:"translateY(4em)",opacity:0,transitionDelay:"0"});let p=document.getElementById(PROJECT_3_NAME),m=p.querySelector("div.resume-section-content>p"),R=p.querySelector("div.resume-section-content>h2"),A=p.querySelector("div.resume-section-content>section"),b=p.querySelector("div.resume-section-content>section:nth-of-type(2)");Object.assign(m.style,noOpacityAndTrans),Object.assign(R.style,noOpacityAndTrans),setStyleForAll(`#${PROJECT_3_NAME}>div.resume-section-content>h4`,noOpacityAndTrans),Object.assign(A.style,{transform:"translateY(4em)",opacity:0,transitionDelay:"0"}),setStyleForAll(`#${PROJECT_3_NAME} .development-tile>h5`,whiteAndOpacityD1_5),Object.assign(b.style,{transform:"translateY(4em)",opacity:0,transitionDelay:"0"}),Object.assign(document.querySelector("section.scroll-down-disclaimer").style,arrowHideEffect),postProj=!0}function isMobile(){return window.innerWidth<992}function deviceTransitionAnimate(){let e=document.querySelector("#sideNav");isMobile()||"about"!==CURRENTLY_BROWSING?isMobile()&&(toggleCopyright(0),setNavDividerInvisible(),currentlyBrowsingProjects()?setNavInvisible():"about"==CURRENTLY_BROWSING&&(setNavVisible(),e.style.setProperty("background","rgba(213, 228, 230, 0.2)"),e.style.setProperty("-webkit-backdrop-filter","blur(15px)"),e.style.setProperty("backdrop-filter","blur(15px)"))):(setNavInvisible(),Object.assign(document.querySelector("#sideNav-divider").style,styleNavDividerShow),e.style.setProperty("-webkit-backdrop-filter","none"),e.style.setProperty("backdrop-filter","none"),e.style.setProperty("background","none"),toggleCopyright(1))}function currentlyBrowsingProjects(){return ALL_PROJECT_NAMES.includes(CURRENTLY_BROWSING)}function setNavInvisible(e=0){let t=document.querySelector("#sideNav");t.style.setProperty("--bs-bg-opacity","0"),document.querySelector("#sideNav").style.setProperty("-webkit-backdrop-filter","none"),t.style.setProperty("backdrop-filter","none"),t.style.setProperty("transition-delay",`${e}s`)}function setNavDividerInvisible(){Object.assign(document.querySelector("#sideNav-divider").style,styleNavDividerHide)}function setNavVisible(e=0){let t=document.querySelector("#sideNav");t.style.setProperty("--bs-bg-opacity","1"),t.style.setProperty("background-color","none"),t.style.setProperty("transition-delay",`${e}s`)}function setNavAndPrimaryColors(e){document.querySelector(":root").style.setProperty("--bs-primary-rgb",e)}function setBg(e=PRIMARY_WHITE_H){document.body.style.setProperty("background",e)}function setHyperLinkColor(e){document.documentElement.style.setProperty("--bs-link-color",e)}function setHyperLinkHoverColor(e){document.documentElement.style.setProperty("--bs-link-hover-color",e)}function setNavbarDismissed(){document.querySelector("button.navbar-toggler").style.setProperty("visibility","collapse"),document.querySelector("#navbarResponsive").classList.remove("show"),document.querySelector("#navbarResponsive").classList.add("collapse")}function setResumeParagraphColor(e){let t=document.querySelectorAll("#experience>.resume-section-content p, #education>.resume-section-content p");for(p of t)p.style.setProperty("color",e)}function setContentVisibleNAnimate(e=0){let t=document.querySelector(`#${CURRENTLY_BROWSING} .resume-section-content`),o=e;for(c of t.children)c.style.setProperty("transition","0.5s"),c.style.setProperty("transition-delay",`${o}s`),c.style.setProperty("opacity","1"),c.style.setProperty("transform","translateY(0rem)"),o+=.15}function setContentInvisibleNUnanimate(e){let t=document.querySelector(`#${e} .resume-section-content`);for(c of t.children)c.style.setProperty("transition","0.5s"),c.style.setProperty("transition-delay",""),c.style.setProperty("opacity","0"),c.style.setProperty("transform","translateY(4rem)")}function setCurrentParagraphColor(e){let t=document.querySelectorAll(`#${CURRENTLY_BROWSING} p`);for(p of t)p.style.setProperty("color",e)}function setHeaderColor(e,t,o){o?document.querySelector(`h${e}`).style.setProperty("color",`rgb(${t})`):document.querySelector(`h${e}`).style.setProperty("color",t)}function isHoveringProjects(){return isHoveringAllProjects()||isHoveringNavbar()}function isHoveringAllProjects(){return null!==document.querySelector("#all-projects:hover")}function isHoveringNavbar(){return null!==document.querySelector("#sideNav:hover")}function toggleCopyright(e){document.querySelector("#copyright").style.setProperty("opacity",e)}function attemptCollapse(){isHoveringProjects()||(Object.assign(document.querySelector("#hidden-nav").style,projectDropdownHidden),setStyleForAll("li.project-child > a",projectChildHidden))}function setStyleForAll(e,t){let o=document.querySelectorAll(e);for(el of o)Object.assign(el.style,t)}function setColor(e,t){document.querySelector(e).style.color=t}function setLastNameColor(e){document.querySelector(".name-only .text-primary").style.setProperty("color",e)}function resizeGrid(){const e=document.querySelector(".grid"),t=getStyleVal(e,"grid-auto-rows"),o=getStyleVal(e,"grid-row-gap");e.style.gridAutoRows="auto",setStyleForAll(".item.img>.content",{height:""}),e.querySelectorAll(".item.img").forEach(e=>{e.style.gridRowEnd=`span ${Math.floor((e.querySelector(".content").clientHeight+o)/(t+o))}`}),e.querySelectorAll(".item.text").forEach(e=>{e.style.gridRowEnd=`span ${Math.ceil((e.querySelector(".content").clientHeight+o)/(t+o))}`}),setStyleForAll(".item.img>.content",{height:"100%"}),e.removeAttribute("style")}function setAnimateGrids(){let e=document.querySelectorAll(".grid>.item"),t=0;for(item of e)Object.assign(item.style,{transition:"0.75s",transitionDelay:`${t}s`,opacity:1,transform:"translateY(0em)"}),t+=.1}function setUnanimateGrids(){let e=document.querySelectorAll(".grid>.item");for(item of e)Object.assign(item.style,{transition:"0.75s",transitionDelay:0,opacity:0,transform:"translateY(5em)"})}function getStyleVal(e,t){return parseInt(window.getComputedStyle(e).getPropertyValue(t))}let CURRENTLY_BROWSING="";const PROJECT_1_NAME="project1",PROJECT_2_NAME="project2",PROJECT_3_NAME="project3",ALL_PROJECT_NAMES=["projects",PROJECT_1_NAME,PROJECT_2_NAME,PROJECT_3_NAME],PRIMARY_BLUE="67, 142, 200",PRIMARY_ORANGE="255, 174, 36",PRIMARY_PURPLE="117, 45, 250",PRIMARY_GREEN="141, 170, 152",PRIMARY_RED="170, 40, 0",PRIMARY_DARK="24, 26, 27",PRIMARY_DARK_BROWN="38, 27, 51",PRIMARY_DARK_RED="170, 40, 0",PRIMARY_DARK_H="#181a1b",PRIMARY_WHITE_H="#ffffff",PRIMARY_DARK_BLUE_H="#18759a",PRIMARY_DARK_BLUE_H_H1="#343a40",LIGHT_GREY_H="#adadad",DARK_GRAY_H="#41464c",PRIMARY_BLUE_H="#438ec8",PRIMARY_LIGHT_BLUE="79, 190, 255",PRIMARY_LIGHT_BLUE_H="#4fbeff",PRIMARY_DEFAULT_FONT_COLOR_H="#6C757D",PRIMARY_LIGHT_GREEN_H="#f5f7f4",PRIMARY_AQUA_BLUE="62, 171, 196",projectChildVisible={visibility:"visible",transition:"0.3s",transform:"scaleY(1)"},projectChildHidden={visibility:"hidden",transition:"0.3s",transform:"scaleY(0)",transitionDelay:"0.5s"},projectDropdownHidden={height:"0",transition:"0.7s",transitionDelay:"0.5s"},projectDropdownVisible={height:"8em",transition:"0.7s"},whiteAndOpacityInstant={opacity:"1",color:"white"},whiteAndOpacityInstantFilter={opacity:"1",color:"white",transitionDelay:"0ms",filter:"drop-shadow(1px 0px 4px rgb(171, 171, 171))"},whiteAndOpacityD1={opacity:"1",color:"white",transitionDelay:"1000ms"},whiteAndOpacityD1Filter={opacity:"1",color:"white",transitionDelay:"1000ms",filter:"drop-shadow(1px 0px 4px rgb(171, 171, 171))"},whiteAndOpacityD1_5={opacity:"1",color:"white",transitionDelay:"1500ms"},whiteAndOpacityD2={opacity:"1",color:"white",transitionDelay:"2000ms"},whiteAndOpacityD2_5={opacity:"1",color:"white",transitionDelay:"2500ms"},whiteAndOpacityD3={opacity:"1",color:"white",transitionDelay:"3000ms"},whiteAndOpacityD3_5={opacity:"1",color:"white",transitionDelay:"3500ms"},whiteAndOpacityD4={opacity:"1",color:"white",transitionDelay:"4000ms"},noOpacityAndTrans={opacity:"0",transition:"1s",transitionDelay:0},styleNavDividerShow={position:"absolute",opacity:1,width:"0.4em",background:"white",height:"90%",left:"17em",bottom:"3em",transition:"1s",transitionDelay:"1s",transform:"scale(1,1)",transformOrigin:"center"},styleNavDividerHide={position:"absolute",opacity:1,width:"0.4em",background:"white",left:"17em",bottom:"3em",transition:"1s",transitionDelay:"0s",transform:"scale(0,1)",transformOrigin:"0em 3em"},arrowDisplayEffect={filter:"drop-shadow(1px 0px 2px rgb(171, 171, 171))",opacity:1,color:"white",transition:"2s",transitionDelay:"3000ms"},arrowHideEffect={filter:"none",opacity:0,color:"white",transition:"1s"},bgNoOpacity={"--bs-bg-opacity":0,transition:"1s","background-color":"rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important","transition-delay":0};let bgOpacity={"--bs-bg-opacity":1,transition:"1s","background-color":"rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important"};function setPseudoCSSProperty(e,t){for(let o=0;o<styleSheet.cssRules.length;o++)if(styleSheet.cssRules[o].selectorText.replace(" ","")===e)return styleSheet.deleteRule(o),void styleSheet.insertRule(`${e}{${t}}`,o);styleSheet.insertRule(`${e}{${t}}`)}function debounce(e,t=500){let o;return(...n)=>{clearTimeout(o),o=setTimeout(()=>{e.apply(this,n)},t)}}const collapseDebounce=debounce(()=>attemptCollapse()),transitionDebounce=debounce(()=>deviceTransitionAnimate()),gridResizeDebounce=debounce(()=>resizeGrid(),1e3);window.addEventListener("resize",()=>{transitionDebounce(),gridResizeDebounce()});