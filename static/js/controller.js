/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function($scope) {
    $scope.input_regex = '';
    $scope.input_data = '';
    $scope.modifier = '';
    $scope.func = 'search';
    $scope.links = {};
    $scope.do_parsing = {
        data: function () {
            $scope.input_data = $(".txt-input").val();
            if ($scope.input_regex != '' && $scope.input_data != '' && $scope.func != '' && $scope.func != undefined) {
                var re = $scope.input_regex;
                var data = $scope.input_data;
                var mod = $scope.modifier;
                var func = $scope.func;
                //var lang = $scope.langu;
                var lang = 'Python';
                //alert(lang);
                var dict = {};
            //    if (lang === 'Javascript') {
            //    try {
            //        var regex = new RegExp(re, mod);
            //
            //    if(mod.indexOf('g') === -1) {
            //        var m = regex.exec(data);
            //        dict[m.index] = m[0]
            //    } else {
            //        while (match = regex.exec(data)) {
            //            if (!match) {
            //                break;
            //            }
            //            dict[match.index] = match[0];
            //        }
            //    }
            //    return dict;
            //}catch(e) {
            //    	return {'0': e.message};
            //    }
            //
            //}
            if (lang === 'Python'){

                 $.ajax({
                            type: "POST",
                            url: "/test/",
                            data: {"regex":re, "data":data, "mod":mod, "func":func},
           success: function(data) {
               var repeat = $(data).filter('div#repeat_py').html();
               var code = $(data).filter('div#code_py').html();
            $('#repeatPython').html(repeat);
               $('#code').html(code);
            }
});

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
