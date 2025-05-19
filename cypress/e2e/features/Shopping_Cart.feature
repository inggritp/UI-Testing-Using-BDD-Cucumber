Feature: Add items to shopping cart

    Scenario: Add a single item to the cart
        Given I am already on the inventory page
        When I add an item to the cart
        Then The cart should have one item on the cart badge
        And The cart should have one item in the cart

    Scenario: Add multiple items to the cart
        Given I am already on the inventory page
        When I add multiple items to the cart
        Then The cart should have multiple items on the cart badge
        And The cart should have multiple items in the cart

    Scenario: Remove an item from the cart
        Given I am already on the inventory page
        When I add an item to the cart
        And I remove the item from the cart
        Then The cart should have no items on the cart badge
        And The cart should have no items in the cart