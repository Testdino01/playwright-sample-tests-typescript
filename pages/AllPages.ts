import { expect, type Page } from '@playwright/test';
import LoginPage from "./LoginPage.js";
import InventoryPage from "./InventoryPage.js";
import SignupPage from "./SignupPage.js";
import HomePage from "./HomePage.js";
import AllProductsPage from "./AllProductsPage.js";
import ProductDetailsPage from "./ProductDetailsPage.js";
import CartPage from "./CartPage.js";
import CheckoutPage from "./CheckoutPage.js";
import OrderPage from "./OrderPage.js";
import UserPage from "./UserPage.js";
import OrderDetailsPage from "./OrderDetailsPage.js";
import ContactUsPage from "./ContactUsPage.js";

class AllPages {
    page: Page;
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    signupPage: SignupPage;
    homePage: HomePage;
    allProductsPage: AllProductsPage;
    productDetailsPage: ProductDetailsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    orderPage: OrderPage;
    userPage: UserPage;
    orderDetailsPage: OrderDetailsPage;
    contactUsPage: ContactUsPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
        this.signupPage = new SignupPage(page);
        this.homePage = new HomePage(page);
        this.allProductsPage = new AllProductsPage(page);
        this.productDetailsPage = new ProductDetailsPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.orderPage = new OrderPage(page);
        this.userPage = new UserPage(page);
        this.orderDetailsPage = new OrderDetailsPage(page);
        this.contactUsPage = new ContactUsPage(page);
    }
}

export default AllPages;