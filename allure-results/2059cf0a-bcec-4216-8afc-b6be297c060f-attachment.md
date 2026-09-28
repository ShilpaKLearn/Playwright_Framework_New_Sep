# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user_login.spec.js >> Data Driven Test for login scenario >> login to application 1
- Location: tests\smoke\different_user_login.spec.js:10:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.errorMessage')
  - operation was aborted: Test timeout of 30000ms exceeded.

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
  - generic [ref=e24]:
    - generic [ref=e28]:
      - generic [ref=e29]:
        - heading "Selenium For Web Automation" [level=2] [ref=e30]
        - paragraph [ref=e31]: Selenium For Web Automation...
      - generic [ref=e32]:
        - img "instructor" [ref=e33]
        - text: Mukesh Otwani
      - generic [ref=e34]:
        - img "clock" [ref=e35]
        - generic [ref=e36]: "Start:"
        - text: Mon Feb 17 2025
      - generic [ref=e37]:
        - img "clock" [ref=e38]
        - generic [ref=e39]: "Finish:"
        - text: Mon Mar 17 2025
      - generic [ref=e40]:
        - text: "Price:"
        - generic [ref=e41]: ₹1500
      - button [ref=e42] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e43]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - heading "Playwright with Java" [level=2] [ref=e49]
        - paragraph [ref=e50]: This course is a complete guide to create a framework project- Beginner Level...
      - generic [ref=e51]:
        - img "instructor" [ref=e52]
        - text: Shaik Jr
      - generic [ref=e53]:
        - img "clock" [ref=e54]
        - generic [ref=e55]: "Start:"
        - text: Wed Jun 03 2026
      - generic [ref=e56]:
        - img "clock" [ref=e57]
        - generic [ref=e58]: "Finish:"
        - text: Mon Aug 03 2026
      - generic [ref=e59]:
        - text: "Price:"
        - generic [ref=e60]: ₹15000
      - button [ref=e61] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e62]
    - generic [ref=e66]:
      - generic [ref=e67]:
        - heading "Playwright with TypeScript" [level=2] [ref=e68]
        - paragraph [ref=e69]: Playwright with TypeScript...
      - generic [ref=e70]:
        - img "instructor" [ref=e71]
        - text: Shaik Jr
      - generic [ref=e72]:
        - img "clock" [ref=e73]
        - generic [ref=e74]: "Start:"
        - text: Mon Sep 21 2026
      - generic [ref=e75]:
        - img "clock" [ref=e76]
        - generic [ref=e77]: "Finish:"
        - text: Wed Oct 21 2026
      - generic [ref=e78]:
        - text: "Price:"
        - generic [ref=e79]: ₹1500
      - button [ref=e80] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e81]
    - generic [ref=e85]:
      - generic [ref=e86]:
        - heading "Check" [level=2] [ref=e87]
        - paragraph [ref=e88]: Checking for automation...
      - generic [ref=e89]:
        - img "instructor" [ref=e90]
        - text: CCCC
      - generic [ref=e91]:
        - img "clock" [ref=e92]
        - generic [ref=e93]: "Start:"
        - text: Tue Sep 22 2026
      - generic [ref=e94]:
        - img "clock" [ref=e95]
        - generic [ref=e96]: "Finish:"
        - text: Thu Oct 22 2026
      - generic [ref=e97]:
        - text: "Price:"
        - generic [ref=e98]: ₹1500
      - button [ref=e99] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e100]
    - generic [ref=e104]:
      - generic [ref=e105]:
        - heading "Java Course(OOPS)" [level=2] [ref=e106]
        - paragraph [ref=e107]: Best Java course...
      - generic [ref=e108]:
        - img "instructor" [ref=e109]
        - text: Narendra MODI
      - generic [ref=e110]:
        - img "clock" [ref=e111]
        - generic [ref=e112]: "Start:"
        - text: Wed Sep 23 2026
      - generic [ref=e113]:
        - img "clock" [ref=e114]
        - generic [ref=e115]: "Finish:"
        - text: Fri Oct 23 2026
      - generic [ref=e116]:
        - text: "Price:"
        - generic [ref=e117]: ₹15000
      - button [ref=e118] [cursor=pointer]:
        - text: Add to Cart
        - img "right arrow" [ref=e119]
  - generic [ref=e121]:
    - generic [ref=e122]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e123]
      - heading "©2023 All rights reserved" [level=2] [ref=e124]
    - generic [ref=e125] [cursor=pointer]:
      - link [ref=e126]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e130]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e133]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e136]:
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
  10 |     async getText(selector)
  11 |     {
> 12 |         return await selector.textContent()
     |                               ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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