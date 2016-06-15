var apiKey = require('./../.env').apiKey;

exports.searchResults = function(username) {
  $.get('http://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    response.forEach(function(entry) {
      console.log(entry);
      $('#printResults').append('<li><p><a href="' + entry.url + '">' + entry.name + '</a><p>' + '</p><p>' + entry.description + '</p></li>');
    });
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
