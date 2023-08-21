const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl":"https://serverest.dev/", // url base
    "screenshotOnRunFailure": true,  // tira screen da tela
         
      env:{
        "email": "fulano@qa.com",
        "senha": "teste"
      },
    },
  },
);
