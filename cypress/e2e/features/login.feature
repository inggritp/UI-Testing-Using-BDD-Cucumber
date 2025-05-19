Feature: Login to sausace demo website

Scenario: Login with valid credentials
  Given I open sausace demo website
  When I enter the username "standard_user" and password "secret_sauce"
  And I click on the login button
  Then I should be redirected to the inventory page

Scenario: Login with invalid credentials
  Given I open sausace demo website
  When I enter the username "invalid_user" and password "invalid_password"
  And I click on the login button
  Then I should see an error message


Scenario: Login with empty username
  Given I open sausace demo website
  When I enter the username ' ' and password "secret_sauce"
  And I click on the login button
  Then I should see an error message

Scenario: Login with empty password
  Given I open sausace demo website
  When I enter the username "locked_out_user" and password " "
  And I click on the login button
  Then I should see an error message