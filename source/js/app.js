goog.provide('scaffold');

goog.require('scaffold.app.AppController');
goog.require('scaffold.moduleA');

/**
 * Initializes the app.
 *
 * @export
 */
scaffold.init = function(isProd) {
  angular.module('scaffold', [
      scaffold.moduleA.MODULE_NAME
    ])
    .controller('AppController', scaffold.app.AppController)
    .config(['$compileProvider', function($compileProvider) {
      if (isProd) {
        $compileProvider.debugInfoEnabled(false);
      }
    }]);
  var config = {};

  if (isProd) {
    config.strictDi = true;
  }

  angular.bootstrap(document, ['scaffold'], config);
};
