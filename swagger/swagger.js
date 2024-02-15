const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Application Gestion Voitures',
      version: '1.0.0',
      description: ' documentation  Swagger',
    },
  },
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };