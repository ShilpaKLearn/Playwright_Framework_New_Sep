# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user_login.spec.js >> Data Driven Test for login scenario >> login to application 1
- Location: tests\smoke\different_user_login.spec.js:10:9

# Error details

```
ReferenceError: selector is not defined
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
        - button "Cart" [ref=e10] [cursor=pointer]
        - generic [ref=e11]: Manage
        - img "menu" [ref=e12] [cursor=pointer]
        - generic [ref=e13]:
          - generic [ref=e14]:
            - text: Learn Automation Courses
            - img "delete" [ref=e15] [cursor=pointer]
          - generic [ref=e16]:
            - link "Home" [ref=e17] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e19] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=e21] [cursor=pointer]
  - generic [ref=e27]:
    - generic [ref=e28]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e29]
      - heading "©2023 All rights reserved" [level=2] [ref=e30]
    - generic [ref=e31] [cursor=pointer]:
      - link [ref=e32]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e36]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e39]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e42]:
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
> 12 |         return await selector.textContent()
     |         ^ ReferenceError: selector is not defined
  13 |     }
  14 |     async type(selector,text )
  15 |     {
  16 |         await selector.fill(text)
  17 |         console.log(`****type performed with value ${text}****`);
  18 |         
  19 |     }
  20 |     async click(selector)
  21 |     {
  22 |         await selector.click() 
  23 |         console.log(`****click performed ****`);
  24 |     }
  25 |     async navigateToApplication(url)
  26 |     {
  27 |         await this.page.goto(url)
  28 |         console.log(`****navigated to url: ${url}****`);
  29 |     }
  30 |     async uploadFiles(selector,filepaths)
  31 |     {
  32 |         await selector.setInputFiles(filepaths)
  33 |         console.log(`****files uploaded: ${filepaths}****`);
  34 |     }
  35 | 
  36 | 
  37 | 
  38 | 
  39 | }
```