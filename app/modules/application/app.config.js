
(function (){
    //IIFE


    //o modo estrito não deixa vc criar variaveis sem o var
    //não consegue deletar variaveis 
    //não deixa criar funcoes com paraemtros repetidos
    'use strict'

    //Aqui estamos criando o nosso modulo
    angular.module('app').config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config ($urlRouterProvider, $stateProvider)
    {
        //aqui estamos definindo a rota padrão da aplicação
        $urlRouterProvider.otherwise('/cadastrar');

        //aqui definimos cada rota da minha aplicação
        $stateProvider.state('main', 
        {
            templateUrl : 'modules/clientes/views/layout.html',
            abstract : true
        }).state('main.listar', 
        {
            templateUrl : 'modules/clientes/views/listar.html',
            url : '/listar',
            cache : false
        }).state('main.cadastrar', 
        {
            templateUrl : 'modules/clientes/views/cadastrar.html',
            url : '/cadastrar',
            cache : false
        })
    }
} 
)();