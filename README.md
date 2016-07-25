# dynamodb-prototype
Prototype application to explore directly connecting to dynamodb from a javascript client application

# Steps to reproduce
1. yo ng:init
1. in ```dynamodbModule``` register the default controller ```dynamodbModule.controller('dynamodbController', dynamodbController);```
1. Install aws-sdk
1. ```jspm install npm:aws-sdk```

1. ```npm install aws-sdk --save-dev```
1. Create ```.aws``` file with access keys.  Be sure to add to ```.gitignore``` file!
1.
