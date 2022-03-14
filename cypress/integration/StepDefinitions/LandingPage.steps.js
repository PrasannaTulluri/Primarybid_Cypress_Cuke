/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var SignUpPage=require('../Pages/05_SignupPage');
const page=new SignUpPage()

When('I click on {string} link on Landing Page', (menuNode) => {
	cy.contains(menuNode).click()
})

Then('I am taken to About Us page', () => {
	page.aboutUsPageTitle.should('include.text', 'About Us')
})

Then('I am taken to Frequently Asked Questions page', () => {
	page.helpPage.should('exist');
})

Then('I am taken to News page', () => {
	page.newsPage.should('exist');
})