$(document).ready(function() {
  alert("test");
  $(document).on("scroll",onScroll); // Run onScroll function on scroll event
});

// Function to run when user scrolls page (largely courtesy of Stanhub.com)
function onScroll(event) {
  var scrollPosition = $(document).scrollTop(); // get vertical scroll position
  $('banner_navbar a').each(function { // for each link in the navbar
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    // If element top is above scroll position and element bottom is below scroll position
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('banner_navbar a').removeClass("active_banner_link"); // remove class from all navbar links IS THIS NECESSARY??????
      currentLink.addClass("active_banner_link"); // add class to current navbar link
    } else {
      currentLink.removeClass("active_banner_link"); // remove class if not within proper scroll range
    }
  })
}
