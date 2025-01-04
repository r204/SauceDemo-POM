
describe('#SCR-LOG-01: Login Account', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.wait('3000')
    cy.contains('.css-16r70d4').click('')
  })
})