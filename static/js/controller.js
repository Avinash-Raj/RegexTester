/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function ($scope) {
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

                if (lang === 'Python') {

                    $.ajax({
                        type: "POST",
                        url: "/test/",
                        data: {"regex": re, "data": data, "mod": mod, "func": func},
                        success: function (data) {
                            var repeat = $(data).filter('div#repeat_py').html();
                            var repeat_group = $(data).filter('div#group_py').html();
                            var code = $(data).filter('div#code_py').html();
                            var count = $(data).filter('div#count').text();
                            var traceback = $(data).filter('.traceback').html();
                            if (traceback !== '' && traceback !== undefined) {
                                if (/<pre>\s*(None)?\s*<\/pre>/.test(traceback)){
                                    $('div.results').text('No match');
                                    $('#code').html('');
                                }else {
                                    $('div.results').text('error');
                                    $('#code').html(traceback);
                                }
                                $('#repeatPython').html('');

                            }
                            else{
                                if (count == 1) {
                                    $('div.results').text('1 match');
                                }else {
                                    $('div.results').text(count + ' matches');
                                }
                                if(repeat !== '' && repeat !== undefined) {
                                    $('#repeatPython').html(repeat);
                                }else{
                                    $('#repeatPython').html(repeat_group);
                                }

                                $('#code').html(code);
                            }
                        }
                    });

                }
            }

        }
    };

});
