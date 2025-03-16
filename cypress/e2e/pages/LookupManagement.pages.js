import LookupManagementLocators from "../locators/Dashboard/LookupManagement.locators";
import BaseLocators from "../locators/Base.locator";

var lookupManagementLocators = new LookupManagementLocators();
var baseLocators = new BaseLocators();
class LookupManagement {
  selectTrainingStatus() {
    cy.xpath(lookupManagementLocators.TRAINING_STATUS).click();
  }
  selectTrainingType() {
    cy.xpath(lookupManagementLocators.TRAINING_TYPE).click();
  }
  selectTraining() {
    cy.xpath(lookupManagementLocators.TRAINING).click();
  }

  selectTrainingTypeDropDown() {
    cy.xpath(lookupManagementLocators.TRAINING_TYPE_DROPDOWN).click();
    cy.xpath(lookupManagementLocators.TRAINING_TYPE_OPTION1).click();
  }
  selectControlType() {
    cy.xpath(lookupManagementLocators.CONTROL_TYPE).click();
  }
  selectDisplayorder() {
    cy.xpath(lookupManagementLocators.DISPLAY_ORDER).type("131");
  }

  validateAddMessageUnderTrainingStatus() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training Status added successfully"
    );
  }
  validateAddMessageUnderTrainingType() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training Type added successfully"
    );
  }
  validateUpdateMessageUnderTrainingStatus() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training Status updated successfully"
    );
  }
  validateUpdateMessageUnderTrainingType() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training Type updated successfully"
    );
  }
  validateUpdateMessageUnderTraining() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training updated successfully"
    );
  }
  validateAddMessageUnderTraining() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Training added successfully"
    );
  }
  validateAddMessageUnderControlType() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Control Type added successfully"
    );
  }
  validateUpdateMessageUnderControlType() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Control Type updated successfully"
    );
  }
}
export default LookupManagement;
