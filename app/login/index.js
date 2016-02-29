'use strict';
// import angular from 'angular';

const login = angular.module('login', []);


import loginTemplate from './views/login.html';
import loginController from './loginController.js';





login.directive('login', function() {
  return {
    restrict: "E",
    bindToController: true,
    template: loginTemplate,
    controllerAs: "login",
    controller: ['$state', 'AuthService', loginController]
  }
})

export default login;

