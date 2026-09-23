import {test,expect} from "@playwright/test"

test("Git file testing",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await expect(page).toHaveTitle(/Register/)
    console.log("Done");
    
})