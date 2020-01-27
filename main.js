$(document).ready(function(){

	var searchButton = $('#searchButton');
	var searchField = $('#searchField')
	searchButton.on('click', function (e) {
		e.preventDefault()
		searchField.toggleClass("searchFieldHidden");
	});

	var serviceItem = $(".services-item");
	var serviceItemTitle = $(".services-item-title");
	var serviceItemText = $(".service-item-text");
	var serviceItemButton = $(".service-item-button");

	serviceItem.on( "mouseenter mouseleave", function(e) {
		console.log("1");
		e.preventDefault()
		$(this).toggleClass("change-services-item");
	});
});


