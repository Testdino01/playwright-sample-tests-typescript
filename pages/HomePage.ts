import BasePage from './BasePage.js';
import { expect } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';

type NavbarLocators = {
    homeNav: string;
    aboutUsNav: string;
    contactUsNav: string;
    allProductsNav: string;
    showNowButton: string;
    ProductImage: string;
    addToCartButton: string;
    AddCartNotification: string;
    priceRangeSlider2: string;
    priceRangeSlider1: string;
    filterButton: string;
    aboutUsTitle: string;
};

class HomePage extends BasePage {
    locators: { navbar: NavbarLocators };
    page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.locators = {
            navbar: {
                homeNav: `//li[text()="Home"]`,
                aboutUsNav: `//li[text()="About Us"]`,
                contactUsNav: `//li[text()="Contact Us"]`,
                allProductsNav: `//li[text()="All Products"]`,
                showNowButton: `//a[@href="/products"]/button[text()="Shop Now"]`,
                ProductImage: `img[src="/products/Speaker.png"][alt="JBL Charge 4 Bluetooth Speaker"]`,
                addToCartButton: `[data-testid="add-to-cart-button"]`,
                AddCartNotification: `div[role="status"][aria-live="polite"]:has-text("Added to the cart")`,
                priceRangeSlider2: `[data-testid="all-products-price-range-input-1"]`,
                priceRangeSlider1: `[data-testid="all-products-price-range-input-0"]`,
                filterButton: `[data-testid="all-products-filter-toggle"]`,
                aboutUsTitle: `[data-testid="about-us-title"]`,
            }
        };
    }

    async clickOnFilterButton(): Promise<void> {
        await this.page.locator(this.locators.navbar.filterButton).click();
    }

    async adjustPriceRangeSlider(minPrice: string, maxPrice: string): Promise<void> {
        await this.page.locator(this.locators.navbar.priceRangeSlider1).fill(minPrice);
        await this.page.locator(this.locators.navbar.priceRangeSlider2).fill(maxPrice);
    }

    async clickOnShopNowButton(): Promise<void> {
        await this.page.locator(this.locators.navbar.showNowButton).click();
    }

    getProductImage(): Locator {
        return this.page.locator(this.locators.navbar.ProductImage);
    }

    async clickProductImage(): Promise<void> {
        await this.getProductImage().click();
    }

    getAddToCartButton(): Locator {
        return this.page.locator(this.locators.navbar.addToCartButton);
    }

    async clickAddToCartButton(): Promise<void> {
        await this.getAddToCartButton().click();
    }

    getAddCartNotification(): Locator {
        return this.page.locator(this.locators.navbar.AddCartNotification);
    }

    async validateAddCartNotification(): Promise<void> {
        await expect(this.getAddCartNotification()).toBeVisible();
    }

    getHomeNav(): Locator {
        return this.page.locator(this.locators.navbar.homeNav).first();
    }

    getAboutUsNav(): Locator {
        return this.page.locator(this.locators.navbar.aboutUsNav).first();
    }

    getContactUsNav(): Locator {
        return this.page.locator(this.locators.navbar.contactUsNav).first();
    }

    getAllProductsNav(): Locator {
        return this.page.locator(this.locators.navbar.allProductsNav).first();
    }

    async clickAllProductsNav(): Promise<void> {
        await this.getAllProductsNav().click();
    }

    getShowNowButton(): Locator {
        return this.page.locator(this.locators.navbar.showNowButton);
    }

    async clickOnContactUsLink(): Promise<void> {
        await this.getContactUsNav().click();
    }

    async clickBackToHomeButton(): Promise<void> {
        await this.getHomeNav().click();
    }

    async assertHomePage(): Promise<void> {
        await expect(this.page.locator(this.locators.navbar.homeNav)).toBeVisible({ timeout: 10000 });
    }

    async clickAboutUsNav(): Promise<void> {
        await this.getAboutUsNav().click();
    }

    async assertAboutUsTitle(): Promise<void> {
        await expect(this.page.locator(this.locators.navbar.aboutUsTitle)).toBeVisible({ timeout: 10000 });
    }
}

export default HomePage;