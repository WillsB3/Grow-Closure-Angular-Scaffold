goog.provide('scaffold.moduleA.SomeDirectiveController');


/**
 * @constructor
 * @param {!angular.JQLite} $element
 * @param {!angular.$document} $document
 * @param {!angular.$log} $log
 * @ngInject
 */
scaffold.moduleA.SomeDirectiveController = function($element, $document, $log) {
  $log.log('SomeDirectiveController constructor');
};
