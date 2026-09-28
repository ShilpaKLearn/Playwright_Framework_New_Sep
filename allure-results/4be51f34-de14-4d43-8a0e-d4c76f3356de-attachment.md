# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
ReferenceError: interest is not defined
```

# Test source

```ts
  1  | 
  2  | import { BasePage } from "./BasePage.js";
  3  | 
  4  | export class RegistrationPage extends BasePage
  5  | {
  6  |     constructor(page)
  7  |     {
  8  |         super(page)
  9  |         this.page = page ;
  10 |         this.usernameReg = page.getByPlaceholder("Name");
  11 |         this.useremailReg = page.getByPlaceholder("Email");
  12 |         this.userpasswordReg = page.getByPlaceholder("Password");
> 13 |         this.interestReg = page.locator("//label[text()='"+interest+"']");
     |                                                            ^ ReferenceError: interest is not defined
  14 |         this.genderReg = page.page.locator("//label[text()='"+gender+"']");
  15 |         this.stateReg = page.locator("#state");
  16 |         this.hobbiesReg = page.locator("//option[@value='"+hobbies+"']");
  17 |         this.signupReg = page.getByRole('button', { name: 'Sign up' })
  18 |         this.successMsgReg = page.locator("//div[text()='Signup successfully, Please login!']");
  19 |         
  20 |     }
  21 |     //Create a method which can perform action on this locator
  22 |      async signUp(){
  23 |         await this.click(this.signupReg)
  24 |     }
  25 | // one method one action
  26 | async userRegistration(username,email,password)
  27 |    { 
  28 | 
  29 |      await this.type(this.usernameReg,username)
  30 |      await this.type(this.useremailReg,email)
  31 |      await this.type(this.userpasswordReg,password)
  32 |      await this.click(this.signupReg)
  33 | 
  34 |    }
  35 |   
  36 |    async interestField(interest)
  37 |    {
  38 |     await this.click(this.interestReg,interest)
  39 |    }
  40 | 
  41 |    async genderField(gender)
  42 |    {
  43 |     await this.click(this.genderReg,gender)
  44 |    }
  45 | 
  46 |    async stateField(state)
  47 |    {
  48 |     await this.handleDropdown(this.stateReg,state)
  49 |    }
  50 | 
  51 |    async hobbiesField(hobbies)
  52 |    {
  53 |     await this.handleDropdown(this.hobbiesReg,hobbies)
  54 |    }
  55 | 
  56 |    async getSuccessMessage()
  57 |    {
  58 |     return await this.getText(this.successMsgReg)   
  59 |    }
  60 | 
  61 | 
  62 | 
  63 | }
```