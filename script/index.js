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

$(document).ready(() => {
    var open = "home"

    $("#navhome").click(() => {
        if (open !== "home") {
            $(".hiding").slideUp()
            $(".intro").slideDown()
            open = "home"
        }
    })
    $("#navuser").click(() => {
        if (open !== "user") {
            $(".user").removeClass("d-none")

            $(".hiding").slideUp("fast")
            $(".user").slideDown()
            open = "user"
        }
    })
    $("#navcontact").click(() => {
        if (open !== "contact") {
            $(".contact").removeClass("d-none")
            $(".hiding").slideUp("fast")
            $(".contact").slideDown()
            open = "contact"
        }
    })
})
