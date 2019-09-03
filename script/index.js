$(window).on("resize", function() {


	if ($(window).width() < 575) {
		$("#bottom").removeClass("container");
	} else {
		$("#bottom").addClass("container");
	}
});
