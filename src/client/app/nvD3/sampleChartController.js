(function () {
    'use strict';

    angular
        .module('app.nvD3')
        .controller('sampleChartController', sampleChartController);

    sampleChartController.$inject = ['dataservice'];
    /* @ngInject */
    function sampleChartController(dataservice) {
        var vm = this;
        vm.title = 'NvD3-Sample';
        vm.data = dataservice.getSomeAwesomeData();
        vm.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function (d) { return d.label; },
                y: function (d) { return d.value; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };
    }
})();
