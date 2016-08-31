(function () {
    'use strict';

    angular
        .module('app.chartJSSample')
        .controller('chartJSSample', chartJSSample);

    chartJSSample.$inject = ['dataservice'];
    /* @ngInject */
    function chartJSSample(dataservice) {
        var vm = this;
        vm.data = dataservice.getSomeAwesomeData();
       }
})();
