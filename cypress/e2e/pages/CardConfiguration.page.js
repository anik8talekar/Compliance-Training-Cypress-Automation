import CardConfigurationLocators from "../locators/Dashboard/CardConfiguration.locators";

var cardconfigurationLocators= new CardConfigurationLocators();


class CardConfiguration{
    clickCardConfiguration(){
        cy.xpath(cardconfigurationLocators.CARD_CONFIGURATION).click()
    }

    enterContent(content){
        cy.xpath(cardconfigurationLocators.CONTENT_TEXTBOX).type(content)
    }
    clickSwitchOptionButton(){
        cy.xpath(cardconfigurationLocators.SWITCH_TO_QUESTION_TOGGLE_BTN).click()
    }

    clickCardConfiguration(){
        cy.xpath(cardconfigurationLocators.CARD_CONFIGURATION_BTN).click()
    }
    clickDeleteIconforContent(){
        cy.xpath(cardconfigurationLocators.DELETE_CONTENT).click()
    }
    clickPreview(){
        cy.xpath(cardconfigurationLocators.PREVIEW_BTN).click().then(()=>{
            cy.invoke('click')
        })

    }

}
export default CardConfiguration;