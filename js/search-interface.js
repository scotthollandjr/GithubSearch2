var searchResults = require('./../js/search.js').searchResults;

$(document).ready(function() {
  $('#resultsButton').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    searchResults(username);
  })
})
