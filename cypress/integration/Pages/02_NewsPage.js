var CommonPage=require('./01_CommonPage');

class NewsPage extends CommonPage {
	get newsPage() { return cy.get('.page--news-index') }
	get newsPageHeaders() { return cy.get('.title--line-teal-flex') }
	get newsFilterPopup() { return cy.get("[data-testid='news-filter-popover']") }
	get newsFilterPopupItems() { return cy.get("[data-testid='news-filter-popover']").find('.pb_news_filter__itemLabel_1iwa') }
}
export default NewsPage;		