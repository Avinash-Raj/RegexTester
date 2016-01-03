/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function ($scope) {
    $scope.input_regex = '';
    $scope.input_data = '';
    $scope.modifier = '';
    $scope.do_parsing = {
        data: function () {
            if ($scope.input_regex != '' && $scope.input_data != '') {
                //return $scope.input_regex + ' | ' + $scope.input_data;
                var re = $scope.input_regex;
                var data = $scope.input_data;
                var mod = $scope.modifier;
                var match = new RegExp(re, mod).exec(data);
                var dict = {};
                while (match != null || match != undefined) {
                    dict[match.index] = match[0]
                }

            }

        }
    };
});