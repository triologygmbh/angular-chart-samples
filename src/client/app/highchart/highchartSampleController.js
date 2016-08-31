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

        // Sample data for pie chart
        vm.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                };
    }
})();
