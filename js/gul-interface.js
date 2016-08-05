var User = require("./../js/gul.js").userModule;

var gitUser = new User();

var displayName = function(name) {
  $(".showName").html("Name: " + name);
}

$(document).ready(function() {
  $("form#githubUser").submit(function() {
    event.preventDefault();
    var username = $("#userName").val();
    gitUser.getName(username);
    $(".repoURL").html("URL for Repository: " + "<a href=" + response.repos_url + ">" + response.repos_url + "</a>");
    $.get("https://api.github.com/users/" + username + "/repos").then(function(repos){
      console.log(JSON.stringify(repos));
    });
  });
});
