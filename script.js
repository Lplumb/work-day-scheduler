$(document).ready(function(){
    $("#currentDay").text(moment().format('MMMM Do YYYY'))
    $(".saveBtn").on('click', function(){
        var intel = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        console.log(intel)
        console.log(time)
        localStorage.setItem(time, intel)
    })

    $("#9 .description").val(localStorage.getItem("9"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#10 .description").val(localStorage.getItem("10"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#11 .description").val(localStorage.getItem("11"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#12 .description").val(localStorage.getItem("12"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#13 .description").val(localStorage.getItem("13"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#14 .description").val(localStorage.getItem("14"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#15 .description").val(localStorage.getItem("15"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#16 .description").val(localStorage.getItem("16"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }

    $("#17 .description").val(localStorage.getItem("17"))

    function backgroundUpdate() {
        var currentTime = moment().hours()
        console.log(currentTime)
        $(".time-block").each(function(){
            var id = $(this).attr("id")
            if (id < currentTime) {
                $(this).addClass("past")
            } else if(id === currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }
    
    backgroundUpdate()

})