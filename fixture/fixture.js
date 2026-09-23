import{test as base, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { DashboardPage } from "../pages/DashboardPage.js";


export const test = base.extend({

    loginpage:async({page},use)=>
     {

        console.log("Inside login fixture");
        const loginpage = new LoginPage(page)
        await use(loginpage)

     },

     dashboardpage:async({page},use)=>
     {
        
        console.log("Dashboard fixture");
        const dashboardpage = new DashboardPage(page)
        await use(dashboardpage)

     }
});

export {expect} from '@playwright/test'
