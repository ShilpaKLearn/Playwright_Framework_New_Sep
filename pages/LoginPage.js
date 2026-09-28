import {BasePage} from "./BasePage.js"
export class LoginPage extends BasePage
{
    //This constructor will be called the moment we create object of LoginPage
    //All locators should be in constructor which will have page(fixture) as argument this page will come from spec file
    constructor(page)
    {
        super(page) //this constructor will call base page constructor
        //this keyword is used boz it belongs to current class
        this.page = page;// we need page throught the class we need to assign this keyword so that we can start using page in this class 
        //Below are locator which will never have promises
        this.usernameField = page.getByPlaceholder("Enter Email")
        this.passwordField = page.getByPlaceholder("Enter Password")
        this.loginbutton = page.getByText("Sign in",{exact: true})
        this.newUsreSignUpLink = page.getByText("New user? SignUp",{exact:true})
        this.errorMessage = page.locator(".errorMessage")
 
   }
   //We need method which create operation on the above locators and for one method one action or Test case
   async loginToApplication(username,password)
   { 
    //actions returns promise hence will use await
    await this.type(this.usernameField,username)//type is coming from BasePage
    //await this.usernameField.fill(username)
    await this.type(this.passwordField,password)
   // await this.passwordField.fill(password)
   await this.click(this.loginbutton)
    //await this.loginbutton.click()
   }
// one method one action 
   async clickOnNewUserSignUpLink()
    {
        await this.click(this.newUsreSignUpLink)
        //await this.newUsreSignUpLink.click()
    }

    async getErrorMessage()
    {
        return await this.getText(this.errorMessage)
        //return await this.errorMessage.textContent();
    }
   
} 