(function (angular) {
    'use strict';

    angular.module('RSSFeedApp', []);
    angular.module('RSSFeedApp')
        .controller("FeedCtrl", function ($http) {
            var vm = this;
            $http.get('xml/faro.xml').then(function (response) {
                vm.xml = response.data
                var x2js = new X2JS()
                vm.items = x2js.xml_str2json(vm.xml)
                console.log(vm.items)
            })
        });
})(angular);