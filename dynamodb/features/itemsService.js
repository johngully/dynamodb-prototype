function itemsService() {
  const options = {
    tableName: 'ngPrototype'
  };

  function addItem(key, value) {
    const db = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: options.tableName,
      Item: {
        id: key,
        itemValue: value
      }
    };

    return db.put(params).promise().catch(logError);
  }

  function getItems() {
    const db = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: options.tableName
    };

    return db.scan(params).promise().catch(logError);
  }

  function logError(error) {
    if (error) {
      console.error(error, error.stack);
    }
  }

  return {
    getItems,
    addItem
  };
}

export default itemsService;
