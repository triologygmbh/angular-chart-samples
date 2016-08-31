(function () {
    'use strict';

    angular
        .module('app.chartJSSample')
        .controller('chartJSSample', chartJSSample);

    chartJSSample.$inject = ['dataservice'];
    /* @ngInject */
    function chartJSSample(dataservice) {
        var vm = this;
        vm.title = 'Angular-Chart.js Sample';
        var chartData = dataservice.getSomeAwesomeData();
        vm.labels = chartData[0].labels;
        vm.values = [chartData[0].values];     
    }
})();
