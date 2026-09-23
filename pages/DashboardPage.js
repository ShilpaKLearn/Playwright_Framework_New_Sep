import { BasePage } from "./BasePage.js";
export class DashboardPage extends BasePage {
    constructor(page) { 
        super(page)
        this.page = page;
        this.menuIcon = page.getByAltText("menu"); // Note: Corrected getAltText to getByAltText
       this.signOutButton = page.getByText("Sign out", { exact: true });
      //  this.signOutButton = page.getByRole('button', { name: 'Sign out' })
    }

    async clickOnMenuIcon() {
        await this.click(this.menuIcon)
        //await this.menuIcon.click();
    }

    async clickOnSignOutButton() {

        await this.click(this.signOutButton)
        // FIXED: Changed from this.clickOnSignOutButton.click() to this.signOutButton.click()
       // await this.signOutButton.click(); 
    }
}
