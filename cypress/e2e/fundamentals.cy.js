describe('fundamentals test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
  })// add a new test that fails and see what happens
  it('fails', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('h1').should('have.text', 'Fundamentals')
  })
})