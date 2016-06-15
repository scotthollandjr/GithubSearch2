var searchResults = require('./../js/search.js').searchResults;

$(document).ready(function() {
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#printUser').append(username);
    searchResults(username);
  })
})
