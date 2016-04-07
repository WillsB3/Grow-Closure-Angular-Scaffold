goog.provide('scaffold.moduleA.someDirective');

goog.require('scaffold.moduleA.SomeDirectiveController');

goog.scope(function() {

var module = scaffold.moduleA;

/** @const {string} */
module.someDirective.NAME = 'someDirective';

/**
 * Document directive usage here.
 * @param {!angular.$log} $log
 * @return {!angular.Directive} Directive definition object.
 * @ngInject
 */
module.someDirective.directive = function($log) {
  return {
    restrict: 'A',
    scope: {},
    bindToController: true,
    controllerAs: 'someDirectiveCtrl',
    controller: module.SomeDirectiveController,
    link: function(scope, element, attrs, someDirectiveCtrl) {
      $log.warn('someDirective link', attrs[module.someDirective.NAME]);
    }
  };
};

});  // goog.scope
