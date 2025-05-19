class inventoryPage {
  addOneItem() {
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    ).should("be.visible");
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    )
      .should("contain", "Sauce Labs Backpack")
      .click();
    cy.get('[data-test="add-to-cart"]').click();
  }

  verifyAddedOneItem() {
    cy.xpath(`//a[@class='shopping_cart_link']`).should("be.visible");
    cy.xpath(`//span[@class='shopping_cart_badge' and text() = 1 ]`).should(
      "be.visible"
    );
    cy.xpath(`//button[@data-test='remove']`).should("be.visible");
  }
  verifySucessfullyAddedItem() {
    cy.xpath(`//a[@data-test='shopping-cart-link']`).click();
    cy.url().should("include", "cart.html");
    cy.xpath(`//div[@data-test='inventory-item']`).should("be.visible");
  }
  addMultipleItems() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
  .scrollIntoView()
  .click()
  }
  verifySucessAddMultipleItems() {
    cy.xpath(`//a[@data-test='shopping-cart-link']`).scrollIntoView()
    .click()
    cy.xpath(`//span[@class='shopping_cart_badge' and text() = 2 ]`).should(
      "be.visible"
    );
    cy.xpath(`//a[@data-test='shopping-cart-link']`).click();
    cy.url().should("include", "cart.html");
  }
  removeItem() {
    cy.xpath(`//button[@data-test='remove']`).click();
  }
  successfullyRemovedItem() {
      cy.xpath(`//span[@class='shopping_cart_badge' and text() = 1]`).should(
      "not.exist");

  }
}

export default new inventoryPage();
