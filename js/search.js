var apiKey = require('./../.env').apiKey;

exports.searchResults = function(username) {
  $.get('http://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    var responses = response;
    responses.forEach(function(entry) {
      console.log(entry);
      $('#printResults').append('<li><p><a href="' + entry.html_url + '">' + entry.name + '</a><p>' + '</p><p>'+ entry.description + '<p>Created on: ' + entry.created_at + '</p></li>');
    });
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
