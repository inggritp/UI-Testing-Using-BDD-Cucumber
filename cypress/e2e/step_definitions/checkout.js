const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const shopping = require("../../fixtures/pages/InventoryPage.js");
const login = require("../../fixtures/pages/loginPage.js");
const checkouts = require("../../fixtures/pages/checkoutPage.js");

beforeEach(() => {
  login.visit();
  login.Username("standard_user");
  login.Password("secret_sauce");
  login.clickLoginButton();
  shopping.addMultipleItems();
});

Given("I already have multiple items in the cart", () => {
  shopping.verifySucessAddMultipleItems();
});

When(
  `I click checkout and I fill first Name with {string}, Last Name with {string}, Zip code {string} in the checkout from`,
  (firstName, lastName, zipcode) => {
    checkouts.clickcheckoutButton();
    checkouts.fillFirstName(firstName);
    checkouts.fillLastName(lastName);
    checkouts.fillZipCode(zipcode);
  }
);

When("I click continue", () => {
  checkouts.clickContinueButton();
});

Then("I click Finish", () => {
  checkouts.verifyOnCheckoutOverviewPage();
  checkouts.clickFinishButton();
});

Then("I should see the checkout complete page", () => {
  checkouts.verifyCheckoutcomplete();
});

When("I click Checkout", () => {
  checkouts.clickcheckoutButton();
});
When(`I don't fill the First Name in checkout form`, () => {});
When(`I fill the Last Name with {string} in checkout form`, (lastName) => {
  checkouts.fillLastName(lastName);
});
When(`I fill the zip code with {string} in checkout form`, (zipCode) => {
  checkouts.fillZipCode(zipCode);
});
Then(` click continue`, () => {
  checkouts.clickContinueButton();
});
Then(`I should see the error message {string}`, (errorMessage) => {
  checkouts.verifyErrorMessage(errorMessage);
});
