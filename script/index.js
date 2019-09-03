$(window).on("resize", function() {
	console.log($(window).width() < 575);

	if ($(window).width() < 575) {
		$("#bottom").removeClass("container");
	} else {
		$("#bottom").addClass("container");
	}
});
