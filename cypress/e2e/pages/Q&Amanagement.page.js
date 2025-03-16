import QandAManagementLocators from "../locators/Dashboard/Q&AManagement.locators"

var qandaManagementLocators=new QandAManagementLocators();

class QAManagement{
 
clickQandAManagement(){
    cy.xpath(qandaManagementLocators.QANDA_MANAGEMENT).click()
}
enterQuestion(question){
    cy.xpath(qandaManagementLocators.QUESTION_TEXTBOX).type(question)
}
clickMultipleRequired(){
    cy.xpath(qandaManagementLocators.MULTIPLE_REQUIRED_TOGGLE_BTN).click()
}    
clickAddNewforOption(){
    cy.xpath(qandaManagementLocators.ADD_NEW_OPTION_BTN).click()
 }       
clickRequired(){
    cy.xpath(qandaManagementLocators.REQUIRED_TOGGLE_BTN).click()

}
clickAddNewforQuestion(){
    cy.xpath(qandaManagementLocators.ADD_NEW_QUESTION_BTN).click()

}
clickChoice(){
    cy.xpath(qandaManagementLocators.OPTION_RADIO_BTN).click()

}
clickMultiChoice(){
    cy.xpath(qandaManagementLocators.OPTION_CHECKBOX_BTN).click()
}
clickDeleteIconforOption(){
    cy.xpath().click()
}
clickDeleteIconforQuestion(){
    cy.xpath().click()
}
clickSaveandCloseButton(){
    cy.xpath(qandaManagementLocators.SAVE_AND_CLOSE_BTN).click()
}
clickViewDetail(){
    cy.xpath(qandaManagementLocators.VIEW_DETAIL_BTN).click().then(()=>{

        cy.invoke('click')
    })
}

}
export default QAManagement;
