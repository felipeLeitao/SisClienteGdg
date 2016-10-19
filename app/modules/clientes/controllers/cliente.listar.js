(function() {
    'use strict';

    angular.module('app').controller('clienteListarController', clienteListarController);

    clienteListarController.$inject = ['clienteService'];

    function clienteListarController(clienteService) {

        var vm = this;

        vm.clientes = [];

        clienteService.listar().then(sucesso, erro);

        function sucesso(retorno) {
            vm.clientes = retorno.data;
        }

        function erro() {
            alert('Deu Merda!!!');
        }


    };


})();