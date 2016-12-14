
(function (){
    //IIFE


    //o modo estrito não deixa vc criar variaveis sem o var
    //não consegue deletar variaveis 
    //não deixa criar funcoes com paraemtros repetidos
    'use strict'

    //Aqui estamos criando o nosso modulo
    angular.module('app').service('clienteService', service);

    service.$inject = ['$http', 'url'];

    function service ($http, url)
    {
        this.cadastrar = function (cliente) 
        {
            return $http(
                {
                    url: url,
                    method: 'POST',
                    data: cliente
                });
        }
    }
} 
)();