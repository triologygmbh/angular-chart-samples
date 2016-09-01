(function() {
  'use strict';

  angular
    .module('app.highchart')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'highchart',
        config: {
          url: '/highchart',
          templateUrl: 'app/highchart/sampleChart.html',
          controller: 'HighchartSampleController',
          controllerAs: 'vm',
          title: 'highchart',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Highchart'
          }
        }
      }
    ];
  }
})();
