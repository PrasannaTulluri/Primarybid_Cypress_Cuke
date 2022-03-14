Cypress.Commands.add("launchSite", (urlSuffix) => {
	let url=Cypress.config().baseUrl+urlSuffix
	cy.visit(url, {
		auth: {
			username: Cypress.env('username'),
			password: Cypress.env('password')
		}
	})
});
