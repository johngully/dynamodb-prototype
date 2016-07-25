const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
const db = new AWS.DynamoDB.DocumentClient();

const options = {
  tableName: 'ngPrototype'
};


// addItem(2, { itemValue: 'test' });
// addItem(3, { itemValue: 'testxxx' });
// addItem(4, { itemValue: 'xxxx' });
// getItem(2);
// deleteItem(2);
queryItemByValue('xx');
getAll();

function deleteItem(key) {
  const params = {
    TableName: options.tableName,
    Key: {
      id: key
    }
  };

  db.delete(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

}

function addItem(key, value) {
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

function getItem(key) {
  const params = {
    TableName: options.tableName,
    Key: {
      id: key
    }
  };

  db.get(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function getAll() {
  const params = {
    TableName: options.tableName
  };

  db.scan(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function findItemByValue(value) {
  const params = {
    TableName: options.tableName,
    FilterExpression: 'begins_with(itemValue, :value)',
    ExpressionAttributeValues: {
      ':value': value
    }
  };

  db.scan(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function queryItemByValue(value) {
  const params = {
    TableName: options.tableName,
    FilterExpression: 'begins_with(itemValue, :value)',
    ExpressionAttributeValues: {
      ':value': value
    }
  };

  db.scan(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function listTables() {
  db.listTables(function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data.TableNames);
    }
  });
}
