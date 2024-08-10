import { Page } from '@playwright/test';
import { Locators } from '../const/common';

export class NavigationBar {
    constructor(protected readonly page: Page) {}

    public async goToSalePage()
    {
        await this.page.click(Locators.Sales);
    }
    
    public async searchProduct(query: string)
    {
        const searchInput = this.page.locator(Locators.searchField);
        await searchInput.fill(query);
        await searchInput.press('Enter');
    };
}