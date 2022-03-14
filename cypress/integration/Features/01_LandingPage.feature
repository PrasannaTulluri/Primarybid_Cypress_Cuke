Feature: LandingPage features

  Background: Navigate to the site
    Given I visit Primary Bid playground site

  Scenario: About Us link
    When I click on 'About Us' link on Landing Page
    Then I am taken to About Us page
    And URL should include '/about'

  Scenario: Help link
    When I click on 'Help' link on Landing Page
    Then I am taken to Frequently Asked Questions page
    And URL should include '/faqs'

  Scenario: News link
    When I click on 'News' link on Landing Page
    Then I am taken to News page
    And URL should include '/news'

  Scenario: Signup link
    When I click on 'Sign up' link on Landing Page
    Then I am taken to User details page
    And URL should include '/user/signup'


