var User = require("./../js/gul.js").userModule;
var apiKey = require("./../.env").apiKey;

var gitUser = new User();

var displayName = function(name) {
  $(".showName").html("Name: " + name);
};

// $(document).ready(function() {
//   $("form#githubUser").submit(function() {
//     event.preventDefault();
//     var username = $("#userName").val();
//     gitUser.getName(username);
//   });
// });


$(document).ready(function() {
  $("form#githubUser").submit(function() {
    event.preventDefault();
    var username = $("#userName").val();
    gitUser.getInfo(username);
    // .then(gitUser.getRepo(username));
  });
});
