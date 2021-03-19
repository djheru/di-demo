# React and Serverless GraphQL with AWS Amplify

## Getting Started

```bash
# Create new react app
npx create-react-app dealerships --use-npm && cd dealerships

# Install some dependencies
npm i aws-amplify @aws-amplify/ui-react react-router-dom antd uuid
```

## Initialize Amplify Project

```bash
# This command will trigger a series of interactive prompts, listed below
amplify init
```

### Amplify Init Prompts

Your output should look something like this

```
? Enter a name for the project dealerships
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use amplify-pdamra

Adding backend environment dev to AWS Amplify Console app: dxxxdxxxam5xxx
⠸ Initializing project in the cloud...
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

## Add Authentication Service

```bash
# This command will prompt you with questions to configure the auth setup
amplify add auth
```

### Amplify Add Auth Prompts

```
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? Yes, I want to make some additional changes.
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? Email
 Do you want to enable any of the following capabilities? Add User to Group
? Enter the name of the group to which users will be added. Admin
Successfully added resource dealerships45a69910PostConfirmation locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/dealerships45a69910PostConfirmation/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Successfully added the Lambda function locally
? Do you want to edit your add-to-group function now? Yes
Please edit the file in your editor: /Users/philipdamra/Workspace/_sandbox/appsync-amplify/di-demo2/dealerships/amplify/backend/function/dealerships45a69910PostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource dealerships45a69910 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```
