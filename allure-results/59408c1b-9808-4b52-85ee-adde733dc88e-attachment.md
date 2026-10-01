# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Test >> login to application
- Location: tests\smoke\login.spec.js:10:5

# Error details

```
Test timeout of 65000ms exceeded.
```

```
Error: locator.click: Test timeout of 65000ms exceeded.
Call log:
  - waiting for getByText('Sign out', { exact: true })

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
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]: admin@email.com
        - textbox "Enter Password" [ref=e28]: admin@123
        - heading [level=2] [ref=e29]:
          - img "error" [ref=e30]
          - text: Something went wrong
        - button "Sign in" [ref=e31] [cursor=pointer]
        - link "New user? Signup" [ref=e32] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e33]:
        - heading "Connect with us" [level=2] [ref=e34]
        - generic [ref=e35] [cursor=pointer]:
          - link [ref=e36]:
            - /url: https://youtube.com/MukeshOtwani
          - link [ref=e40]:
            - /url: https://twitter.com/MukeshOtwani
          - link [ref=e43]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
          - link [ref=e46]:
            - /url: https://www.facebook.com/groups/256655817858291
          - link [ref=e49]:
            - /url: https://learn-automation/reddit
  - generic [ref=e64]:
    - generic [ref=e65]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e66]
      - heading "©2023 All rights reserved" [level=2] [ref=e67]
    - generic [ref=e68] [cursor=pointer]:
      - link [ref=e69]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e73]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e76]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e79]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | import{test,expect, selectors} from "@playwright/test"
  2  | 
  3  | 
  4  | export class BasePage
  5  | {
  6  |     constructor(page)
  7  |     {
  8  |         this.page = page;
  9  |     }
  10 | 
  11 |     async getText(selector)
  12 |     {
  13 |         return await selector.textContent()
  14 |     }
  15 |     async type(selector,text )
  16 |     {
  17 |         await selector.fill(text)
  18 |         console.log(`****type performed with value ${text}****`);
  19 |         
  20 |     }
  21 |     async click(selector)
  22 |     {
> 23 |         await selector.click() 
     |                        ^ Error: locator.click: Test timeout of 65000ms exceeded.
  24 |         console.log(`****click performed ****`);
  25 |     }
  26 |     async navigateToApplication(url)
  27 |     {
  28 |         await this.page.goto(url)
  29 |         console.log(`****navigated to url: ${url}****`);
  30 |     }
  31 |     async uploadFiles(selector,filepaths)
  32 |     {
  33 |         await selector.setInputFiles(filepaths)
  34 |         console.log(`****files uploaded: ${filepaths}****`);
  35 |     }
  36 | 
  37 |     async handleDropdown(selector, value)
  38 |         {
  39 |             await selector.selectOption(value);
  40 | 
  41 |             console.log(`**** Handle Dropdown with value ${value} ****`);
  42 |         }
  43 | 
  44 | }
```