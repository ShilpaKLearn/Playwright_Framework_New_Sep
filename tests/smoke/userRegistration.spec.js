
import { expect } from "@playwright/test";
import { test } from "../../fixture/fixture.js";
import userDetails  from "../../testdata/registrationdetails.json"


test.describe('User Registration',{tags:['smoke','registration']},()=>{

test('registration',async({page,registrationpage})=>{

    await page.goto('/signup')
    await registrationpage.userRegistration(userDetails.name,userDetails.email,userDetails.password) 
    await registrationpage.interestField(userDetails.interest)
    await registrationpage.genderField(userDetails.gender)
    await registrationpage.stateField(userDetails.state)
    await registrationpage.hobbiesField(userDetails.hobbies)
    await registrationpage.signUp()
    expect(await registrationpage.getSuccessMessage()).toContain("Signup successfully, Please login!")
})



})