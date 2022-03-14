var NewsPage=require('./02_NewsPage');

class AboutUsPage extends NewsPage {
	get aboutUsPageTitle() { return cy.get('h2[data-testid="about-about-title"]') }
}
export default AboutUsPage;	