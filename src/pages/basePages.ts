import { Page } from "@playwright/test";
import { NavigationBar } from "../elements/navigationBar";

export class BasePage{
    protected url!:string
    protected locator: string

    public navigationBar:NavigationBar

    constructor(protected page:Page){
        this.navigationBar = new NavigationBar(page)
    }

    public async viewPage(){
        return  await this.page.goto(this.url)
    }

    public async getBanner(locator:string)
    {
        return await this.page.$(locator)
    }

    public async closePage(){
        return await this.page.close();
    }

    public async getPageTitle()
    {
        return this.page.title();
    }
}
// import { Page } from "@playwright/test";

// export abstract class BasePage {
//   protected page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   public async verifyElementVisible(
//     selector: string,
//     errorMessage: string
//   ): Promise<void> {
//     const elementVisible = await this.page.isVisible(selector);
//     if (!elementVisible) {
//       throw new Error(errorMessage);
//     }
//   }
// }
