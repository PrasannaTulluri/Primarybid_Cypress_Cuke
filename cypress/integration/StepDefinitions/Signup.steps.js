/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var SignUpPage=require('../Pages/05_SignupPage');
const page=new SignUpPage()

When('I visit Signup Page', () => {
	cy.launchSite('/user/signup/')
})

Then('I am taken to User details page', () => {
	page.signUpPageHeader.should('have.text', 'Sign up');
})

Then('I am navigated to Personal details page', () => {
	page.firstName.should('be.visible');
})

When('I sign up with credentials {string} and {string}', (email, password) => {
	email=email=='null'? ' ':email
	password=password=='null'? ' ':password
	page.enterSignUpDetails(email, password, password)
})

When('I sign up with valid credentials {string} and {string}', (email, password) => {
	email=email.split('@')
	email=email[0]+Date.now()+'@'+email[1];
	page.enterSignUpDetails(email, password, password)
	page.submitDetails()
})

Then('I see error {string} when email {string} is not valid', (errorMsg, email) => {

	if ((!email.includes('@')||!email.includes('.com')||email=='null')) {
		page.submitDetails()
		page.error.should('have.text', errorMsg)
	}
})

Then('I see error {string} when password {string} length is less than 6', (errorMsg, password) => {

	if (password.length<6) {
		page.submitDetails()
		page.error.should('have.text', errorMsg)
	}
})

Then('I see error {string} when passwords {string} dont match based on {string}', (errorMsg, password, validity) => {
	if (validity=='Password not match') {
		page.inputConfirmPassword(password+'123')
		page.submitDetails()
		page.error.should('have.text', errorMsg)
	}
})
