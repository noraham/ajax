"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    evt.preventDefault(); //required, keeps the browser from navigating to new page
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', fillFortune);
}

function fillFortune(result) {
    $('#fortune-text').html(result);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, displayForcast);
}

function displayForcast(results) {
    $('#weather-info').html(results['forecast']);
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()

    }

    // TODO: show the result message after your form
    $.post("/order-melons.json", formInputs, showOrder);


    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

function showOrder(results) {
    $('#order-status').html(`${results['code']}, ${results['msg']}`);
}

$("#order-form").on('submit', orderMelons);


