let resizer = () => {
	pixel = ($("#myimg").width() - $("#img").width()) / 2;

	$("#img").css("margin-left", pixel);
	if ($(window).width() < 575) {
		$("#bottom").removeClass("container");
	} else {
		$("#bottom").addClass("container");
	}
};

$(window).on("resize", resizer);
