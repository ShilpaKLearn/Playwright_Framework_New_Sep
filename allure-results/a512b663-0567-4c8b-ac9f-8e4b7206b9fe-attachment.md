# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\userRegistration.spec.js >> User Registration >> registration
- Location: tests\smoke\userRegistration.spec.js:9:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
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
    14 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms
    19 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms

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
     |                        ^ Error: locator.click: Target page, context or browser has been closed
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