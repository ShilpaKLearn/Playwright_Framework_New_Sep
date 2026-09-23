# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Test >> login to application
- Location: tests\smoke\login.spec.js:9:5

# Error details

```
ReferenceError: dashboardPage is not defined
```

# Page snapshot

```yaml
- generic [ref=f22e3]:
  - navigation [ref=f22e4]:
    - generic [ref=f22e5]:
      - generic [ref=f22e6] [cursor=pointer]:
        - img "logo" [ref=f22e7]
        - heading "Learn Automation Courses" [level=1] [ref=f22e8]
      - generic [ref=f22e9]:
        - img "menu" [ref=f22e10] [cursor=pointer]
        - generic [ref=f22e11]:
          - generic [ref=f22e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f22e13] [cursor=pointer]
          - generic [ref=f22e14]:
            - link "Home" [ref=f22e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f22e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f22e20]:
    - img "Login" [ref=f22e22]
    - generic [ref=f22e23]:
      - generic [ref=f22e25]:
        - heading "Sign In" [level=2] [ref=f22e26]
        - textbox "Enter Email" [ref=f22e27]: admin@email.com
        - textbox "Enter Password" [ref=f22e28]: admin@123
        - button "Sign in" [active] [ref=f22e29] [cursor=pointer]
        - link "New user? Signup" [ref=f22e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f22e31]:
        - heading "Connect with us" [level=2] [ref=f22e32]
        - generic [ref=f22e33] [cursor=pointer]:
          - link [ref=f22e34]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f22e38]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f22e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f22e44]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f22e47]:
            - /url: https://learn-automation/reddit
  - generic [ref=f22e62]:
    - generic [ref=f22e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f22e64]
      - heading "©2023 All rights reserved" [level=2] [ref=f22e65]
    - generic [ref=f22e66] [cursor=pointer]:
      - link [ref=f22e67]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f22e71]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f22e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f22e77]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import {expect} from  '@playwright/test'
  2  | import{test} from "../../fixture/fixture.js"
  3  | //import { LoginPage } from '../../pages/LoginPage.js';
  4  | //import { DashboardPage } from '../../pages/DashboardPage.js';
  5  | import user from '../../testdata/user.json'
  6  | 
  7  | test.describe("Login Test",{tags:['smoke','login']},()=>{
  8  | 
  9  | test('login to application', async({ page,loginpage,dashboardpage })=>
  10 | {
  11 |     await page.goto('/login')
  12 |     // we need to create object of loginpage. In LoginPage.js as we have passed page in constructor as a argument so while creating object we need to pass page
  13 |     //const loginPage = new LoginPage(page)//In order to call we need create object later move this file for abstraction
  14 |    // console.log('Test Data Used In this Test ${user.username and ${user.password}');
  15 |     
  16 |     //Call method we have created and we use await boz async method
  17 |     await loginpage.loginToApplication(user.username,user.password)
  18 | 
  19 |     //const dashboardPage = new DashboardPage(page)
> 20 |     await dashboardPage.clickOnMenuIcon()
     |     ^ ReferenceError: dashboardPage is not defined
  21 |     await dashboardPage.clickOnSignOutButton()
  22 |     expect(page.url()).not.toContain('/login');
  23 | 
  24 | }
  25 | )
  26 | })
```