class checkoutPage{

    clickcheckoutButton(){
        cy.get('[data-test="checkout"]').click();
    }

    fillFirstName(first){
        cy.get('[data-test="firstName"]').type(first);
    }
    fillLastName(lastName){
        cy.get('[data-test="lastName"]').type(lastName);
    }
    fillZipCode(zip){
        cy.get('[data-test="postalCode"]').type(zip);
    }
    clickContinueButton(){
        cy.get('[data-test="continue"]').click();
    }
    verifyErrorMessage(){
        cy.get('[data-test="error"]').should("be.visible");
        cy.get('[data-test="error"]').should("contain", "Error: First Name is required");
    }
    
    verifyOnCheckoutOverviewPage(){
        cy.get('[data-test="total-label"]').should("contain", "Total: $49.66");

    }
    clickFinishButton(){
        cy.get('[data-test="finish"]').click();
    }
    verifyCheckoutcomplete(){
        cy.url().should("include", "checkout-complete.html");
        cy.get('[data-test="complete-header"]').should("be.visible");
        cy.get('[data-test="complete-header"]').should("contain", "Thank you for your order!");
        cy.get('[data-test="back-to-products"]').should("be.visible");
    }


}

export default new checkoutPage();