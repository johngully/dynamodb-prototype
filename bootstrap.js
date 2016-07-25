import angular from "angular";
import "angular-ui-router";

import dynamodbModule from "./dynamodb/dynamodbModule";

function bootstrap() {
  angular.element(document).ready(function () {
    angular.bootstrap(document.body, [dynamodbModule.name], {});
  });
}

export default bootstrap;
