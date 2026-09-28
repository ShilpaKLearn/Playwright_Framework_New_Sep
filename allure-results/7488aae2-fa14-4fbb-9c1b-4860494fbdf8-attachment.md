# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\different_user_login.spec.js >> Data Driven Test for login scenario >> login to application 3
- Location: tests\smoke\different_user_login.spec.js:10:9

# Error details

```
ReferenceError: selector is not defined
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