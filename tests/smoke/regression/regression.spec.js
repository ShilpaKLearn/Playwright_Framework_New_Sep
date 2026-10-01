import {test,expect} from "@playwright/test"

test("New test from PW",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const pageTitle = await page.title()
    await expect(page).toHaveTitle(/Automation/)
    console.log("Done");
    
})
test("New test added from git",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await expect(page).toHaveTitle(/Automation/)
    console.log("Done");
    
})
