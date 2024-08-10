import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import {Locators, Pages, SearchParameters, Title, URLS } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";

test.describe("SilaBy - HomePage", () => {
  let homePage: HomePage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    homePage = PageFactory.getPage(page, Pages.homePage) as HomePage;

    await homePage.viewPage();
    await page.click(Locators.Cookies);
  });

  test.afterAll(async () => {
    await homePage.closePage();
  });

  test("На главной странице есть главный баннер", async () => {
    await homePage.verifyMainBanner();
  });

  test("Футер виден на главной странице", async () => {
    const footerVisible = await page.isVisible(Locators.Footer);
    expect(footerVisible).toBe(true);
  });

  test('Проверка правильно открытого адресса ссылки раздела "Акции"', async () => {
    await homePage.navigationBar.goToSalePage();
    await expect(page).toHaveURL(URLS.ACTIONS);
  });

  test('Произвести поиск по "Телевизор" и проверить правильная ли страница открыта', async () => {
    await homePage.navigationBar.searchProduct(SearchParameters.TV);
    await expect(page).toHaveTitle(Title.searchPageTitle);
  });

  test("Проверка поиска без результатов", async () => {
    await homePage.navigationBar.searchProduct(SearchParameters.emptySearch);
    const emptySearch = page.locator(Locators.emptyProductSearch);
    expect(emptySearch).toBeTruthy();
  });

  test("Проверка перехода на страницу логина и наличия там главного баннера", async () => {
    await page.click(Locators.loginButton);
    // нет проверки открытия страницы, потому что линка динамическая
    const bannerIsVisible = page.locator(Locators.loginBanner);
    expect(bannerIsVisible).toBeTruthy();
  });
});
