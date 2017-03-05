(function() {
    'use strict';

    angular.module('app').service('clienteService', clienteService);

    clienteService.$inject = ['$http'];

    function clienteService($http) {

        var api = 'http://sisclientes.azurewebsites.net/api/cliente';

        this.cadastrar = function(cliente) {
            return $http({
                url: api,
                method: 'POST',
                data: cliente
            });
        }

        this.listar = function(cliente) {
            return $http({
                url: api,
                method: 'GET',
                data: cliente
            });

        }

    }

})();