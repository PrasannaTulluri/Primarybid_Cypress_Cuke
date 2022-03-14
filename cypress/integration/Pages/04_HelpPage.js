var AboutUsPage=require('./03_AboutUsPage');

class HelpPage extends AboutUsPage {
	get helpPage() { return cy.get('.header--faq') }
}
export default HelpPage;