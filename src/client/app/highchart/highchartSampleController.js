(function () {
    'use strict';

    angular
        .module('app.highchart')
        .controller('highchartSampleController', highchartSampleController);

    highchartSampleController.$inject = ['dataservice'];
    /* @ngInject */
    function highchartSampleController(dataservice) {
        var vm = this;
        vm.title = 'Highchart Sample';
        var chartData = dataservice.getSomeAwesomeData();
        // Sample data for pie chart
        vm.chartOptions = {
                    title: {
                        text: chartData[0].title
                    },
                    xAxis: {
                        categories: chartData[0].labels
                    },

                    series: [{
                        data: chartData[0].values
                    }]
                };
    }
})();
