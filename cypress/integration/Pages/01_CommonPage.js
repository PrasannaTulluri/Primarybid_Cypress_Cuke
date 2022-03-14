/// <reference types="Cypress" />

class CommonPage {

	visit(urlSuffix) {
		let url=Cypress.config().baseUrl+urlSuffix
		cy.visit(url, {
			auth: {
				username: Cypress.env('username'),
				password: Cypress.env('password')
			}
		})
	}

	getUrl() {
		return cy.url()
	}

	submitDetails() {
		cy.contains('Submit').click()
	}

	clickOnLink(linkText) {
		cy.contains(linkText).click()
	}
}
export default CommonPage;		