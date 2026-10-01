
import { BasePage } from "./BasePage.js"

export class RegistrationPage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.page = page ;
        this.usernameReg = page.getByPlaceholder("Name");
        this.useremailReg = page.getByPlaceholder("Email");
        this.userpasswordReg = page.getByPlaceholder("Password");
        this.javaReg=page.getByLabel("JAVA",{exact:true});
        this.seleliumReg=page.getByLabel("RAG",{exact:true});
        //this.interestReg = page.locator("//label[text()='"+interest+"']"); 
        this.genderMaleReg=page.locator("#gender1")
        this.genderFemaleReg=page.locator("#gender2")
        //this.genderReg = page.page.locator("//label[text()='"+gender+"']");
        this.stateReg = page.locator("#state");
        this.hobbiesReg = page.locator("#hobbies")
        this.signupReg = page.getByRole("button",{name:"Sign Up"}) 
        this.successMsgReg = page.locator("//div[text()='Signup successfully, Please login!']");
        
    }
    //Create a method which can perform action on this locator
     async signUp(){
        await this.click(this.signupReg)
    }
    
// one method one action
async userRegistration(username,email,password)
   { 

     await this.type(this.usernameReg,username)
     await this.type(this.useremailReg,email)
     await this.type(this.userpasswordReg,password)
    

   }
  
//    async interestField(interest)
//    {
//     await this.click(this.interestReg,interest)
//    }

   async interestField(interest){

         if(interest==="JAVA")
        {
            await this.click(this.javaReg);
        }
        else if(interest==="RAG")
        {
            await this.click(this.seleliumReg);
        }

    }

//    async genderField(gender)
//    {
//     await this.click(this.genderReg,gender)
//    }

    async genderField(gender){
        if(gender.toLowerCase()==="male")
        {
            await this.click(this.genderMaleReg);
        }
        else if(gender.toLowerCase()==="female")
        {
            await this.click(this.genderFemaleReg);
        }
    }

   async stateField(state)
   {
    await this.handleDropdown(this.stateReg,state)
   }

   async hobbiesField(hobbies)
   {
    await this.handleDropdown(this.hobbiesReg,hobbies)
   }

   async getSuccessMessage()
   {
    return await this.getText(this.successMsgReg) 
  
    
   }



}