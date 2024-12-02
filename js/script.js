function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Animate on scroll
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.top > window.innerHeight;
}

function addClassToVisibleElements() {
  var aosElements = document.querySelectorAll(".aos");
  aosElements.forEach(function (aosElement) {
    if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
    else aosElement.classList.remove("ed");
  });
}

document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();

// Highlight the current page button
//document.addEventListener("DOMContentLoaded", () => {
//    const navLinks = document.querySelectorAll(".topnav a");
//    const currentPage = window.location.pathname;
//
//    navLinks.forEach(link => {
//      if (link.href.includes(currentPage)) {
//        link.classList.add("active");
//      } else {
//        link.classList.remove("active");
//      }
//    });
//  });
