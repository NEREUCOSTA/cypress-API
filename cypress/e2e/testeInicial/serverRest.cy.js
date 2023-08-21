
describe('teste inicial', () => {
   beforeEach(() => {
       cy.visit('https://serverest.dev/');
   })
   it('validar pagina inicial', () => {
       cy.get('.title')
       .contains('ServeRest')
       .should('be.visible')

       cy.get('.btn > span')
       .contains('Authorize')
       .should('be.visible')

       cy.contains('.title','ServeRest')
       .should('be.visible')
   })
})