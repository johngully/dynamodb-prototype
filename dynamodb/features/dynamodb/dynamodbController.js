function dynamodbController($scope, authService, itemsService) {
  const items = [];
  const selectedItem = {};
  const newItem = {};
  const credentials = { username: 'dineth', password: '!Race2Win!'};

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

  function login() {
    authService.login(credentials.username, credentials.password,
      function() {
        init();
      },
      function() {
        alert('Invalid user name or password.');
      });
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
    resetNewItem();
    refresh();
  }

  //init()

  return {
    add,
    items,
    newItem,
    refresh,
    selectedItem,
    selectItem,
    credentials,
    login
  };
};

export default dynamodbController;
