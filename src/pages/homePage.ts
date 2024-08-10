import { Page } from '@playwright/test';
import { BasePage } from './basePages';
import { NavigationBar } from '../elements/navigationBar';
import { URLS } from '../const/common';


export class HomePage extends BasePage {
    constructor(page: Page) {
    super(page);
    this.navigationBar = new NavigationBar(page);
    this.url = URLS.BASE_URL;
    this.locator = '//div[@class="top_new"]//img[@class="logo_sila"]';
  }

  public async navigateTo()
  {
    await this.page.goto(this.url);
  }

  async verifyMainBanner()
  {
    await this.getBanner(this.locator);
  }
}