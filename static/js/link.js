$.ajax({
  type: "GET",
  url:"/links",
  success: function(data) {
    for (var i = 0; i < data.length; i++) {
      appendNewTweet(data[i]);
    }
  }
});

function appendNewTweet(tweet) {
  var newTweet =  "<div class='tweet-container'>" +
    "<div class='tweet-body'>" + tweet.input_data + "</div>" +
    "</div>";

  $('#repeat').prepend(newTweet);
}

$('#link').click(function() {
  $.ajax({
    type: "POST",
    url: "/links",
    contentType: 'application/json',
    data: JSON.stringify({"input_regex": $('#regex').val(), "regex_modifiers": $('#mod').val(),
    "input_data": $('#input_data').val(), "output":"", "link":""}),
    success: function(data) {
      //appendNewTweet(data);
      $('#regex').val('');
      $('#mod').val('');
      $('#input_data').val('');
    }
  })
});