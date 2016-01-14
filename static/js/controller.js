/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function ($scope, $Link) {
    $scope.input_regex = '';
    $scope.input_data = '';
    $scope.modifier = '';
    $scope.links = {};
    $scope.do_parsing = {
        data: function () {
            if ($scope.input_regex != '' && $scope.input_data != '') {
                var re = $scope.input_regex;
                var data = $scope.input_data;
                var mod = $scope.modifier;
                var dict = {};
                try {
                    var regex = new RegExp(re, mod);

                if(mod.indexOf('g') === -1) {
                    var m = regex.exec(data);
                    dict[m.index] = m[0]
                } else {
                    while (match = regex.exec(data)) {
                        if (!match) {
                            break;
                        }
                        dict[match.index] = match[0];
                    }
                }
                return dict;
            }catch(e) {
                	return {'0': e.message};
                }

            }

        }
    };

   Tweet.query(function(response) {
    $scope.tweets = response;
  });

  $scope.submitLink = function(input_regex,modifier,input_data) {
    var tweet = new Tweet({text: text});
    tweet.$save(function(){
      $scope.tweets.unshift(tweet);
    })
  };

});
