export enum URLS {
  BASE_URL = "https://sila.by",
  ACTIONS = `${BASE_URL}/skidki`,
  }

export enum Locators {
  Cookies = '.cookies_save',
  Footer = '.footer_div',
  Sales = '//a[@href="https://sila.by/skidki"]',
  searchField = '//div[@class="top_new"]//input[@class="ui-autocomplete-input"]',
  emptyProductSearch = '.not_find',
  loginButton = '//div[@class="top_new"]//a[@href="https://bonus.sila.by"]',
  loginBanner = '//img[@title="торговая сеть ЭЛЕКТРОСИЛА"]'
}

export enum Title {
  searchPageTitle = '«ЭЛЕКТРОСИЛА» - Результаты поиска по запросу: «Телевизор»',
}

export enum SearchParameters {
  TV = 'Телевизор',
  emptySearch = 'supercosmicstation228350'
}

export const enum Pages {
  homePage
}
