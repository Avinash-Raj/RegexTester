/**
 * Created by Avinash on 30/12/15.
 */

var app = angular.module('regex_tester', []);

app.controller('MainCtrl', function ($scope) {
    var _data = '';
    $scope.do_parsing = {

        data: function(newData) {
            return arguments.length ? (_data = newData) : _data;
        }
    };
});