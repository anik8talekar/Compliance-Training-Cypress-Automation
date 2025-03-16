import LookupManagement from "../../../../pages/LookupManagement.pages";
import BaseFunctions from "../../../../pages/Base.page";

const lookupManagement = new LookupManagement();
const baseFunction = new BaseFunctions();

Given("I open the app", () => {
  baseFunction.openTheApp();
});

When("I navigate to the training status screen", () => {
  lookupManagement.selectTrainingStatus();
});

When("I click on add new button", () => {
  baseFunction.clickAddNewButton();
});

When("I enter training status data", () => {
  baseFunction.enterName();
  baseFunction.enterShortDescription();
  baseFunction.enterLongDescription();
  baseFunction.selectStatus();
});

Then("I click on save button", () => {
  baseFunction.clickSaveButton();
});

Given("I verify new record is created under training status", () => {
  lookupManagement.validateAddMessageUnderTrainingStatus();
});

When("I click on edit icon", () => {
  baseFunction.clickEditIcon();
});

Then("I enter updated data", () => {
  baseFunction.updateData();
});

Then("I verify the Appropriate Update Message unser training status", () => {
  lookupManagement.validateUpdateMessageUnderTrainingStatus();
});

Then("I click on delete icon", () => {
  baseFunction.clickDeleteIcon();
});

Then("I verify the appropriate delete message", () => {
  baseFunction.validateDeleteMessage();
});

Then("I click & select the pagesize from dropdown", () => {
  baseFunction.selectItemsPerPage();
});

Then(
  "I should be able to see records on the same page according to pagesize",
  () => {}
);

When("I click on close button", () => {
  baseFunction.clickCloseButton();
});

Then(
  "I should be able to see records on the same page according to pagesize",
  () => {}
);

Then("The unsaved changes pop-up should be displayed", () => {
  baseFunction.unsavedChangesPopup();
});

And("I click on cancel button", () => {
  baseFunction.clickUnsavedChangesCancel();
});

And("I click on ok button", () => {
  baseFunction.clickUnsavedChangesOk();
});

And(
  "It should discard the change & redirected to the same training screen",
  () => {}
);

And("It should not discard the changes", () => {});

When("I navigate to the training type screen", () => {
  lookupManagement.selectTrainingType();
});

When("I enter training type data", () => {
  baseFunction.enterName();
  baseFunction.enterShortDescription();
  baseFunction.enterLongDescription();
  baseFunction.selectStatus();
});

Given("I verify new record is created under training type", () => {
  lookupManagement.validateAddMessageUnderTrainingType();
});
Then("I verify the Appropriate Update Message under training type", () => {
  lookupManagement.validateUpdateMessageUnderTrainingType();
});

When("I navigate to the training screen", () => {
  lookupManagement.selectTraining();
});

When("I enter training data", () => {
  baseFunction.enterTrainingName();
  baseFunction.enterShortDescription();
  baseFunction.enterLongDescription();
  baseFunction.selectStatus();
  lookupManagement.selectTrainingTypeDropDown();
});

Given("I verify new record is created under training", () => {
  lookupManagement.validateAddMessageUnderTraining();
});
Then("I verify the Appropriate Update Message under training", () => {
  lookupManagement.validateUpdateMessageUnderTraining();
});

Then("I enter updated Training data", () => {
  baseFunction.updateTrainingData();
});

When("I navigate to the control type screen", () => {
  lookupManagement.selectControlType();
});

When("I enter control type data", () => {
  baseFunction.enterName();
  baseFunction.selectStatus();
  lookupManagement.selectDisplayorder();
});

Given("I verify new record is created under control type", () => {
  lookupManagement.validateAddMessageUnderControlType();
});

Then("I enter updated control type data", () => {
  baseFunction.updateControlTypeData();
});
Then("I verify the Appropriate Update Message under control type", () => {
  lookupManagement.validateUpdateMessageUnderControlType();
});

Then(
  "It should discard the change & redirected to the same control type screen",
  () => {}
);
