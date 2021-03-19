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
