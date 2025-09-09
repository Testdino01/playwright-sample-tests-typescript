import type { Page } from '@playwright/test';

class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}

export default BasePage;