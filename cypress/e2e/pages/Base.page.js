import BaseLocators from "../locators/Base.locator";
import DataGenerator from "../../support/dataGenerator";
import LookupManagementLocators from "../locators/Dashboard/LookupManagement.locators";

var baseLocators = new BaseLocators();
var lookupManagementLocators = new LookupManagementLocators();
var LookupData;

before(() => {
  cy.writeFile(
    "cypress/fixtures/mock-lookupdata.json",
    DataGenerator.generateLookUpData()
  );
  cy.readFile("cypress/fixtures/mock-lookupdata.json").then((data) => {
    LookupData = data;
  });
});

class BaseFunctions {
  openTheApp() {
    cy.visit("https://imriel-training.azurewebsites.net/dashboard/lookup");
    cy.xpath(baseLocators.LOGIN_BTN).click();
    cy.xpath(baseLocators.LOOKUP).click();
  }
  clickAddNewButton() {
    cy.xpath(baseLocators.ADD_NEW_BTN).click();
  }
  enterName() {
    cy.xpath(baseLocators.NAME_TEXTBOX).type(LookupData.Name);
  }
  enterTrainingName() {
    cy.xpath(baseLocators.TRAINING_NAME_TEXTBOX).type(LookupData.Name);
  }
  enterShortDescription() {
    cy.xpath(baseLocators.SHORT_DESCRIPTION_TEXTBOX).type(
      LookupData.ShortDescription
    );
  }
  enterLongDescription() {
    cy.xpath(baseLocators.LONG_DESCRIPTION_TEXTBOX).type(
      LookupData.LongDescription
    );
  }
  selectStatus() {
    cy.xpath(baseLocators.STATUS_DROPDOWN).click();
    cy.xpath(baseLocators.STATUS_OPTION1).click();
  }
  clickSaveButton() {
    cy.xpath(baseLocators.SAVE_BTN).click();
    cy.wait(5000);
  }
  clickDeleteIcon() {
    cy.xpath(baseLocators.DELETE_BTN).last().click();
    cy.xpath(baseLocators.DELETE_OK).click();
    cy.wait(5000);
  }
  clickEditIcon() {
    cy.xpath(baseLocators.EDIT_BTN).last().click();
  }
  enterDiscription(description) {
    cy.xpath(baseLocators.DESCRIPTION_TEXTBOX).type(description);
  }
  enterHint(hint) {
    cy.xpath(baseLocators.HINT_TEXTBOXs).type(hint);
  }
  clickSliderWindowCloseButton() {
    cy.xpath(baseLocators.CLOSE_BTN).click();
    cy.xpath(baseLocators.UNSAVED_CHANGES_CANCEL).click();
    cy.xpath(baseLocators.CLOSE_BTN).click();
    cy.xpath(baseLocators.UNSAVED_CHANGES_OK).click();
  }

  clickCloseButton() {
    cy.xpath(baseLocators.CLOSE_BTN).click();
  }

  unsavedChangesPopup() {
    cy.xpath(baseLocators.UNSAVED_CHANGES_POPUP).should(
      "have.text",
      "Unsaved Changes"
    );
  }
  clickUnsavedChangesCancel() {
    cy.xpath(baseLocators.UNSAVED_CHANGES_CANCEL).click();
  }
  clickUnsavedChangesOk() {
    cy.xpath(baseLocators.UNSAVED_CHANGES_OK).click();
  }
  dragNdrop() {
    //cannot find proper method
    // const dataTransfer=new DataTransfer
    // cy.xpath().trigger('dragstart',{
    //   dataTransfer
    // });
    // cy.xpath().trigger('drop',{
    //   dataTransfer
    // });
  }

  selectItemsPerPage() {
    cy.xpath(baseLocators.ITEMS_PER_PAGE_DROPDOWN).click();
    cy.xpath(baseLocators.ITEMS_PER_PAGE_OPTION10).click();
  }

  clickNextPage() {}

  clickPreviousPage() {}

  updateData() {
    cy.xpath(baseLocators.NAME_TEXTBOX).clear().type(LookupData.Name);
    cy.xpath(baseLocators.SHORT_DESCRIPTION_TEXTBOX)
      .clear()
      .type(LookupData.ShortDescription);
    cy.xpath(baseLocators.LONG_DESCRIPTION_TEXTBOX)
      .clear()
      .type(LookupData.LongDescription);
    cy.xpath(baseLocators.STATUS_DROPDOWN).click();
    cy.xpath(baseLocators.STATUS_OPTION2).click();
  }

  updateTrainingData() {
    cy.xpath(baseLocators.TRAINING_NAME_TEXTBOX).clear().type(LookupData.Name);
    cy.xpath(baseLocators.SHORT_DESCRIPTION_TEXTBOX)
      .clear()
      .type(LookupData.ShortDescription);
    cy.xpath(baseLocators.LONG_DESCRIPTION_TEXTBOX)
      .clear()
      .type(LookupData.LongDescription);
    cy.xpath(baseLocators.STATUS_DROPDOWN).click();
    cy.xpath(baseLocators.STATUS_OPTION2).click();
  }

  validateDeleteMessage() {
    cy.xpath(baseLocators.TOAST_MESSAGE).should(
      "have.text",
      "Deleted Successfully!"
    );
  }
  clickEnterSystemName() {
    cy.xpath(lookupManagementLocators.SYSTEM_NAME_TEXTBOX)
      .click()
      .type(LookupData.SystemName);
  }
  updateControlTypeData() {
    cy.xpath(baseLocators.NAME_TEXTBOX).clear().type(LookupData.Name);
    cy.xpath(baseLocators.STATUS_DROPDOWN).click();
    cy.xpath(baseLocators.STATUS_OPTION2).click();
    cy.xpath(lookupManagementLocators.DISPLAY_ORDER).clear().type("158");
  }
}

export default BaseFunctions;
