# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
ReferenceError: Cannot access 'randomEmail' before initialization
```

# Test source

```ts
  1  | 
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../../fixture/fixture.js";
  4  | import userDetails  from "../../testdata/registrationdetails.json"
  5  | 
  6  | 
  7  | test.describe('User Registration',{tags:['smoke','registration']},()=>{
  8  | 
  9  | test('registration',async({page,registrationpage})=>{
> 10 |     let randomEmail = randomEmail()
     |                       ^ ReferenceError: Cannot access 'randomEmail' before initialization
  11 |     await page.goto('/signup')
  12 |     await registrationpage.userRegistration(userDetails.name,randomEmail,userDetails.password)     
  13 |     await registrationpage.interestField(userDetails.interest)
  14 |     await registrationpage.genderField(userDetails.gender)
  15 |     await registrationpage.stateField(userDetails.state)
  16 |     await registrationpage.hobbiesField(userDetails.hobbies)
  17 |     await registrationpage.signUp()
  18 |     expect(await registrationpage.getSuccessMessage()).toContain("Signup successfully, Please login!")
  19 | })
  20 | 
  21 | 
  22 | 
  23 | })
```