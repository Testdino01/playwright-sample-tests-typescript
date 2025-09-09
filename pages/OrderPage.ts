import BasePage from './BasePage.js';
import { expect, type Page } from '@playwright/test';

type Locators = {
    myOrdersTab: string;
    myOrdersTitle: string;
    viewDetailsButton: string;
    orderDetailsTitle: string;
    orderItemName: string;
    orderItemQuantity: string;
    orderTotalValue: string;
    orderStatusDisplay: string;
    cancelOrderButton: string;
    confirmCancellationButton: string;
    toasterMessage: string;
    paginationButton: string;
    productNameInOrderList: string;
    priceAndQuantityInOrderList: string;
    orderStatusInList: string;
    myOrdersCount: string;
};

class OrderPage extends BasePage {
    locators: Locators = {
        myOrdersTab: "//p[normalize-space()='My Orders']",
        myOrdersTitle: "h2[data-testid='my-orders-title']",
        viewDetailsButton: "(//button[normalize-space()='View'])[1]",
        orderDetailsTitle: "//h1[normalize-space()='Order Details']",
        orderItemName: "p[data-testid='order-item-name']",
        orderItemQuantity: "p:has-text('Qty:')",
        orderTotalValue: "p[data-testid='total-value']",
        orderStatusDisplay: "div[class*='badge']",
        cancelOrderButton: "button:has-text('Cancel')",
        confirmCancellationButton: "//button[normalize-space()='Yes, Cancel Order']",
        toasterMessage: "div[id='_rht_toaster'] > div > div",
        paginationButton: "//button[normalize-space()='{}']",
        productNameInOrderList: "h3[normalize-space()='{}']",
        priceAndQuantityInOrderList: "div[normalize-space()='{}']",
        orderStatusInList: "div[normalize-space()='{}']",
        myOrdersCount: "span[data-testid='my-orders-count']",
    };

    constructor(page: Page) {
        super(page);
    }

    async clickOnMyOrdersTab(): Promise<void> {
        await this.page.locator(this.locators.myOrdersTab).click({ force: true });
    }

    async verifyMyOrdersTitle(): Promise<void> {
        await expect(this.page.locator(this.locators.myOrdersTitle)).toBeVisible();
    }

    async clickViewDetailsButton(orderIndex: number = 1): Promise<void> {
        await this.page.locator(`(//button[normalize-space()='View'])[${orderIndex}]`).click();
    }

    async verifyOrderDetailsTitle(): Promise<void> {
        await expect(this.page.locator(this.locators.orderDetailsTitle)).toBeVisible();
    }

    async verifyOrderSummary(productName: string, quantity: string | number, amount: string, status: string): Promise<void> {
        await expect(this.page.locator(this.locators.orderItemName)).toHaveText(productName);
        await expect(this.page.locator(this.locators.orderItemQuantity)).toContainText(`Qty: ${quantity}`);
        await expect(this.page.locator(this.locators.orderTotalValue)).toContainText(amount);
        await expect(this.page.locator(this.locators.orderStatusDisplay)).toHaveText(status);
    }

    async clickCancelOrderButton(buttonIndex: number = 2): Promise<void> {
        await this.page.locator(`(//button[normalize-space()='Cancel'])[${buttonIndex}]`).click({ force: true });
    }

    async confirmCancellation(): Promise<void> {
        await this.page.locator(this.locators.confirmCancellationButton).click({ force: true });
    }

    async verifyCancellationConfirmationMessage(): Promise<void> {
        await expect(this.page.locator(this.locators.toasterMessage)).toBeVisible();
        await expect(this.page.locator(this.locators.toasterMessage)).toContainText('canceled successfully');
    }

    async verifyOrderStatusIsCanceled(productName: string): Promise<void> {
        await expect(
            this.page.locator(`//h3[normalize-space()='${productName}']`).locator('xpath=./ancestor::div[contains(@class, "card")]//div[contains(@class, "badge")]')
        ).toHaveText('Canceled');
    }

    async clickOnPaginationButton(pageNumber: string | number): Promise<void> {
        await this.page.locator(this.locators.paginationButton.replace('{}', String(pageNumber))).click({ force: true });
    }

    async verifyProductInOrderList(productName: string): Promise<void> {
        await expect(this.page.locator(this.locators.productNameInOrderList.replace('{}', productName))).toBeVisible();
    }

    async verifyPriceAndQuantityInOrderList(priceAndQuantity: string): Promise<void> {
        await expect(this.page.locator(this.locators.priceAndQuantityInOrderList.replace('{}', priceAndQuantity))).toBeVisible();
    }

    async verifyOrderStatusInList(status: string, productName: string): Promise<void> {
        await expect(
            this.page.locator(`//h3[normalize-space()='${productName}']`).locator('xpath=./ancestor::div[contains(@class, "card")]//div[contains(@class, "badge")]')
        ).toHaveText(status);
    }

    async verifyMyOrdersCount(): Promise<void> {
        await expect(this.page.locator(this.locators.myOrdersCount)).toBeVisible();
    }
}

export default OrderPage;