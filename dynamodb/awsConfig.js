import awsCredendials from './aws';

function dynamodbModuleConfig () {
  AWS.config.region = 'us-east-1';
  AWS.config.update({
    accessKeyId: awsCredendials.API_Access_Key_ID,
    secretAccessKey: awsCredendials.API_Secret_Access_Key
  });
}

export default dynamodbModuleConfig;
