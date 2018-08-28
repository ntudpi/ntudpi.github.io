var $ = jQuery = require('jquery');

$(function() {
  var topoffset = 50;

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function() {
        console.log('Service Worker Active');
      })
  }
}); //Page Ready
