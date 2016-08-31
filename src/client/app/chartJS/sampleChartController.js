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
        vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    }
})();
