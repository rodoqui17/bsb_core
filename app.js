'use strict';

angular.module('ethExplorer', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
            }).
            when('/block/:blockId', {
                templateUrl: 'views/blockInfos.html',
                controller: 'blockInfosCtrl'
            }).
            when('/transaction/:transactionId', {
                templateUrl: 'views/transactionInfos.html',
                controller: 'transactionInfosCtrl'
            }).
            when('/address/:addressId', {
                templateUrl: 'views/addressInfo.html',
                controller: 'addressInfoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }])
    .run(function($rootScope) {
        var web3 = new Web3();
       var eth_node_url = 'http://localhost:7545'; // LOCAL
       // var eth_node_url = 'https://boliviagroup.blockchain.azure.com:3200/w8JlZRQPjfIYQ9HLrXsC8ts_';//remoto
        //var eth_node_url 'https://rinkeby.infura.io/v3/55cd959123ad42db9b3009e186c32af3';
	

;


    web3.setProvider(new web3.providers.HttpProvider(eth_node_url));
        $rootScope.web3 = web3;
        function sleepFor( sleepDuration ){
            var now = new Date().getTime();
            while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
        }
        var connected = false;
        if(!web3.isConnected()) {
            $('#connectwarning').modal({keyboard:false,backdrop:'static'}) 
            $('#connectwarning').modal('show') 
        }
    });
