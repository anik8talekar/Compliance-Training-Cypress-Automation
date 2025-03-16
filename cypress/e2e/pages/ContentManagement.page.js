import ContentManagementLocators from "../locators/Dashboard/ContentManagement.locators"

var contentManagementLocators= new ContentManagementLocators();


class ContentManagement{
 
clickContentManagement(){
    cy.xpath(contentManagementLocators.CONTENT_MANAGEMENT).click()
}
enterTitle(title){
    cy.xpath(contentManagementLocators.TITLE_TEXTBOX).type(title)
}
selectContentTypeAudio(){
    cy.xpath(contentManagementLocators.CONTENT_TYPE_DROPDOWN).click()
    cy.xpath(contentManagementLocators.CONTENT_TYPE_OPTION1).click()
}

selectContentTypeVideo(){
    cy.xpath(contentManagementLocators.CONTENT_TYPE_DROPDOWN).click()
    cy.xpath(contentManagementLocators.CONTENT_TYPE_OPTION2).click()

}

selectContentTypeText(){
    cy.xpath(contentManagementLocators.CONTENT_TYPE_DROPDOWN).click()
    cy.xpath(contentManagementLocators.CONTENT_TYPE_OPTION3).click()
}
enterAudioURL(URL){
    cy.xpath(contentManagementLocators.AUDIOURL).type(URL)
}

enterVideoURL(URL){
    cy.xpath(contentManagementLocators.VIDEOURL).type(URL)
}
 enterText(text){
    cy.xpath(contentManagementLocators.CONTENT_TEXT).type(text)
 }
    
}
export default ContentManagement;