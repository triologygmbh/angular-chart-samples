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
        vm.labels = [chartData[0].labels];
        vm.series = chartData[0].title;
        vm.values = [chartData[0].values];
        //vm.labels = ["A", "B", "C", "D", "E"];
        //vm.values = [[154, 31, 17, 4, 1]];
      
    }
})();
