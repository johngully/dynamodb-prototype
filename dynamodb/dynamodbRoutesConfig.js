import dynamodbRoutes from './dynamodbRoutes';
import _ from 'lodash';

function dynamodbRoutesConfig ($stateProvider) {
  dynamodbRoutes.forEach(function(state) {
    $stateProvider.state(state);
  });
}

export default dynamodbRoutesConfig;
