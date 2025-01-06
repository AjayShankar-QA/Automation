Feature: User Registration and Login

  Scenario: Successful User Registration
    Given I am on the signup page
    When I fill out the registration form with valid details
    And I submit the registration form
    Then I should see a success message
    And I should be able to log in with the same credentials
