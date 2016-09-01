(function () {
    'use strict';

    angular
        .module('app.nvD3')
        .controller('SampleChartController', SampleChartController);

    SampleChartController.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function SampleChartController($scope, dataservice, logger) {
        var vm = this;
        vm.title = 'NvD3-Sample';
        var data = dataservice.getSomeAwesomeData();
        var values = [];
        for (var index = 0; index < data[0].values.length; index++) {
            var value = { 'x': data[0].labels[index], 'y': data[0].values[index] };
            values.push(value);
        }
        vm.data = [{
            key: data[0].title,
            values: values
        }];
        vm.options = {
            chart: {
                type: 'lineChart',
                height: 600,
                margin: {
                    top: 20,
                    right: 40,
                    bottom: 60,
                    left: 90
                },

                showValues: true,
                transitionDuration: 500,
                xAxis: {
                    axisLabel: data[0].xaxis
                },
                yAxis: {
                    axisLabel:  data[0].yaxis,
                    axisLabelDistance: 30
                }
            }
        };
    }
})();
