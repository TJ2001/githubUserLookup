var apiKey = require("./../.env").apiKey;

function User() {
}



User.prototype.getInfo = function(username) {
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
    $(".showName").html("Name: " + response.name);
    var actualNumber = response.public_repos - 1;
    $(".publicRepos").html("Number of Public Repos: " + actualNumber);
    var repoQuantity = response.public_repos;
    $.get("https://api.github.com/users/" + username + "/repos?page=1&per_page=" + repoQuantity).then(function(repos){
      console.log(repoQuantity)
      for (var i = 1; i < repoQuantity; i++) {
        console.log(i);
        $(".repos").append("<li>" + i + ". " + repos[i].name);
      }
    });
  });
};


exports.userModule = User;
