import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './css/style.css';
import './css/style.css';
import $ from 'jquery';
import CurrencyExchanger from './business.js';

function clearFields() {
  $('#calculate').val("");
  $('#dropDown').val("");
  $('#totalAmount').val("");
  $('.errors').text("");
  $('.calculateMath').text("");
}

$(document).ready(function() {
  $('#math').click(function() {
    let start = $('#calculate').val();
    let option = $('#dropDown').val();
    clearFields();
    let promise = CurrencyExchanger.calculateExchange(start, option);
    promise.then(function(response) {
      const body=JSON.parse(response);
      $('.calculatedMath').text(`${start}USD is equal to ${body.conversion_result} in ${option}.`);
    }, function(error) {
      $('.errors').text(`There is an error with your input....${error}`)
    });
  });
});