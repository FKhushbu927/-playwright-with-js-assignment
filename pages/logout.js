exports.LogoutPage = class LogoutPage{
    constructor(page) {
         this.page = page;
         //click on menu bar
         this.menuButton = page.getByRole('button', { name: 'Open Menu' });

        // click on logout
         this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');

        // Swag Labs logo is visible or not
          this.homePageText = page.getByText('Swag Labs');
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }

    async verifyLoggedOut() {
        await this.homePageText.waitFor();
        return await this.homePageText.isVisible();
    }
}