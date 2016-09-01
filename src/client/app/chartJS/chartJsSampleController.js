(function () {
    'use strict';

    angular
        .module('app.chartJSSample')
        .controller('ChartJSSampleController', ChartJSSampleController);

    ChartJSSampleController.$inject = ['dataservice'];
    /* @ngInject */
    function ChartJSSampleController(dataservice) {
        var vm = this;
        vm.title = 'Angular-Chart.js Sample';
        var chartData = dataservice.getSomeAwesomeData();
        vm.labels = chartData[0].labels;
        vm.values = [chartData[0].values];
    }
})();
