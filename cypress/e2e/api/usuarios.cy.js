
const usuario = {
    nome: "Fulano da Silva santos",
    email: "fulanodasilvasantos201111@qa22.com.br",
    password: "teste",
    administrador: "true"
}
const usuarioExistente = {
    nome: "Fulano da Silva",
    email: "beltrano@qa.com.br",
    password: "teste",
    administrador: "true"
}

it('cadastrar um usuario com sucesso', () => {
    cy.api({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false, //se a resquest for 400, não quebra o testes
        body: usuario //ou a forma abaixo

        // {
        //   "nome": usuario.nome,
        // "email": usuario.email,
        //"password": usuario.password,
        //"administrador": usuario.administrador
        //}
        ,

    }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Este email já está sendo usado")
    });

    // .onlycode here
})
it('validar email já usado', () => {
    cy.api({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body: usuarioExistente

    }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Este email já está sendo usado")
    });

});

it('deletar um usuario pelo ID', () => {

   cy.api({
       method: 'DELETE',
       url: '/usuarios/3Pwi51sfCV6hRIol',
     }).then((response) => {
       expect(response.status).to.eq(200);
       expect(response.body.message).to.eq("Registro excluído com sucesso")
     });
});

it.only('usuario nao existe', () => {
   cy.api({
       method: 'DELETE',
       url: '/usuarios/3Pwi51sfCV6hRIol',
     }).then((response) => {
       expect(response.status).to.eq(204);
     });
});