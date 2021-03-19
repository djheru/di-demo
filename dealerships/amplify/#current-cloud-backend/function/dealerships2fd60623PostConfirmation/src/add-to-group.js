/* eslint-disable-line */ const aws = require('aws-sdk');

const isAdmin = email => /^[A-Za-z0-9._%+-]+@dealerinspire.com$/.test(email);

exports.handler = async (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  const groupParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };

  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  const email = event.request.userAttributes.email.toLowerCase();

  if (isAdmin(email)) {
    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }
  
    try {
      await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    } catch (e) {
      callback(e);
    }
  }
  callback(null, event);
};
