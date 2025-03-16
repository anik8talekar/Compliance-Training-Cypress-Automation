import ContentManagement from "../../../../pages/ContentManagement";
import DataGenerator from "../../../../../support/dataGenerator";

const contentManagement = new ContentManagement();

var ContentData;

before(() => {
  cy.writeFile(
    "cypress/fixtures/ui/mock-contentdata.json",
    DataGenerator.generateLookUpData()
  );
  cy.readFile("cypress/fixtures/uimock-contentdata.json").then((data) => {
    ContentData = data;
  });
});

And("I navigate to the content management screen", () => {});

When("I click on add new button", () => {
  contentManagement.clickAddNewButton();
});

And("I enter appropriate data", () => {});

Then("I verify new record is created", () => {});

Given("I visit the last page", () => {
  // can make common step
  for (let n = 0; n < 1; n++) {
    cy.get("").click({ force: true }); // put next button's path
  }
});

When("I click on edit icon", () => {
  cy.xpath('(//mat-icon [text()="edit"])[2]').click();
});

Then("I enter updated data", () => {});

And("I click on save button", () => {
  cy
    .xpath // Xpath should be written here
    ()
    .click();
  cy.get(".toast-message").should(
    "have.text",
    "Training Status updated successfully" // update toast msg
  );
  cy.wait(5000);
});

When("I click on delete icon", () => {});

Then("I verify the appropriate message", () => {
  cy.get(".toast-message").should("have.text", "Deleted Successfully!"); // update toast msg
});

When("I click & select the pagesize from dropdown", () => {});

Then(
  "I should be able to see records on the same page according to pagesize",
  () => {}
);

Then("The unsaved changes pop-up should be displayed", () => {});

And(
  "It should discard the change & redirected to the same content management screen",
  () => {}
);

And("It should not discard the changes", () => {});
