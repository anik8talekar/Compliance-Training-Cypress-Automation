class ContentManagementLocators {
  CONTENT_MANAGEMENT = '//a[@title="Content Management"]';
  
  TITLE_TEXTBOX = '//input[@formcontrolname="title"]';
  CONTENT_TYPE_DROPDOWN = '//mat-select[@formcontrolname="contentType"]';
  CONTENT_TYPE_OPTION1 = '//span[text()="Audio"]';
  CONTENT_TYPE_OPTION2 = '//span[text()="Video"]';
  CONTENT_TYPE_OPTION3='';
  AUDIOURL='//input[@formcontrolname="contentData"]';
  VIDEOURL='//input[@formcontrolname="contentData"]';
  CONTENT_TEXT='//span[contains(text(),"Enter text here...")]';
 
}

export default ContentManagementLocators;
