(function() {
  'use strict';

  angular
    .module('app.nvD3')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'nvD3',
        config: {
          url: '/nvD3Chart',
          templateUrl: 'app/nvD3/sampleChart.html',
          controller: 'sampleChartController',
          controllerAs: 'vm',
          title: 'nvD3',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> nvD3-Chart'
          }
        }
      }
    ];
  }
})();
