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
		e.preventDefault()
		$(this).toggleClass("change-services-item");
	});

	var canvas = document.getElementById("figure");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(370, 0);
	ctx.lineTo(370, 175);
	ctx.lineTo(0, 210);
	ctx.lineTo(0, 0);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = '#3949ab';
	ctx.fill();

var canvas2 = document.getElementById("figure2");
	var ctx2 = canvas2.getContext("2d");

	ctx2.beginPath();
	ctx2.moveTo(0, 0);
	ctx2.lineTo(370, 0);
	ctx2.lineTo(370, 175);
	ctx2.lineTo(0, 210);
	ctx2.lineTo(0, 0);
	ctx2.closePath();
	ctx2.stroke();
	ctx2.fillStyle = '#3949ab';
	ctx2.fill();

	var canvas3 = document.getElementById("figure3");
	var ctx3 = canvas3.getContext("2d");

	ctx3.beginPath();
	ctx3.moveTo(0, 0);
	ctx3.lineTo(370, 0);
	ctx3.lineTo(370, 175);
	ctx3.lineTo(0, 210);
	ctx3.lineTo(0, 0);
	ctx3.closePath();
	ctx3.stroke();
	ctx3.fillStyle = '#3949ab';
	ctx3.fill();

});


