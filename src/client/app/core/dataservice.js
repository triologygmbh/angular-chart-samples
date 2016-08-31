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
        yaxis: 'Durschnittsalter',
        xaxis: 'Jahr',
        title: 'Durschnittsalter Deutschland',
        labels: ['1950','1955','1960','1965','1970','1975','1980',
        '1985','1990','1995','2000','2005','2010','2015','2016'],
        values: [34.9,34,34.2,33.8,33.8,35.1,
        36.2,36.5,37.1,38,39.1,41.8,44.1,45.6,45.8]
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
