$(document).ready(function () {
    $(".input-field").focusout(function () {
        // Make floating label more accurate
        var inputValue = $(this).val();
        if (inputValue === "") {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    })
})