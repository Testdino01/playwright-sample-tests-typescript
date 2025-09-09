import BasePage from './BasePage.js';
import { expect, type Page } from '@playwright/test';

class AllProductsPage extends BasePage{

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    locators = {
        allProductsTitle: `//h1[text()="All Products"]`,
        nthProduct: `[href*="/product-detail/product"]`,
        nthProductName: `[href*="/product-detail/product"] h2`,
        nthProductPrice: `[href*="/product-detail/product"] p`,
        nthProductReviewCount: `[href*="/product-detail/product"] h2 + div span.text-sm`,
        nthProductWishlistIcon: '[aria-label="heart"]',
        nthProductWishlistIconCount: '.bg-orange-100'
        
    }

    async assertAllProductsTitle() {
        await expect(this.page.locator(this.locators.allProductsTitle)).toBeVisible();
    }

    getNthProduct(n: number) {
        return this.page.locator(this.locators.nthProduct).nth(n - 1)
    }

    async clickNthProduct(n: number): Promise<void> {
        await this.getNthProduct(n).click();
    }

    getNthProductName(n: number) {
        return this.page.locator(this.locators.nthProductName).nth(n - 1).textContent();
    }

    getNthProductPrice(n:number) {
        return this.page.locator(this.locators.nthProductPrice).nth(n - 1).textContent();
    }

    getNthProductReviewCount(n:number) {
        return this.page.locator(this.locators.nthProductReviewCount).nth(n - 1).textContent();
    }

    getNthProductWishlistIcon(n:number) {
        return this.page.locator(this.locators.nthProductWishlistIcon).nth(n - 1)
    }

    async clickNthProductWishlistIcon(n:number) {
        await this.getNthProduct(n).hover()
        await this.getNthProductWishlistIcon(n).click();
        await expect(this.page.getByText('Added to the wishlist')).toBeVisible();
    }

    getNthProductWishlistIconCount(n:number) {
        return this.page.locator(this.locators.nthProductWishlistIconCount).nth(n - 1);
    }

}

export default AllProductsPage;