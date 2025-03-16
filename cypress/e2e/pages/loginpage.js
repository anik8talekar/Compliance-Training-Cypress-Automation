///<reference types="Cypress"/>
class Loginpage
{

    loginlocators=
    {
        loginbutton:()=>cy.get('span[class="mat-button-wrapper"]'),
        

        

    }
visit()
{
    cy.visit("https://imriel-training.azurewebsites.net/login")
}

login()
{
    
    this.loginlocators.loginbutton().click();
}
}
export default Loginpage