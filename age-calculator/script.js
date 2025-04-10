import $ from 'jquery'
import { DateTime } from 'luxon'

$(function() {
    $(form).on("submit", function (e) {
        e.preventDefault()
        console.log($("#datepicker").val())
    })
})
