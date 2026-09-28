# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'name')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=e19] [cursor=pointer]
  - img "Login" [ref=e27]
  - generic [ref=e29]:
    - generic [ref=e30]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e31]
      - heading "©2023 All rights reserved" [level=2] [ref=e32]
    - generic [ref=e33] [cursor=pointer]:
      - link [ref=e34]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e38]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e41]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e44]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | 
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../../fixture/fixture.js";
  4  | import { userDetails } from "../../testdata/registrationdetails.json"
  5  | 
  6  | 
  7  | test.describe('User Registration',{tags:['smoke','registration']},()=>{
  8  | 
  9  | test('registration',async({page,registrationpage})=>{
  10 | 
  11 |     await page.goto('/signup')
> 12 |     await registrationpage.userRegistration(userDetails.name,userDetails.email,userDetails.password)
     |                                                         ^ TypeError: Cannot read properties of undefined (reading 'name')
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