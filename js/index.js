(function() {

  var module = angular.module('ghost.services', []);

  module.constant('GHOST_API_BASE_URL', '/ghost/api/v1.0');

  module.service('ghostAuthorization', ['GHOST_API_BASE_URL', '$http', '$q', function ghostAuthorizationService(BASE_URL, $http, $q) {
    return {
      authorize: authorize
    };

    function authorize(params) {
      return $q(function authorizeDefer(resolve, reject) {
        $http.post(BASE_URL, params)
          .success(function authorizeSuccess(result) {
            resolve(result);
          })
          .error(function authorizeError(a, b, c) {
            reject(a);
          });
      });
    }
  }]);

})();