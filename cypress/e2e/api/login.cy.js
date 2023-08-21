


describe('Realizar login', () => {
   beforeEach(() => {

   })
   it('login com sucesso', () => {
      cy.api({
         method: 'POST',
         url: '/login',
         body: {
            email: Cypress.env('email'),
            password: Cypress.env('senha')
         },
      }).then((response) => {
         expect(response.status).to.eq(200)
         expect(response.body).to.have.property("message")
         expect(response.body.message).to.have.equal("Login realizado com sucesso")
         Cypress.env('teste', response.body.message)
         cy.log('aqui o item que peguei', Cypress.env('teste'))

      });
   })
})

describe('autenticação login', () => {
   beforeEach(() => {
      //  cy.visit('/login');
      //  failOnStatusCode: false, 
   })
   context('Autenticação com falha', () => {
      // code here

      it('login sem email', () => {
         cy.api({
            method: 'POST',
            url: '/login',
            failOnStatusCode: false,
            body: {
               "email": "nereu@email.com",
               "password": Cypress.env("senha")
            },
         }).then((response) => {
            expect(response.status).to.be.eq(401)
            //expect(response.body).to.have.property('message');
            //expect(response.body.message).to.have.contains('Login realizado com sucesso')
         });
      })
   })

   context('Autenticação bem-sucedida', () => {
      // code here

      it('login com sucesso', () => {
         // code here
         cy.log()
      })
   })

}); 
