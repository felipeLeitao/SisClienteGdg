(
    function() {
        'use strict';

        angular.module('app').controller('ClienteCadastrarController', clienteController);

        clienteController.$inject = ['clienteService', '$state'];

        function clienteController(clienteService, $state) {
            //ViewModel -> é um modelo que vai ser trabalhado na tela
            var vm = this;

            vm.cliente = {};

            vm.cadastrar = function() {
                //alert(vm.cliente.nome);
                clienteService.cadastrar(vm.cliente).then(sucesso, erro);

                function sucesso() {
                    alert(vm.cliente.nome + " cadastrado com sucesso.");
                    $state.go('main.listar');
                };

                function erro() {
                    alert("Deu merda.")
                };

            }
        }

    })();