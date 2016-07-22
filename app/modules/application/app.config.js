(function() {

    'use.strict';

    angular.module('app').config(minhaFuncao);

    minhaFuncao.$inject = ['$stateProvider', '$urlRouterProvider'];

    function minhaFuncao($stateProvider, $urlRouterProvider) {

        $stateProvider.state('main', {
            abstract: true,
            templateUrl: "modules/clientes/views/layout.html"
        }).state('main.listar', {
            templateUrl: "modules/clientes/views/listar.html",
            url: '/listar'
        }).state('main.cadastrar', {
            templateUrl: "modules/clientes/views/cadastrar.html",
            url: '/cadastrar'
        });


        $urlRouterProvider.otherwise('/listar');



    }

})();