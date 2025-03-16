import Ajv from "ajv";

const getSchemaError = (getAjvError) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

export const validateSchema = (schema, response) => {
  const ajv = new Ajv();
  const valid = ajv.validate(schema, response);

  if (!valid) {
    getSchemaError(ajv.validate.errors).then((schemaError) => {
      throw new Error(schemaError);
    });
  } else {
    cy.log("Schema validated!");
    return true;
  }
};
