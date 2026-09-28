import {expect} from  '@playwright/test'
import{test} from "../../fixture/fixture.js"
//import { LoginPage } from '../../pages/LoginPage.js';
//import { DashboardPage } from '../../pages/DashboardPage.js';
import user from '../../testdata/user.json'


test.describe("Login Test",{tags:['smoke','login']},()=>{

test('login to application', async({ page,loginpage,dashboardpage })=>
{
    await page.goto('/login')
    // we need to create object of loginpage. In LoginPage.js as we have passed page in constructor as a argument so while creating object we need to pass page
    //const loginPage = new LoginPage(page)//In order to call we need create object later move this file for abstraction
   // console.log('Test Data Used In this Test ${user.username and ${user.password}');
    
    //Call method we have created and we use await boz async method
    await loginpage.loginToApplication(user.username,user.password)

    //const dashboardPage = new DashboardPage(page)
    await dashboardpage.clickOnMenuIcon()
    await dashboardpage.clickOnSignOutButton()
    expect(page.url()).not.toContain('/login');

}
)
})