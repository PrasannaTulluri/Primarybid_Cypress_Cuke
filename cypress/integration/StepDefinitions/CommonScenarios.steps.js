/// <reference types="Cypress" />
var CommonPage=require('../Pages/01_CommonPage');
const page=new CommonPage()

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit Primary Bid playground site', () => {
	cy.launchSite('/')
})

Then('URL should include {string}', (pageUrl) => {
	page.getUrl().should('include', pageUrl);
})

When('I submit the details', () => {
	page.submitDetails();
})
