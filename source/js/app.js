goog.provide('scaffold.module');

goog.require('scaffold.app.AppController');
goog.require('scaffold.moduleA');

var DEBUG = document.getElementById('app-script') !== null;

/**
 * Initializes the app.
 *
 * @export
 */
scaffold.module = angular.module('scaffold', [
  scaffold.moduleA.MODULE_NAME
]);

scaffold.module.config(['$compileProvider', function($compileProvider) {
  if (DEBUG) {
    $compileProvider.debugInfoEnabled(false);
  }
}]);

scaffold.module.controller('AppController', scaffold.app.AppController);

angular.bootstrap(document, [scaffold.module.name], {
  strictDi: DEBUG
});
