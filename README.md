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

### Deploy Authentication Service

```bash
amplify push
```

### Generated Output

```
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name                       | Operation | Provider plugin   |
| -------- | ----------------------------------- | --------- | ----------------- |
| Function | dealerships45a69910PostConfirmation | Create    | awscloudformation |
| Auth     | dealerships45a69910                 | Create    | awscloudformation |
? Are you sure you want to continue? Yes
⠏ Updating resources in the cloud. This may take a few minutes...

...more output

UPDATE_COMPLETE amplify-dealerships-dev-100801 AWS::CloudFormation::Stack Thu Mar 18 2021 10:45:34 GMT-0700 (Mountain Standard Time) 
✔ All resources are updated in the cloud
```

### Cognito User Pool

- https://console.aws.amazon.com/cognito/users/?region=us-east-1 and select the user pool with "dealer" as part of the generated name
- View available attributes
- View password policies
- View triggers
- View MFA setup
- View Analytics
  - https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html
  - "Amazon Pinpoint is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send push notifications, emails, SMS text messages, or voice messages."
- View Identity Providers

## Add React Layout and Components

```bash
# Create the files we'll need
cd src && touch Container.js Nav.js Profile.js Protected.js Public.js Router.js protectedRoute.js
```

### Component Descriptions

- Container.js - Wrapper component to apply some basic styles
- Nav.js - Navigation UI
- Profile.js - Just a simple component to display details from logged in users, or a login form for unauthenticated users
- Protected.js - An "Admin" page, only accessible to logged-in users
- Public.js - A public page, of course
- Router.js - Contains the routing logic
- protectedRoute.js - This will contain a reusable hook to protect pages that require authentication

### Try it Out

```bash
npm start
```

- Navigate to http://localhost:3000/#/
- Attempt to navigate to http://localhost:3000/#/protected - See the redirect back to the login form?
- Create a new account and check your email for the verification code
- If you used your `@dealerinspire.com` address, you are an admin
- Now when you go to http://localhost:3000/#/protected, you should see your user details
- Explore the "reset password" functionality if you like
- Play around with the colors in index.css to see how you can theme the Amplify UI
