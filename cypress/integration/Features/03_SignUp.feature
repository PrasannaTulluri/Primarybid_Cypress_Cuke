Feature: SignUp features

  Background: Navigate to the site
    Given I visit Signup Page

  Scenario Outline: Sign up - Error Msg Validations
    When I sign up with credentials '<Email>' and '<Password>'
    Then I see error '<Error>' when email '<Email>' is not valid
    But I see error '<Error>' when password '<Password>' length is less than 6
    But I see error '<Error>' when passwords '<Password>' dont match based on '<Validity>'

    Examples:
      | Email             | Password | Validity           | Error                                   |
      | autouser          | test123  | Invalid Email      | The email you have entered is not valid |
      | autouser@test     | test123  | Invalid Email      | The email you have entered is not valid |
      | autouser@test.com | test     | Password Length    | Password must be at least 6 characters  |
      | autouser@test.com | null     | Blank Password     | Password must be at least 6 characters  |
      | null              | test123  | Blank Email        | The email you have entered is not valid |
      | autouser@test.com | test123  | Password not match | Passwords do not match                  |

  Scenario Outline: Sign up
    When I sign up with valid credentials '<Email>' and '<Password>'
    Then I am navigated to Personal details page
    And URL should include '/user/personal-details?step=2'

    Examples:
      | Email                | Password |
      | autouser123@test.com | test123  |






