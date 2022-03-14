# PrimaryBid, UI Automation Framework

**Pre-Requisites**
Ensure the below are installed on the system :
Node, VSCode,  
Latest Browser versions : Chrome, Firefox, IE, Edge

**IDE**
Visual Studio Code,
Install the recommended extensions from Visual Studio Code when prompted.

**Framework**
I have used Cypress+cucumber+JS to script the test.
I have created a custom command to launch the site/menu nodes
Feature files, Pages, StepDefinitions can be seen in cypress/integration folder
Used Prettier for linting

**Dependencies**
Run the below to install all the dependencies and run the tests:
npm i  //to install all dependencies

**Run Tests**
Password is confidential and needs to be entered on commandline while running the test:
Run either of the below, and make sure the correct password is entered.
CYPRESS_password={ReplaceWithPassword} npx cypress open
CYPRESS_password={ReplaceWithPassword} npx cypress run

