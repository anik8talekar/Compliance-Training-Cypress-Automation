class BaseLocators {
  LOGIN_BTN = '//span[contains(text(),"Login")]';
  DASHBOARD = '//span[contains(text(),"Dashboard")]';
  LOOKUP = '//span[contains(text(),"Lookup")]';
  MY_PROFILE = '//span[text()="My Profile"]';
  CONTACTS = '//span[text()="Contacts"]';
  ADD_NEW_BTN = '//span[contains(text(),"Add New")]';
  NAME_TEXTBOX = '//input[@formcontrolname="name"]';
  TRAINING_NAME_TEXTBOX = '//input[@formcontrolname="trainingName"]';
  SHORT_DESCRIPTION_TEXTBOX = '//textarea[@formcontrolname="shortDescription"]';
  LONG_DESCRIPTION_TEXTBOX = '//textarea[@formcontrolname="longDescription"]';
  STATUS_DROPDOWN = '//mat-select[@formcontrolname="status"]';
  STATUS_OPTION1 = '//span[@class="mat-option-text"][text()="Active"]';
  STATUS_OPTION2 = '//span[@class="mat-option-text"][text()="Archived"]';
  SAVE_BTN = '//span[contains(text(),"Save")]';
  TOAST_MESSAGE = '//div[@id="toast-container"]';
  CLOSE_BTN = '//mat-icon[contains(text(),"close")]';
  EDIT_BTN = '(//mat-icon [text()="edit"])';
  DELETE_BTN = '(//mat-icon [text()="delete"])';
  DELETE_OK = '//span[contains(text(),"Ok")]';
  DELETE_CANCEL = '//span[contains(text(),"Cancel")]';
  UNSAVED_CHANGES_POPUP = '//h2[contains(text(),"Unsaved Changes")]';
  UNSAVED_CHANGES_OK = '//span[contains(text(),"Ok")]';
  UNSAVED_CHANGES_CANCEL = '//button[@id="acceptButton"]';
  BACK_BTN = '//span[contains(text(),"Back")]';
  NEXT_PAGE_BTN = '//button[@aria-label="Next page"]';
  PREVIOUS_PAGE_BTN = '//button[@aria-label="Previous page"]';
  ITEMS_PER_PAGE_DROPDOWN = '//span[normalize-space(text())="5"]';
  ITEMS_PER_PAGE_OPTION10 = '//mat-option/span[contains(text(),"10")]';
  DESCRIPTION_TEXTBOX = '//input[@formcontrolname="description"]';
  HINT_TEXTBOX = '//textarea[@formcontrolname="hint"]';
}

export default BaseLocators;
