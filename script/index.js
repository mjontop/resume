let resizer = () => {
	if ($(window).width() < 575) {
		$("#bottom").removeClass("container");
	} else {
		$("#bottom").addClass("container");
	}
};

$(window).on("resize", resizer);
