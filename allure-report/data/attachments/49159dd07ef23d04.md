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
  - waiting for getByRole('button', { name: 'Sign Up' })
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
    51 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting 500ms
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - navigation [ref=f6e4]:
    - generic [ref=f6e5]:
      - generic [ref=f6e6] [cursor=pointer]:
        - img "logo" [ref=f6e7]
        - heading "Learn Automation Courses" [level=1] [ref=f6e8]
      - generic [ref=f6e9]:
        - img "menu" [ref=f6e10] [cursor=pointer]
        - generic [ref=f6e11]:
          - generic [ref=f6e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f6e13] [cursor=pointer]
          - generic [ref=f6e14]:
            - link "Home" [ref=f6e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f6e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=f6e19] [cursor=pointer]
  - generic [ref=f6e21]:
    - generic [ref=f6e24]:
      - heading "Sign Up" [level=2] [ref=f6e25]
      - textbox "Name" [ref=f6e26]: Rohith Sharma
      - textbox "Email" [ref=f6e27]: rohith.s@gmail.com
      - textbox "Password must be atleast 6 characters" [active] [ref=f6e28]:
        - /placeholder: Password
        - text: TestPass@123$
      - heading "Interests" [level=4] [ref=f6e29]
      - generic [ref=f6e30]:
        - generic [ref=f6e31]:
          - checkbox "PW-chromium-1790201095804" [ref=f6e33]
          - generic [ref=f6e34]: PW-chromium-1790201095804
        - generic [ref=f6e35]:
          - checkbox "PW-chromium-1790201108690" [ref=f6e37]
          - generic [ref=f6e38]: PW-chromium-1790201108690
        - generic [ref=f6e39]:
          - checkbox "PW-firefox-1790201145316" [ref=f6e41]
          - generic [ref=f6e42]: PW-firefox-1790201145316
        - generic [ref=f6e43]:
          - checkbox "ws" [ref=f6e45]
          - generic [ref=f6e46]: ws
        - generic [ref=f6e47]:
          - checkbox "ew" [ref=f6e49]
          - generic [ref=f6e50]: ew
        - generic [ref=f6e51]:
          - checkbox "PW-chromium-1790279358322" [ref=f6e53]
          - generic [ref=f6e54]: PW-chromium-1790279358322
        - generic [ref=f6e55]:
          - checkbox "PW-chromium-1790279369244" [ref=f6e57]
          - generic [ref=f6e58]: PW-chromium-1790279369244
        - generic [ref=f6e59]:
          - checkbox "PW-firefox-1790279406935" [ref=f6e61]
          - generic [ref=f6e62]: PW-firefox-1790279406935
        - generic [ref=f6e63]:
          - checkbox "PW-chromium-1790279412895" [ref=f6e65]
          - generic [ref=f6e66]: PW-chromium-1790279412895
        - generic [ref=f6e67]:
          - checkbox "PW-chromium-1790279432282" [ref=f6e69]
          - generic [ref=f6e70]: PW-chromium-1790279432282
        - generic [ref=f6e71]:
          - checkbox "PW-firefox-1790279438665" [ref=f6e73]
          - generic [ref=f6e74]: PW-firefox-1790279438665
        - generic [ref=f6e75]:
          - checkbox "PW-firefox-1790279450185" [ref=f6e77]
          - generic [ref=f6e78]: PW-firefox-1790279450185
        - generic [ref=f6e79]:
          - checkbox "PW-webkit-1790279453444" [ref=f6e81]
          - generic [ref=f6e82]: PW-webkit-1790279453444
        - generic [ref=f6e83]:
          - checkbox "PW-webkit-1790279463002" [ref=f6e85]
          - generic [ref=f6e86]: PW-webkit-1790279463002
        - generic [ref=f6e87]:
          - checkbox "PW-webkit-1790279466365" [ref=f6e89]
          - generic [ref=f6e90]: PW-webkit-1790279466365
        - generic [ref=f6e91]:
          - checkbox "PW-webkit-1790279476660" [ref=f6e93]
          - generic [ref=f6e94]: PW-webkit-1790279476660
        - generic [ref=f6e95]:
          - checkbox "PW-chromium-1790281986773" [ref=f6e97]
          - generic [ref=f6e98]: PW-chromium-1790281986773
        - generic [ref=f6e99]:
          - checkbox "PW-chromium-1790281996132" [ref=f6e101]
          - generic [ref=f6e102]: PW-chromium-1790281996132
        - generic [ref=f6e103]:
          - checkbox "PW-chromium-1790282549803" [ref=f6e105]
          - generic [ref=f6e106]: PW-chromium-1790282549803
        - generic [ref=f6e107]:
          - checkbox "PW-chromium-1790282561393" [ref=f6e109]
          - generic [ref=f6e110]: PW-chromium-1790282561393
      - heading "Gender" [level=4] [ref=f6e111]
      - generic [ref=f6e112]:
        - generic [ref=f6e113]:
          - radio [checked] [ref=f6e114]
          - generic [ref=f6e115]: Male
        - generic [ref=f6e116]:
          - radio [ref=f6e117]
          - generic [ref=f6e118]: Female
      - generic [ref=f6e119]:
        - heading "State:" [level=4] [ref=f6e120]
        - combobox [ref=f6e121]:
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
      - generic [ref=f6e122]:
        - heading "Hobbies:" [level=4] [ref=f6e123]
        - listbox [ref=f6e124]:
          - option "Playing" [ref=f6e125]
          - option "Reading" [ref=f6e126]
          - option "Swimming" [ref=f6e127]
          - option "Singing" [ref=f6e128]
          - option "Dancing" [ref=f6e129]
      - button "Sign up" [disabled] [ref=f6e130]
      - link "Already a user? Login" [ref=f6e131] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f6e133]
  - generic [ref=f6e135]:
    - generic [ref=f6e136]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f6e137]
      - heading "©2023 All rights reserved" [level=2] [ref=f6e138]
    - generic [ref=f6e139] [cursor=pointer]:
      - link [ref=f6e140]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f6e144]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f6e147]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f6e150]:
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