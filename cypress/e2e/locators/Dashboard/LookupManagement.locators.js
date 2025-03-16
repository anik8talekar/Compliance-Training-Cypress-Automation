class LookupManagementLocators {
  LOOKUP_MANAGEMENT = '//a[@title="Lookup Management"]';
  TRAINING_STATUS = '//span[contains(text(),"Training Status")]';
  TRAINING_TYPE = '//span[contains(text(),"Training Type")]';
  TRAINING = '//span[normalize-space(text())="Training"]';
  TRAINING_TYPE_DROPDOWN = '//mat-select[@formcontrolname="trainingType"]';
  TRAINING_TYPE_OPTION1 = '//span[contains(text(),"PoSH1")]';
  TRAINING_TYPE_OPTION2 = '//span[contains(text(),"OnBoarding")]';
  CONTROL_TYPE = '//span[contains(text(),"Control Type")]';
  DISPLAY_ORDER = '//input[@formcontrolname="displayOrder"]';
  DISPLAY_ORDER_UP = "";
  SYSTEM_NAME_TEXTBOX = '//input[@ng-reflect-name="systemName"]';
}
export default LookupManagementLocators;
