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
        // code needed to display the sample chart
        vm.chartOptions = {
                    title: {
                        text: chartData[0].title
                    },
                    xAxis: {
                        title: {text: chartData[0].xaxis},
                        categories: chartData[0].labels
                    },
                    yAxis: {
                        title: {text: chartData[0].yaxis}
                    },

                    series: [{
                        data: chartData[0].values,
                        showInLegend:false
                    }]
                };
    }
})();
