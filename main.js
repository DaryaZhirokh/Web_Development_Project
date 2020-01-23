$(document).ready(function(){

  var searchButton = $('#searchButton');
  var searchField = $('#searchField')
  searchButton.on('click', function (e) {
    e.preventDefault()
    console.log("1")
    searchField.toggleClass("searchFieldHidden");
    console.log("2")
  });


});




