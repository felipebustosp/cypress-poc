// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login',(email,password,timeout) => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(':nth-child(2) > .input', {timeout:timeout}).type(email)
    cy.get(':nth-child(4) > .input', {timeout:timeout}).type(password)
    cy.get(':nth-child(5) > .button').click()
    cy.get('.smallText').should('exist')
    cy.get('.smallText').should("contain","John Smith")
})

Cypress.Commands.add('transferFunds',(email, password, origin,destination,amount) => {
    cy.login(email,password,10000)
    cy.get('#leftPanel > ul > :nth-child(3) > a',{ timeout:10000}).click()
    cy.get('.title').should('contain',"Transfer Funds")
    cy.get('#fromAccountId',{timeout:10000}).select(origin)
    cy.wait(1000)
    cy.get('#toAccountId',{timeout:10000}).select(destination)
    cy.get('#amount').type(amount)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.title').should('contain',"Transfer Complete!")
})