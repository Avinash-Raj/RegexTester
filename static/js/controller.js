/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function($scope) {
    $scope.input_regex = '';
    $scope.input_data = '';
    $scope.modifier = '';
    $scope.langu = 'Javascript';
    $scope.links = {};
    $scope.do_parsing = {
        data: function () {
            if ($scope.input_regex != '' && $scope.input_data != '' && $scope.langu != '' && $scope.langu != undefined) {
                var re = $scope.input_regex;
                var data = $scope.input_data;
                var mod = $scope.modifier;
                //var lang = $("#alignment").val();
                var lang = 'Python';
                //alert(lang);
                var dict = {};
                if (lang === 'Javascript') {
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

            }else if (lang === 'Python'){

              alert('Lang choosen is python');

            }
            }

        }
    };

//   Link.query(function(response) {
//    $scope.tweets = response;
//  });
//
//  $scope.submitLink = function(input_regex,modifier,input_data) {
//    var link = new Link({regex: input_regex, modifier: modifier, data: input_data});
//    link.$save(function(){
//      $scope.links.unshift(link);
//    })
//  };

});
