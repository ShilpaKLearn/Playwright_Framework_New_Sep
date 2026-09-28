import {test,expect} from  '@playwright/test'
import { LoginPage } from '../../pages/LoginPage.js';


import multiuser from '../../testdata/allUsers.json'

test.describe("Data Driven Test for login scenario",{tags:['data driven','login']},()=>{

//for of Loop for Array
for(const user of multiuser)
{
    test(`login to application ${user.id}`, async({ page })=>
    {
    await page.goto('/login')
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication(user.username,user.password)
    expect(await loginPage.getErrorMessage()).toBe(user.message)

}
)
}
})
