// alert("stuff");

$(document).ready(function() {
  var pageAnchors = $("[class='anchor']");
  var numAnchors = pageAnchors.length;
  // console.log($(pageAnchors).length);
  // console.log(pageAnchors);
  // console.log(numAnchors);
  var anchorPositions = new Array(numAnchors);
  for (var i = 0;i<numAnchors;i++)
  {
    // $(pageAnchors)[i].show();
    anchorPositions[i] = pageAnchors[i].offsetParent.offsetTop;
    // $(anchorPositions)[i] = $(pageAnchors)[i].offset();
    console.log(i + ": " + anchorPositions[i]);
  }

// EVERYTHING WORKS ABOVE HERE...

  // console.log($(pageAnchors).length());
  // var numAnchor = $("[class='anchor']").length();
  // var anchorPositions[$("[class='anchor']").length()];
  // anchorPositions[0] = $("[class='anchor']")[0].
  // var anchorPositions;

  // $("[class='anchor']").each(function(index) {
  //   console.log(index + ": " + $(this).text());
  //   var currentPosition = $(this).offset();
  //   console.log(currentPosition);
  //   // anchorPositions.push(currentPosition);
  //   // anchorPositions.push($(this).position());
  // });

  $(document).on("scroll",onScroll); // Run onScroll function on scroll event
});
//
// Function to run when user scrolls page (largely courtesy of Stanhub.com)
function onScroll(event) {
  var scrollPosition = $(document).scrollTop(); // get vertical scroll position
  // alert("test");
  for (var i = 0;i<numAnchors;i++)
  {
    console.log(index + ": " + $(this).text());
  }
  $("#banner_navbar a").each(function(index) {
    console.log(index + ": " + $(this).text());
    var currentLink = $(this);
    // console.log($(currentLink).attr("href"));
    // console.log($(currentLink).attr("href").offset());
    var refElement = $(currentLink).attr("href");
    // $("a" refElement).show();
    // var testPosition = $(refElement).position();
    // $(refElement).hide();
    // console.log($(refElement.position()));
    // var testVar = refElement.position();
    // console.log(testVar);
    // If element top is above scroll position and element bottom is below scroll position
    // if ($(refElement).position().top() <= scrollPosition && $(refElement).position().top() + $(refElement).height() > scrollPosition) {
      // console.log(scrollPosition);
    // }
  });
  // $("#banner_navbar a").each(function { // for each link in the navbar
    // alert("test2");
    // var currentLink = $(this);
    // var refElement = $(currentLink.attr("href"));
    // If element top is above scroll position and element bottom is below scroll position
    // if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
    //   $('banner_navbar a').removeClass("active_banner_link"); // remove class from all navbar links IS THIS NECESSARY??????
    //   currentLink.addClass("active_banner_link"); // add class to current navbar link
    // } else {
    //   currentLink.removeClass("active_banner_link"); // remove class if not within proper scroll range
    // }
  // })
}
