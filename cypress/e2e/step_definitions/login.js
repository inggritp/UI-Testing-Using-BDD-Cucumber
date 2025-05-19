const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');

const login=require("../../fixtures/pages/loginPage.js");


Given('I open sausace demo website', () =>{
    login.visit();

})

When('I enter the username {string} and password {string}', (username,password) => {
    login.Username(username);
    login.Password(password);
})

And('I click on the login button',() => {
    login.clickLoginButton();
})

Then('I should be redirected to the inventory page',() => {
    login.verifyInventoryPage();

})

Then('I should see an error message', () => {
    login.verifyErrorMessage();
})



