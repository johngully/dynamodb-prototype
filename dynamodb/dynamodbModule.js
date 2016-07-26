import angular from 'angular';
import 'angular-ui-router';
import dynamodbModuleConfig from './dynamodbModuleConfig';
import dynamodbRoutesConfig from './dynamodbRoutesConfig';
import awsConfig from './awsConfig';
import dynamodbController from './features/dynamodb/dynamodbController';

// Create the module and register the routes
var dynamodbModule = angular.module('dynamodbModule', ['ui.router']);
dynamodbModule.config(dynamodbModuleConfig);
dynamodbModule.config(dynamodbRoutesConfig);
dynamodbModule.config(awsConfig);

// Register angular components (controllers, directives, services, etc.)
dynamodbModule.controller('dynamodbController', dynamodbController);

export default dynamodbModule;
