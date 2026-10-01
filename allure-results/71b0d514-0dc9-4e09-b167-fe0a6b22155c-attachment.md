# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\regression\regression.spec.js >> New test from PW
- Location: tests\smoke\regression\regression.spec.js:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Register/
Received string:  "Learn Automation Courses"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "Learn Automation Courses"

```

```yaml
- navigation:
  - img "logo"
  - heading "Learn Automation Courses" [level=1]
  - img "menu"
  - text: Learn Automation Courses
  - img "delete"
  - link "Home":
    - /url: /
  - link "Practise":
    - /url: /practise
- img "Login"
- heading "Sign In" [level=2]
- textbox "Enter Email"
- textbox "Enter Password"
- button "Sign in"
- link "New user? Signup":
  - /url: /signup
- heading "Connect with us" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
- link:
  - /url: https://learn-automation/reddit
  - img
- heading "Learn Automation By Mukesh Otwani" [level=3]
- heading "©2023 All rights reserved" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test("New test from PW",async({page})=>
  4  | {
  5  |     await page.goto("https://freelance-learn-automation.vercel.app/login")
> 6  |     await expect(page).toHaveTitle(/Register/)
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  7  |     console.log("Done");
  8  |     
  9  | })
  10 | test("New test added from git",async({page})=>
  11 | {
  12 |     await page.goto("https://freelance-learn-automation.vercel.app/login")
  13 |     await expect(page).toHaveTitle(/Register/)
  14 |     console.log("Done");
  15 |     
  16 | })
  17 | 
```