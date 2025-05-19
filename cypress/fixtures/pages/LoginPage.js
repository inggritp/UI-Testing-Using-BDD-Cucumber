class LoginPage{

    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    Username(username){
        cy.xpath(`//input[@placeholder='Username']`).type(username);
    }
    Password(password){
        cy.xpath(`//input[@placeholder='Password']`).type(password);
    }
    clickLoginButton(){
        cy.get('[data-test="login-button"]').click();
    }

    verifyInventoryPage(){
        cy.url().should('include','inventory.html');
        cy.get('.app_logo').should('be.visible');
        
    }
    verifyErrorMessage(){
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service');
    }

}

export default new LoginPage();