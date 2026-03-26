class SauceDemoPage {

    constructor(page) {
        this.page = page;
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.errorMessage = this.page.locator('[data-test="error"]');
        this.inventoryContainer = this.page.locator('.inventory_container');
        this.menuButton = this.page.locator('#react-burger-menu-btn');
        this.logoutLink = this.page.locator('#logout_sidebar_link');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}

module.exports = { SauceDemoPage };