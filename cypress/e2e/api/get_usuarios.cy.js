describe('lista usuários cadastrados', () => {
   beforeEach(() => {
      
   })
   it('listar usuários com sucessu', () => {
       cy.api({
        method:  'GET',
        url: '/usuarios',

        }) .then((response) => {
          expect(response.status).to.have.eq(200);
          expect(response.body.usuarios[1].nome).to.eq('Maria Almeida')
          // assertion code here
       });
   })
})