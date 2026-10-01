# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Test >> login to application
- Location: tests\smoke\login.spec.js:8:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByText('Sign out', { exact: true })
  - operation was aborted: Test timeout of 60000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f8e3]:
  - navigation [ref=f8e4]:
    - generic [ref=f8e5]:
      - generic [ref=f8e6] [cursor=pointer]:
        - img "logo" [ref=f8e7]
        - heading "Learn Automation Courses" [level=1] [ref=f8e8]
      - generic [ref=f8e9]:
        - img "menu" [ref=f8e10] [cursor=pointer]
        - generic [ref=f8e11]:
          - generic [ref=f8e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f8e13] [cursor=pointer]
          - generic [ref=f8e14]:
            - link "Home" [ref=f8e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f8e17] [cursor=pointer]:
              - /url: /practise
  - generic [ref=f8e20]:
    - img "Login" [ref=f8e22]
    - generic [ref=f8e23]:
      - generic [ref=f8e25]:
        - heading "Sign In" [level=2] [ref=f8e26]
        - textbox "Enter Email" [ref=f8e27]: admin@email.com
        - textbox "Enter Password" [ref=f8e28]: admin@1234
        - heading [level=2] [ref=f8e29]:
          - img "error" [ref=f8e30]
          - text: Email and Password Doesn't match
        - button "Sign in" [ref=f8e31] [cursor=pointer]
        - link "New user? Signup" [ref=f8e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=f8e33]:
        - heading "Connect with us" [level=2] [ref=f8e34]
        - generic [ref=f8e35] [cursor=pointer]:
          - link [ref=f8e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=f8e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=f8e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=f8e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=f8e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=f8e64]:
    - generic [ref=f8e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f8e66]
      - heading "©2023 All rights reserved" [level=2] [ref=f8e67]
    - generic [ref=f8e68] [cursor=pointer]:
      - link [ref=f8e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f8e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f8e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f8e79]:
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
     |                        ^ Error: locator.click: Test timeout of 60000ms exceeded.
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