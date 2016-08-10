
import _ from 'lodash';

function dynamodbController($scope, itemsService) {
  const items = [];
  const selectedItem = {};
  const newItem = {};

  const options = {
    tableName: 'ngPrototype'
  };

  function add(id, value) {
    return itemsService.addItem(parseInt(id), value).then(resetNewItem).then(refresh);
  }

  function refresh() {
    return itemsService.getItems().then((data) => {
      angular.copy(data.Items, items);
      $scope.$apply();
    });
  }

  function selectItem(value) {
    angular.copy(value, selectedItem);
  }

  function resetNewItem() {
    newItem.id = '';
    newItem.itemValue = '';
  }

  function logError(error) {
    if (error) {
      console.error(error, error.stack);
    }
  }

  function init() {
    debugger;
    console.log(_);
    resetNewItem();
    refresh();
  }

  init()

  return {
    add,
    items,
    newItem,
    refresh,
    selectedItem,
    selectItem

  };
};

export default dynamodbController;
