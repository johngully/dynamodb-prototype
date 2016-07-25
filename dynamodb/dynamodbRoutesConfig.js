import dynamodbRoutes from './dynamodbRoutes';
import _ from 'lodash';

function dynamodbRoutesConfig ($stateProvider) {
  _.each(dynamodbRoutes, function(state) {
    $stateProvider.state(state);
  });
}

export default dynamodbRoutesConfig;
