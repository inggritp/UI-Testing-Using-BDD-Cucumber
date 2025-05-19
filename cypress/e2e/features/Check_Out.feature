Feature: Check Out Item

    Scenario: Checkout multiple items
        Given I already have multiple items in the cart
        When I click checkout and I fill first Name with "john", Last Name with "Doe", Zip code "1989" in the checkout from
        And I click continue
        Then I click Finish
        And I should see the checkout complete page



    Scenario: Don't fill the username in checkout form
        Given I already have multiple items in the cart
        When I click Checkout
        And I don't fill the First Name in checkout form
        And I fill the Last Name with "Zack" in checkout form
        And I fill the zip code with "8991" in checkout form
        Then I click continue
        And I should see the error message "Error: First Name is required"
