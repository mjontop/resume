let resizer = () => {
	pixel = ($("#myimg").width() - $("#img").width()) / 2

	$("#img").css("margin-left", pixel)
	if ($(window).width() < 575) {
		$("#bottom").removeClass("container")
	} else {
		$("#bottom").addClass("container")
	}
}

$(window).on("resize", resizer)

$(document).ready(function() {
	var open = "home"

	$("#navhome").click(function() {
		if (open !== "home") {
			$(".hiding").slideUp()
			$(".intro").slideDown()
			open = "home"
		}
	})
	$("#navuser").click(function() {
		if (open !== "user") {
			$(".user").removeClass("d-none")
			$(".contact").removeClass("d-none")
			$(".hiding").slideUp()
			$(".user").slideDown()
			open = "user"
		}
	})
	$("#navcontact").click(function() {
		if (open !== "contact") {
			$(".user").removeClass("d-none")
			$(".contact").removeClass("d-none")
			$(".hiding").slideUp()
			$(".contact").slideDown()
			open = "contact"
		}
	})
})
