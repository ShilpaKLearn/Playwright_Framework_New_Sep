# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
ReferenceError: registrationpage is not defined
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
      - textbox "Name" [ref=e26]
      - textbox "Email" [ref=e27]
      - textbox "Password must be atleast 6 characters" [ref=e28]:
        - /placeholder: Password
      - heading "Interests" [level=4] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - checkbox "JAVA" [ref=e33]
          - generic [ref=e34]: JAVA
        - generic [ref=e35]:
          - checkbox "Selenium" [ref=e37]
          - generic [ref=e38]: Selenium
        - generic [ref=e39]:
          - checkbox "rag_chint" [ref=e41]
          - generic [ref=e42]: rag_chint
        - generic [ref=e43]:
          - checkbox "PW-chromium-1790201095804" [ref=e45]
          - generic [ref=e46]: PW-chromium-1790201095804
        - generic [ref=e47]:
          - checkbox "PW-chromium-1790201108690" [ref=e49]
          - generic [ref=e50]: PW-chromium-1790201108690
        - generic [ref=e51]:
          - checkbox "PW-firefox-1790201126434" [ref=e53]
          - generic [ref=e54]: PW-firefox-1790201126434
        - generic [ref=e55]:
          - checkbox "PW-firefox-1790201145316" [ref=e57]
          - generic [ref=e58]: PW-firefox-1790201145316
        - generic [ref=e59]:
          - checkbox "PW-webkit-1790201148525" [ref=e61]
          - generic [ref=e62]: PW-webkit-1790201148525
        - generic [ref=e63]:
          - checkbox "PW-webkit-1790201188991" [ref=e65]
          - generic [ref=e66]: PW-webkit-1790201188991
        - generic [ref=e67]:
          - checkbox "PW-chromium-1790201645334" [ref=e69]
          - generic [ref=e70]: PW-chromium-1790201645334
        - generic [ref=e71]:
          - checkbox "PW-chromium-1790201660217" [ref=e73]
          - generic [ref=e74]: PW-chromium-1790201660217
        - generic [ref=e75]:
          - checkbox "PW-firefox-1790201682006" [ref=e77]
          - generic [ref=e78]: PW-firefox-1790201682006
        - generic [ref=e79]:
          - checkbox "PW-firefox-1790201703845" [ref=e81]
          - generic [ref=e82]: PW-firefox-1790201703845
        - generic [ref=e83]:
          - checkbox "PW-webkit-1790201721698" [ref=e85]
          - generic [ref=e86]: PW-webkit-1790201721698
        - generic [ref=e87]:
          - checkbox "PW-webkit-1790201742824" [ref=e89]
          - generic [ref=e90]: PW-webkit-1790201742824
        - generic [ref=e91]:
          - checkbox "java" [ref=e93]
          - generic [ref=e94]: java
        - generic [ref=e95]:
          - checkbox "ravee" [ref=e97]
          - generic [ref=e98]: ravee
        - generic [ref=e99]:
          - checkbox "ws" [ref=e101]
          - generic [ref=e102]: ws
        - generic [ref=e103]:
          - checkbox "ew" [ref=e105]
          - generic [ref=e106]: ew
        - generic [ref=e107]:
          - checkbox "sdfsd" [ref=e109]
          - generic [ref=e110]: sdfsd
      - heading "Gender" [level=4] [ref=e111]
      - generic [ref=e112]:
        - generic [ref=e113]:
          - radio [checked] [ref=e114]
          - generic [ref=e115]: Male
        - generic [ref=e116]:
          - radio [ref=e117]
          - generic [ref=e118]: Female
      - generic [ref=e119]:
        - heading "State:" [level=4] [ref=e120]
        - combobox [ref=e121]:
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
      - generic [ref=e122]:
        - heading "Hobbies:" [level=4] [ref=e123]
        - listbox [ref=e124]:
          - option "Playing" [ref=e125]
          - option "Reading" [ref=e126]
          - option "Swimming" [ref=e127]
          - option "Singing" [ref=e128]
          - option "Dancing" [ref=e129]
      - button "Sign up" [disabled] [ref=e130]
      - link "Already a user? Login" [ref=e131] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=e133]
  - generic [ref=e135]:
    - generic [ref=e136]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e137]
      - heading "©2023 All rights reserved" [level=2] [ref=e138]
    - generic [ref=e139] [cursor=pointer]:
      - link [ref=e140]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e144]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e147]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e150]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | 
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../../fixture/fixture.js";
  4  | import userDetails from "../../testdata/registrationdetails.json";
  5  | 
  6  | 
  7  | test.describe('User Registration',{tags:['smoke','registration']},()=>{
  8  | 
  9  | test('registration',async({page})=>{
  10 | 
  11 |     await page.goto('/signup')
> 12 |     await registrationpage.userRegistration(userDetails.name,userDetails.email,userDetails.password)
     |     ^ ReferenceError: registrationpage is not defined
  13 |     await registrationpage.interestField(userDetails.interest)
  14 |     await registrationpage.genderField(userDetails.gender)
  15 |     await registrationpage.stateField(userDetails.state)
  16 |     await registrationpage.hobbiesField(userDetails.hobbies)
  17 |     await registrationpage.signUp()
  18 |     expect(await registrationpage.getSuccessMessage()).toContain("Signup successfully, Please login!")
  19 | })
  20 | 
  21 | 
  22 | 
  23 | })
```