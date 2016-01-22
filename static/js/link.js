//$.ajax({
//  type: "GET",
//  url:"/links",
//  success: function(data) {
//    for (var i = 0; i < data.length; i++) {
//      appendNewTweet(data[i]);
//    }
//  }
//});
//
//function appendNewTweet(tweet) {
//  var newTweet =  "<div class='tweet-container'>" +
//    "<div class='tweet-body'>" + tweet.input_data + "</div>" +
//    "</div>";
//
//  $('#repeat').prepend(newTweet);
//}
$(document).ready(function() {
//function getCookie(name) {
//    var cookieValue = null;
//    if (document.cookie && document.cookie != '') {
//        var cookies = document.cookie.split(';');
//        for (var i = 0; i < cookies.length; i++) {
//            var cookie = jQuery.trim(cookies[i]);
//            // Does this cookie string begin with the name we want?
//            if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                break;
//            }
//        }
//    }
//    return cookieValue;
//}
//var csrftoken = getCookie('csrftoken');

$('#linkbtn').click(function() {
if($('#regex').val() !== null) {
  $.ajax({
    type: "POST",
    url: "/links/",
    contentType: 'application/json',
    data: JSON.stringify({"input_regex": $('#regex').val(), "regex_modifiers": $('#mod').val(),
    "input_data": $('#data').val(), "output":"", "link":"www.foo.com/1"}),
    success: function(data) {
      $('#regex').val('');
      $('#mod').val('');
      $('#input_data').val('');
    }
  })
  }
});

$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }

    $(this).find('.btn').toggleClass('btn-default');

});

// $(".btn-toggle > .btn").click(function() {
//     // whenever a button is clicked, set the hidden helper
//     $("#alignment").val($(this).text());
// });

});

