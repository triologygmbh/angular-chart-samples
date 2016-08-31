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
        var data = dataservice.getSomeAwesomeData();
        vm.data = [{key: data[0].title, values: [{x: data[0].labels, y: data[0].values}]}];
        vm.options = {
            chart: {
                type: 'lineChart',
                height: 600,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
     
                showValues: true,
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
