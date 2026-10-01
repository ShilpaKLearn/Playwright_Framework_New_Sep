# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Sign up' })
    - locator resolved to <button disabled type="submit" class="submit-btn">Sign up</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    12 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - navigation [ref=f4e4]:
    - generic [ref=f4e5]:
      - generic [ref=f4e6] [cursor=pointer]:
        - img "logo" [ref=f4e7]
        - heading "Learn Automation Courses" [level=1] [ref=f4e8]
      - generic [ref=f4e9]:
        - img "menu" [ref=f4e10] [cursor=pointer]
        - generic [ref=f4e11]:
          - generic [ref=f4e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f4e13] [cursor=pointer]
          - generic [ref=f4e14]:
            - link "Home" [ref=f4e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f4e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=f4e19] [cursor=pointer]
  - generic [ref=f4e21]:
    - generic [ref=f4e24]:
      - heading "Sign Up" [level=2] [ref=f4e25]
      - textbox "Name" [ref=f4e26]: Rohith Sharma
      - textbox "Email" [ref=f4e27]: rohith.s@gmail.com
      - textbox "Password must be atleast 6 characters" [active] [ref=f4e28]:
        - /placeholder: Password
        - text: TestPass@123$
      - heading "Interests" [level=4] [ref=f4e29]
      - generic [ref=f4e30]:
        - generic [ref=f4e31]:
          - checkbox "PW-chromium-1790201095804" [ref=f4e33]
          - generic [ref=f4e34]: PW-chromium-1790201095804
        - generic [ref=f4e35]:
          - checkbox "PW-chromium-1790201108690" [ref=f4e37]
          - generic [ref=f4e38]: PW-chromium-1790201108690
        - generic [ref=f4e39]:
          - checkbox "PW-firefox-1790201145316" [ref=f4e41]
          - generic [ref=f4e42]: PW-firefox-1790201145316
        - generic [ref=f4e43]:
          - checkbox "ws" [ref=f4e45]
          - generic [ref=f4e46]: ws
        - generic [ref=f4e47]:
          - checkbox "ew" [ref=f4e49]
          - generic [ref=f4e50]: ew
        - generic [ref=f4e51]:
          - checkbox "PW-chromium-1790279358322" [ref=f4e53]
          - generic [ref=f4e54]: PW-chromium-1790279358322
        - generic [ref=f4e55]:
          - checkbox "PW-chromium-1790279369244" [ref=f4e57]
          - generic [ref=f4e58]: PW-chromium-1790279369244
        - generic [ref=f4e59]:
          - checkbox "PW-firefox-1790279406935" [ref=f4e61]
          - generic [ref=f4e62]: PW-firefox-1790279406935
        - generic [ref=f4e63]:
          - checkbox "PW-chromium-1790279412895" [ref=f4e65]
          - generic [ref=f4e66]: PW-chromium-1790279412895
        - generic [ref=f4e67]:
          - checkbox "PW-chromium-1790279432282" [ref=f4e69]
          - generic [ref=f4e70]: PW-chromium-1790279432282
        - generic [ref=f4e71]:
          - checkbox "PW-firefox-1790279438665" [ref=f4e73]
          - generic [ref=f4e74]: PW-firefox-1790279438665
        - generic [ref=f4e75]:
          - checkbox "PW-firefox-1790279450185" [ref=f4e77]
          - generic [ref=f4e78]: PW-firefox-1790279450185
        - generic [ref=f4e79]:
          - checkbox "PW-webkit-1790279453444" [ref=f4e81]
          - generic [ref=f4e82]: PW-webkit-1790279453444
        - generic [ref=f4e83]:
          - checkbox "PW-webkit-1790279463002" [ref=f4e85]
          - generic [ref=f4e86]: PW-webkit-1790279463002
        - generic [ref=f4e87]:
          - checkbox "PW-webkit-1790279466365" [ref=f4e89]
          - generic [ref=f4e90]: PW-webkit-1790279466365
        - generic [ref=f4e91]:
          - checkbox "PW-webkit-1790279476660" [ref=f4e93]
          - generic [ref=f4e94]: PW-webkit-1790279476660
        - generic [ref=f4e95]:
          - checkbox "PW-chromium-1790281986773" [ref=f4e97]
          - generic [ref=f4e98]: PW-chromium-1790281986773
        - generic [ref=f4e99]:
          - checkbox "PW-chromium-1790281996132" [ref=f4e101]
          - generic [ref=f4e102]: PW-chromium-1790281996132
        - generic [ref=f4e103]:
          - checkbox "PW-chromium-1790282549803" [ref=f4e105]
          - generic [ref=f4e106]: PW-chromium-1790282549803
        - generic [ref=f4e107]:
          - checkbox "PW-chromium-1790282561393" [ref=f4e109]
          - generic [ref=f4e110]: PW-chromium-1790282561393
      - heading "Gender" [level=4] [ref=f4e111]
      - generic [ref=f4e112]:
        - generic [ref=f4e113]:
          - radio [checked] [ref=f4e114]
          - generic [ref=f4e115]: Male
        - generic [ref=f4e116]:
          - radio [ref=f4e117]
          - generic [ref=f4e118]: Female
      - generic [ref=f4e119]:
        - heading "State:" [level=4] [ref=f4e120]
        - combobox [ref=f4e121]:
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
      - generic [ref=f4e122]:
        - heading "Hobbies:" [level=4] [ref=f4e123]
        - listbox [ref=f4e124]:
          - option "Playing" [ref=f4e125]
          - option "Reading" [ref=f4e126]
          - option "Swimming" [ref=f4e127]
          - option "Singing" [ref=f4e128]
          - option "Dancing" [ref=f4e129]
      - button "Sign up" [disabled] [ref=f4e130]
      - link "Already a user? Login" [ref=f4e131] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f4e133]
  - generic [ref=f4e135]:
    - generic [ref=f4e136]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f4e137]
      - heading "©2023 All rights reserved" [level=2] [ref=f4e138]
    - generic [ref=f4e139] [cursor=pointer]:
      - link [ref=f4e140]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f4e144]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f4e147]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f4e150]:
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
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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