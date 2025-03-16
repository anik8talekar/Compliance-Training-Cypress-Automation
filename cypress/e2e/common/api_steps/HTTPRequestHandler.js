import { validateSchema } from "../../../support/validateSchema";

// GET Request

Given(
  "I make a GET request with url: {string}, path: {string}, query: {string}",
  (baseUrl, path, query) => {
    cy.request({
      method: "GET",
      url: Cypress.env(baseUrl) + Cypress.env(path) + query,
      failOnStatusCode: false,
    })
      .then((response) => {
        cy.log(JSON.stringify(response.body));
      })
      .as("response");
  }
);

// POST Request

Given(
  "I make a POST request with url: {string} , path: {string}, requestFile: {string}",
  (baseUrl, path, requestFile) => {
    cy.readFile("cypress/fixtures/api/" + requestFile).then((item) => {
      cy.request({
        method: "POST",
        url: Cypress.env(baseUrl) + Cypress.env(path),
        body: item,
        failOnStatusCode: false,
      })
        .then((response) => {
          cy.log(JSON.stringify(response.body));
        })
        .as("response");
    });
  }
);

// PUT Request

Given(
  "I make a PUT request with url: {string} , path: {string}, requestFile: {string}, readFile: {string}",
  (baseUrl, path, requestFile, readFile) => {
    cy.readFile("cypress/fixtures/api/" + readFile).then((item) => {
      cy.readFile("cypress/fixtures/api/" + requestFile).then((updatedItem) => {
        cy.request({
          method: "PUT",
          url: Cypress.env(baseUrl) + Cypress.env(path) + item.id,
          body: updatedItem,
          failOnStatusCode: false,
        })
          .then((response) => {
            cy.log(JSON.stringify(item));
            cy.log(JSON.stringify(response.body));
          })
          .as("response");
      });
    });
  }
);

// PATCH Request

Given(
  "I make a PATCH request with url: {string} , path: {string}, access_token: {string}",
  (baseUrl, path, accessToken) => {
    cy.readFile("cypress/fixtures/api/postResponse.json").then((item) => {
      cy.readFile("cypress/fixtures/api/Training/putRequest.json").then(
        (updatedItem) => {
          cy.request({
            method: "PUT",
            url: Cypress.env(baseUrl) + Cypress.env(path) + item.id,
            body: updatedItem,
            failOnStatusCode: false,
            headers: { Authorization: "Bearer " + Cypress.env(accessToken) },
          })
            .then((response) => {
              cy.log(JSON.stringify(response.body));
              id = response.body.id;
            })
            .as("response");
        }
      );
    });
  }
);

// DELETE Request

When(
  "I make DELETE Request with url: {string} , path: {string}, requestFile: {string}",
  (baseUrl, path, requestFile) => {
    cy.readFile("cypress/fixtures/api/" + requestFile).then((item) => {
      cy.request({
        method: "DELETE",
        url: Cypress.env(baseUrl) + Cypress.env(path) + item.id,
        failOnStatusCode: false,
        //headers: { Authorization: "Bearer " + Cypress.env(accessToken) },
      })
        .then((response) => {
          cy.log(JSON.stringify(response.body));
          // id = response.body.id;
        })
        .as("response");
    });
  }
);

// Verify Response Code

Given("I should receive response with status code {int}", (statusCode) => {
  cy.get("@response").then(($response) => {
    expect($response.status).to.eq(statusCode);
  });
});

// Verify Response Time

Given("I should receive response within {int} milliseconds", (responseTime) => {
  cy.get("@response").then(($response) => {
    expect($response.duration).to.lessThan(1000);
  });
});

// Verify Response Headers

Given(
  "I should receive response headers with property {string} and value {string}",
  (headerKey, headerValue) => {
    cy.get("@response").then(($response) => {
      expect($response.headers).to.have.property(headerKey, headerValue);
    });
  }
);

// Verify Rpesponse Body

Given(
  "I validate the response using data from {string} and file {string}",
  (schemaPath, file) => {
    cy.fixture(Cypress.env(schemaPath) + file).as("schema");

    cy.get("@schema").then(($schema) => {
      cy.get("@response").then(($response) => {
        const isJsonValid = validateSchema($schema, $response);
        expect(isJsonValid).to.be.true;
      });
    });
  }
);

// Save Response

And("I save response of request in {string} file", (fileName) => {
  cy.get("@response").then(($response) => {
    cy.writeFile("cypress/fixtures/api/" + fileName, $response.body);
  });
});
