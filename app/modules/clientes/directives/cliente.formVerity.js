
(function (){
    //IIFE

    //o modo estrito não deixa vc criar variaveis sem o var
    //não consegue deletar variaveis 
    //não deixa criar funcoes com paraemtros repetidos
    'use strict'

    //Aqui estamos criando o nosso modulo
    angular.module('app').directive('formVerity', directive);

    function directive () 
    {
        return {
            templateUrl : 'modules/clientes/views/form-cliente.html',
            scope : false,
            restrict : 'AE'
        } 
    }

} 
)();