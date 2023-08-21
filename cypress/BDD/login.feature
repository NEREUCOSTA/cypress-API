Funcionalidade : autenticação login
    Eu quero me autenticar na aplicação
    Para ter acesso aos recursos protegidos

Cenário: Autenticação bem-sucedida
Quando eu enviar uma requisição POST para "/login"
Então eu devo receber um status code "200"
E eu devo receber um token de acesso no corpo da resposta    


Cenário: Autenticação invalida
Quando eu enviar uma requisição POST para "/login"
Então eu devo receber um status code "400"
E eu devo receber uma resposta de erro  

