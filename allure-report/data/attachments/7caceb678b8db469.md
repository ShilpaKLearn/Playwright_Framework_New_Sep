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
  - generic [ref=e23]:
    - heading "Welcome Admin Manager to Learn Automation Courses" [level=4] [ref=e24]
    - generic [ref=e25]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - heading "Selenium For Web Automation" [level=2] [ref=e31]
          - paragraph [ref=e32]: Selenium For Web Automation...
        - generic [ref=e33]:
          - img "instructor" [ref=e34]
          - text: Mukesh Otwani
        - generic [ref=e35]:
          - img "clock" [ref=e36]
          - generic [ref=e37]: "Start:"
          - text: Mon Feb 17 2025
        - generic [ref=e38]:
          - img "clock" [ref=e39]
          - generic [ref=e40]: "Finish:"
          - text: Mon Mar 17 2025
        - generic [ref=e41]:
          - text: "Price:"
          - generic [ref=e42]: ₹1500
        - button [ref=e43] [cursor=pointer]:
          - text: Add to Cart
          - img "right arrow" [ref=e44]
      - generic [ref=e48]:
        - generic [ref=e49]:
          - heading "Playwright with Java" [level=2] [ref=e50]
          - paragraph [ref=e51]: This course is a complete guide to create a framework project- Beginner Level...
        - generic [ref=e52]:
          - img "instructor" [ref=e53]
          - text: Shaik Jr
        - generic [ref=e54]:
          - img "clock" [ref=e55]
          - generic [ref=e56]: "Start:"
          - text: Wed Jun 03 2026
        - generic [ref=e57]:
          - img "clock" [ref=e58]
          - generic [ref=e59]: "Finish:"
          - text: Mon Aug 03 2026
        - generic [ref=e60]:
          - text: "Price:"
          - generic [ref=e61]: ₹15000
        - button [ref=e62] [cursor=pointer]:
          - text: Add to Cart
          - img "right arrow" [ref=e63]
      - generic [ref=e67]:
        - generic [ref=e68]:
          - heading "Playwright with TypeScript" [level=2] [ref=e69]
          - paragraph [ref=e70]: Playwright with TypeScript...
        - generic [ref=e71]:
          - img "instructor" [ref=e72]
          - text: Shaik Jr
        - generic [ref=e73]:
          - img "clock" [ref=e74]
          - generic [ref=e75]: "Start:"
          - text: Mon Sep 21 2026
        - generic [ref=e76]:
          - img "clock" [ref=e77]
          - generic [ref=e78]: "Finish:"
          - text: Wed Oct 21 2026
        - generic [ref=e79]:
          - text: "Price:"
          - generic [ref=e80]: ₹1500
        - button [ref=e81] [cursor=pointer]:
          - text: Add to Cart
          - img "right arrow" [ref=e82]
      - generic [ref=e86]:
        - generic [ref=e87]:
          - heading "Check" [level=2] [ref=e88]
          - paragraph [ref=e89]: Checking for automation...
        - generic [ref=e90]:
          - img "instructor" [ref=e91]
          - text: CCCC
        - generic [ref=e92]:
          - img "clock" [ref=e93]
          - generic [ref=e94]: "Start:"
          - text: Tue Sep 22 2026
        - generic [ref=e95]:
          - img "clock" [ref=e96]
          - generic [ref=e97]: "Finish:"
          - text: Thu Oct 22 2026
        - generic [ref=e98]:
          - text: "Price:"
          - generic [ref=e99]: ₹1500
        - button [ref=e100] [cursor=pointer]:
          - text: Add to Cart
          - img "right arrow" [ref=e101]
      - generic [ref=e105]:
        - generic [ref=e106]:
          - heading "Java Course(OOPS)" [level=2] [ref=e107]
          - paragraph [ref=e108]: Best Java course...
        - generic [ref=e109]:
          - img "instructor" [ref=e110]
          - text: Narendra MODI
        - generic [ref=e111]:
          - img "clock" [ref=e112]
          - generic [ref=e113]: "Start:"
          - text: Wed Sep 23 2026
        - generic [ref=e114]:
          - img "clock" [ref=e115]
          - generic [ref=e116]: "Finish:"
          - text: Fri Oct 23 2026
        - generic [ref=e117]:
          - text: "Price:"
          - generic [ref=e118]: ₹15000
        - button [ref=e119] [cursor=pointer]:
          - text: Add to Cart
          - img "right arrow" [ref=e120]
  - generic [ref=e122]:
    - generic [ref=e123]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e124]
      - heading "©2023 All rights reserved" [level=2] [ref=e125]
    - generic [ref=e126] [cursor=pointer]:
      - link [ref=e127]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e131]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e134]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e137]:
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