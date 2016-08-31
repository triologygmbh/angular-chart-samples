(function() {
  'use strict';

  angular
    .module('app.chartJSSample')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'chartJS',
        config: {
          url: '/chartJS',
          templateUrl: 'app/chartJS/sampleChart.html',
          controller: 'chartJSSample',
          controllerAs: 'vm',
          title: 'chartJS',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Angular-Chart.js'
          }
        }
      }
    ];
  }
})();
