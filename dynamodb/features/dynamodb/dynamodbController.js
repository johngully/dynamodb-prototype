function dynamodbController() {

  const options = {
    tableName: 'ngPrototype'
  };

  function add(key, value) {
    console.log(`add - "${key}": "${value}"`);

    const db = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: options.tableName,
      Item: {
        id: key,
        itemValue: value
      }
    };

    db.put(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
  }

  return {
    add: add
  };
};

export default dynamodbController;
