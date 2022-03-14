/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
var SignUpPage=require('../Pages/05_SignupPage');
const page=new SignUpPage()

When('I visit News Page', () => {
	cy.launchSite('/news')
})

Then('News page contains news items for {string}', (newsSection) => {
	let sectionNo=newsSection=='Featured Content'? 0:'All Content'? 1:'NoMatch';
	page.newsPageHeaders.should('have.length', 2)
	page.newsPageHeaders.eq(sectionNo).should('have.text', newsSection)
})

Then('Filter All Content news section by {string}', (newsFilter) => {
	page.newsFilterPopup.invoke('show').should('be.visible')
	cy.wait(50)
	page.newsFilterPopupItems.each((item, index, list) => {

		if (item.text().includes(newsFilter)) {
			cy.wrap(item).click();
		}
	})


})

