# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
Test timeout of 65000ms exceeded.
```

```
Error: locator.click: Test timeout of 65000ms exceeded.
Call log:
  - waiting for getByLabel('ws', { exact: true })
  - operation was aborted: Test timeout of 65000ms exceeded.

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
  - generic [ref=e21]:
    - generic [ref=e24]:
      - heading "Sign Up" [level=2] [ref=e25]
      - textbox "Name" [ref=e26]: Rohith Sharma
      - textbox "Email" [ref=e27]: sharma.r@gmail.com
      - textbox "Password must be atleast 6 characters" [active] [ref=e28]:
        - /placeholder: Password
        - text: TestPass@123$
      - heading "Interests" [level=4] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - checkbox "Selenium" [ref=e33]
          - generic [ref=e34]: Selenium
        - generic [ref=e35]:
          - checkbox "Playwright" [ref=e37]
          - generic [ref=e38]: Playwright
        - generic [ref=e39]:
          - checkbox "JAVA" [ref=e41]
          - generic [ref=e42]: JAVA
        - generic [ref=e43]:
          - checkbox "RAG" [ref=e45]
          - generic [ref=e46]: RAG
        - generic [ref=e47]:
          - checkbox "AWS" [ref=e49]
          - generic [ref=e50]: AWS
      - heading "Gender" [level=4] [ref=e51]
      - generic [ref=e52]:
        - generic [ref=e53]:
          - radio [checked] [ref=e54]
          - generic [ref=e55]: Male
        - generic [ref=e56]:
          - radio [ref=e57]
          - generic [ref=e58]: Female
      - generic [ref=e59]:
        - heading "State:" [level=4] [ref=e60]
        - combobox [ref=e61]:
          - option "Andhra Pradesh"
          - option "Arunachal Pradesh"
          - option "Assam"
          - option "Bihar"
          - option "Chhattisgarh"
          - option "Goa"
          - option "Gujarat"
          - option "Haryana"
          - option "Himachal Pradesh"
          - option "Jammu and Kashmir"
          - option "Jharkhand"
          - option "Karnataka"
          - option "Kerala"
          - option "Madhya Pradesh"
          - option "Maharashtra"
          - option "Manipur"
          - option "Meghalaya"
          - option "Mizoram"
          - option "Nagaland"
          - option "Odisha"
          - option "Punjab"
          - option "Rajasthan"
          - option "Sikkim"
          - option "Tamil Nadu"
          - option "Telangana"
          - option "Tripura"
          - option "Uttarakhand"
          - option "Uttar Pradesh"
          - option "West Bengal"
          - option "Andaman and Nicobar Islands"
          - option "Chandigarh"
          - option "Dadra and Nagar Haveli"
          - option "Daman and Diu"
          - option "Delhi"
          - option "Lakshadweep"
          - option "Puducherry"
      - generic [ref=e62]:
        - heading "Hobbies:" [level=4] [ref=e63]
        - listbox [ref=e64]:
          - option "Playing" [ref=e65]
          - option "Reading" [ref=e66]
          - option "Swimming" [ref=e67]
          - option "Singing" [ref=e68]
          - option "Dancing" [ref=e69]
      - button "Sign up" [disabled] [ref=e70]
      - link "Already a user? Login" [ref=e71] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=e73]
  - generic [ref=e75]:
    - generic [ref=e76]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e77]
      - heading "©2023 All rights reserved" [level=2] [ref=e78]
    - generic [ref=e79] [cursor=pointer]:
      - link [ref=e80]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e84]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e87]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e90]:
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