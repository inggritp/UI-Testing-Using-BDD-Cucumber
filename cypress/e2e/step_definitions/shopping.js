const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const shopping = require("../../fixtures/pages/InventoryPage.js");
const login = require("../../fixtures/pages/loginPage.js");

beforeEach(() => {
  login.visit();
  login.Username("standard_user");
  login.Password("secret_sauce");
  login.clickLoginButton();
});

Given('I am already on the inventory page', () => {
    login.verifyInventoryPage();
});
When('I add an item to the cart', () => {
    shopping.addOneItem();

});
Then('The cart should have one item on the cart badge', () => {
        shopping.verifyAddedOneItem();

});
And('The cart should have one item in the cart',() => {
    shopping.verifySucessfullyAddedItem();

})


When('I add multiple items to the cart',() => {
    shopping.addMultipleItems();


});
Then('The cart should have multiple items on the cart badge',() => {
    shopping.verifySucessAddMultipleItems();
})
And('The cart should have multiple items in the cart',() => {
    shopping.verifySucessAddMultipleItems();
})
When('I remove the item from the cart',() => {
    shopping.removeItem();
    
});
Then('The cart should have no items on the cart badge',() => {
    shopping.verifySucessAddMultipleItems

    
})
Then('The cart should have no items in the cart',() => {
    shopping.successfullyRemovedItem();

})



