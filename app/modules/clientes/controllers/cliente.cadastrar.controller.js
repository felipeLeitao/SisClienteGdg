
(function (){
    //IIFE


    //o modo estrito não deixa vc criar variaveis sem o var
    //não consegue deletar variaveis 
    //não deixa criar funcoes com paraemtros repetidos
    'use strict'

    //Aqui estamos criando o nosso modulo
    angular.module('app').controller('clienteCadastrarCtrl', ctrl);

    ctrl.$inject = ['$state', 'clienteService'];

    function ctrl ($state, clienteService)
    {
        var vm = this;

        vm.cliente = {};

        vm.salvar = function () 
        {
            clienteService.cadastrar(vm.cliente).then(sucesso, erro);

            function sucesso (retorno) 
            {
                alert(retorno.data);
            }

            function erro ()
            {
                alert("DEU RUIM");
            }
        }
    }
} 
)();