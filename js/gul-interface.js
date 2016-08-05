var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("form#githubUser").submit(function() {
    event.preventDefault();
    var username = $("#userName").val();
      $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      console.log(response.name);
      $('.showInfo').html(response.name);
    });
  });
});
