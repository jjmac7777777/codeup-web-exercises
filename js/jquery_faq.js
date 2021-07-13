"use strict"
$(document).ready(function() {
    alert("Source: https://www.nps.gov/aboutus/faqs.htm");
    $('dd').addClass('invisible')
    $('#button').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });
});