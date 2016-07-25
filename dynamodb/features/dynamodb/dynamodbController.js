function dynamodbController() {
  // const AWS = require('aws-sdk');
  AWS.config.region = 'us-east-1';
  const db = new AWS.DynamoDB.DocumentClient();

  const options = {
    tableName: 'ngPrototype'
  };

  function add(key, value) {
    console.log(`add - "${key}": "${value}"`);

    const params = {
      TableName: options.tableName,
      Item: {
        id: key,
        itemValue: value.itemValue
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
