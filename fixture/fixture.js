import{test as base, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { RegistrationPage } from "../pages/RegistrationPage.js"


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

     },
     registrationpage:async({page},use)=>
     {
        
        console.log("Registration fixture");
        const registrationpage = new RegistrationPage(page)
        await use(registrationpage)

     },
      randomEmail: async ({}, use) => {
         const uniqueEmail = `Rohit_${Date.now()}@test.com`;
         await use(uniqueEmail);
    
  },
     
});

export {expect} from '@playwright/test'
