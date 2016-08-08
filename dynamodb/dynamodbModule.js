import angular from 'angular';
import 'angular-ui-router';
import dynamodbModuleConfig from './dynamodbModuleConfig';
import dynamodbRoutesConfig from './dynamodbRoutesConfig';
import itemsService from './features/itemsService';
import authService from './features/authService';
import dynamodbController from './features/dynamodb/dynamodbController';

// Create the module and register the routes
var dynamodbModule = angular.module('dynamodbModule', ['ui.router']);
dynamodbModule.config(dynamodbModuleConfig);
dynamodbModule.config(dynamodbRoutesConfig);

// Register angular components (controllers, directives, services, etc.)
dynamodbModule.controller('dynamodbController', dynamodbController);

dynamodbModule.service('itemsService', itemsService);
dynamodbModule.service('authService', authService);

export default dynamodbModule;
