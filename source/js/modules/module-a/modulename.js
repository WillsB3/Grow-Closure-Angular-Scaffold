goog.provide('scaffold.moduleA');

goog.require('scaffold.moduleA.someDirective');

/** @const {string} */
scaffold.moduleA.MODULE_NAME = 'scaffold.moduleA';

/**
 * Module description
 * @type {!angular.Module}
 */
scaffold.moduleA.module = angular.module(scaffold.moduleA.MODULE_NAME, []);

scaffold.moduleA.module.directive(
    scaffold.moduleA.someDirective.NAME,
    scaffold.moduleA.someDirective.directive);
