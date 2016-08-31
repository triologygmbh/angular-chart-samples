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
        key: "Cumulative Return",
        values: [
          { "label": "A", "value": -29.765957771107 },
          { "label": "B", "value": 0 },
          { "label": "C", "value": 32.807804682612 },
          { "label": "D", "value": 196.45946739256 },
          { "label": "E", "value": 0.19434030906893 },
          { "label": "F", "value": -98.079782601442 },
          { "label": "G", "value": -13.925743130903 },
          { "label": "H", "value": -5.1387322875705 }
        ]
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
