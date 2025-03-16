class QandAManagementLocators {
  QANDA_MANAGEMENT = '//a[@title="Q&A Management"]';
  QUESTION_TEXTBOX = '//input[@formcontrolname="question"]';
  OPTION_TEXTBOX = '//input[@formcontrolname="option"]';
  OPTION_RADIO_BTN = '//input[@type="radio"]';
  OPTION_CHECKBOX_BTN = '(//input[@type="checkbox"])';
  ADD_NEW_OPTION_BTN = '//a//span[contains(text(),"Add New")]';
  MULTIPLE_REQUIRED_TOGGLE_BTN = '//input[@id="multipleRequired0-input"]';
  REQUIRED_TOGGLE_BTN = '//input[@id="required0-input"]';
  ADD_NEW_QUESTION_BTN = '//button[@fdprocessedid="0ycojo"]';
  SAVE_AND_CLOSE_BTN = '//span[contains(text(),"Save & Close")]';
  VIEW_DETAIL_BTN = '(//span[contains(text(),"View Detail")])';
}

export default QandAManagementLocators;
