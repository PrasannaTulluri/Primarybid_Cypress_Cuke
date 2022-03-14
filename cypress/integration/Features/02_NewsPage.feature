Feature: NewsPage features

  Background: Navigate to News Page
    When I visit News Page

  Scenario: News Page
    Then News page contains news items for 'Featured Content'
    And News page contains news items for 'All Content'
    And Filter All Content news section by 'Webinar'
