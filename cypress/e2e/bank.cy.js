describe('Visit bank site and perform multiple operations', () => {

  it('Open bank site', () => {
    cy.login("name@mail.com","123456",10000)
  })

  it('Check account overview', () => {
    cy.login("name@mail.com","123456",10000)
    cy.get('#leftPanel > ul > :nth-child(2) > a',{timeout:10000}).click();
    cy.get('.title').should("contain","Accounts Overview")
  })

  it('Perform a fund transfer from one account to another', () => {
    cy.transferFunds("name@mail.com","12345","13011","13344",1000)
    cy.get('.ng-scope > :nth-child(2)').should('contain',"13011")
    cy.get('.ng-scope > :nth-child(2)').should('contain',"13344")
    cy.get('.ng-scope > :nth-child(2)').should('contain',"1000")
  })

})

