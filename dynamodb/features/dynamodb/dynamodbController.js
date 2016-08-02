function dynamodbController($scope, itemsService) {
  const items = [];
  const item = {};

  const options = {
    tableName: 'ngPrototype'
  };

  function add(key, value) {
    return itemsService.addItem(parseInt(key), value).then(resetItem).then(refresh);
  }

  function refresh() {
    return itemsService.getItems().then((data) => {
      angular.copy(data.Items, items);
      $scope.$apply();
    });
  }

  function resetItem() {
    item.key = '';
    item.value = '';
  }

  function logError(error) {
    if (error) {
      console.error(error, error.stack);
    }
  }

  function init() {
    resetItem();
    refresh();
  }

  init()

  return {
    add,
    items,
    item,
    refresh
  };
};

export default dynamodbController;
