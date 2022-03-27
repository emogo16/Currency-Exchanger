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
    let total = $('#totalAmount').val();
    clearFields();
    let promise = CurrencyExchanger.calculateExchange(start, option, total);
    promise.then(function(response) {
      const body=JSON.parse(response);
      console.log(body);
      $('.calculateMath').text(`Your total of ${toatl} in ${start} is equal to ${body.conversion_result} in ${option} copnverts to ${body.conversion_rate}.`);
    }, function(error) {
      $('.errors').text(`There is an error with your input....${error}`)
    });
  });
});