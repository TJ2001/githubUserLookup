var apiKey = require("./../.env").apiKey;

function User() {
  this.answer;
}

User.prototype.getName = function(username) {
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
  console.log(JSON.stringify(response));
  console.log(response.repos_url);
  $(".showName").html("Name: " + response.name);
  $(".publicRepos").html("Number of Public Repos: " + response.public_repos);
  });
};

exports.userModule = User;
