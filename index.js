(function () {
    'use strict';

    angular
        .module('RSSFeedApp', ['ngSanitize'])
        .component('rssNews', {
            bindings: {
                xml: '@'
            },
            controller: FeedCtrl,
            controllerAs: 'vm',
            templateUrl: 'templates/rss-news/rss-news.html',
            link: FeedCtrl
        })

    function FeedCtrl($http, $window) {
        var vm = this

        vm.$onInit = activate

        function activate() {
            $http.get(vm.xml).then(xmlToJson)
        }

        function xmlToJson(response) {
            vm.xml = response.data
            var x2js = new $window.X2JS()
            vm.items = x2js.xml_str2json(vm.xml)
            console.log(vm.items)
        }
    }
})()