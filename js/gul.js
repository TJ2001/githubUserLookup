var apiKey = require("./../.env").apiKey;

function User() {
}

User.prototype.getInfo = function(username) {
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
    $(".showName").html("Name: " + response.name);
    $(".publicRepos").html("Number of Public Repos: " + response.public_repos);
    var repoQuantity = response.public_repos;
    $.get("https://api.github.com/users/" + username + "/repos").then(function(repos){
      console.log(repoQuantity)
      for (var i = 0; i < repoQuantity; i++) {
        console.log(i);
        $(".repos").append("<li>" + i + ". " + repos[i].name);
      }
    });
  });
};



exports.userModule = User;
