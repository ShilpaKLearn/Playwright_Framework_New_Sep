import{test,expect, selectors} from "@playwright/test"


export class BasePage
{
    constructor(page)
    {
        this.page = page;
    }

    async getText(selector)
    {
        return await selector.textContent()
    }
    async type(selector,text )
    {
        await selector.fill(text)
        console.log(`****type performed with value ${text}****`);
        
    }
    async click(selector)
    {
        await selector.click() 
        console.log(`****click performed ****`);
    }
    async navigateToApplication(url)
    {
        await this.page.goto(url)
        console.log(`****navigated to url: ${url}****`);
    }
    async uploadFiles(selector,filepaths)
    {
        await selector.setInputFiles(filepaths)
        console.log(`****files uploaded: ${filepaths}****`);
    }
    

    async handleDropdown(selector, value)
        {
            await selector.selectOption(value);

            console.log(`**** Handle Dropdown with value ${value} ****`);
        }

}