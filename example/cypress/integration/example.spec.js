/// <reference types="cypress" />

context('Example Site', { baseUrl: null }, () => {
  beforeEach(() => {
    cy.visit('./dist/index.html');
  });

  it('should render example sections', () => {
    cy.get('#basic-example').should('exist');
    cy.get('#alignment-example').should('exist');
    cy.get('#constraints-example').should('exist');
    cy.get('#content-resize-example').should('exist');
    cy.get('#context-example').should('exist');
    cy.get('#cover-example').should('exist');
    cy.get('#safe-mode-example').should('exist');
    cy.get('#window-example').should('exist');
  });
});
