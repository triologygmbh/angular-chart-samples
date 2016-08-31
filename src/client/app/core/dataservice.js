(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getSomeAwesomeData: getSomeAwesomeData
    };

    return service;

    function getSomeAwesomeData() {
      var data = [{
        type: 'lineChart',
        yaxis: 'Grad-Celsius',
        xaxis: 'Temperaturveränderung',
        title: 'Temperaturveränderung Weltweit seit 1980',
        labels: ['1980','1981','1982'],
        values: [23,22,23]
      }];
      return data;
    }

    function getMessageCount() { return $q.when(72); }


    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();
