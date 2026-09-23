# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Test >> login to application
- Location: tests\smoke\login.spec.js:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Sign out' })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f12e3]:
  - navigation [ref=f12e4]:
    - generic [ref=f12e5]:
      - generic [ref=f12e6] [cursor=pointer]:
        - img "logo" [ref=f12e7]
        - heading "Learn Automation Courses" [level=1] [ref=f12e8]
      - generic [ref=f12e9]:
        - img "menu" [ref=f12e10] [cursor=pointer]
        - generic [ref=f12e11]:
          - generic [ref=f12e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f12e13] [cursor=pointer]
          - generic [ref=f12e14]:
            - link "Home" [ref=f12e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f12e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f12e20]:
    - img "Login" [ref=f12e22]
    - generic [ref=f12e23]:
      - generic [ref=f12e25]:
        - heading "Sign In" [level=2] [ref=f12e26]
        - textbox "Enter Email" [ref=f12e27]: admin@email.com
        - textbox "Enter Password" [ref=f12e28]: admin@1234
        - heading [level=2] [ref=f12e29]:
          - img "error" [ref=f12e30]
          - text: Email and Password Doesn't match
        - button "Sign in" [ref=f12e31] [cursor=pointer]
        - link "New user? Signup" [ref=f12e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f12e33]:
        - heading "Connect with us" [level=2] [ref=f12e34]
        - generic [ref=f12e35] [cursor=pointer]:
          - link [ref=f12e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f12e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f12e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f12e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f12e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=f12e64]:
    - generic [ref=f12e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f12e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f12e67]
    - generic [ref=f12e68] [cursor=pointer]:
      - link [ref=f12e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f12e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f12e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f12e79]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import{test,expect, selectors} from "@playwright/test"
  2  | 
  3  | export class BasePage
  4  | {
  5  |     constructor(page)
  6  |     {
  7  |         this.page = page;
  8  |     }
  9  | 
  10 |     async getText()
  11 |     {
  12 |         return await selector.textContent()
  13 |     }
  14 |     async type(selector,text )
  15 |     {
  16 |         await selector.fill(text)
  17 |     }
  18 |     async click(selector)
  19 |     {
> 20 |         await selector.click() 
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     }
  22 |     async navigateToApplication(url)
  23 |     {
  24 |         await this.page.goto(url)
  25 |     }
  26 |     async uploadFiles(selector,filepaths)
  27 |     {
  28 |         await selector.setInputFiles(filepaths)
  29 |     }
  30 | 
  31 | 
  32 | 
  33 | 
  34 | }
```