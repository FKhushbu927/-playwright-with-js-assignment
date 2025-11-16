exports.ProductsPage = class ProductsPage{
     constructor(page) {
        this.page = page;
        // verify adds one product to the cart
        // select secnd product to add to cart
        this.firstAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

        // Cart icon locatorr
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');

        // cart quantity
        this.cartQuantity = page.locator('[data-test="item-quantity"]');

        // finding Cart product name
        this.cartProductName = page.locator('[data-test="inventory-item-name"]');
    }

    async addFirstProductToCart() {
        const dataTestValue = await this.firstAddToCartBtn.getAttribute('data-test');

        this.savedProductNumber = dataTestValue.replace("add-to-cart-", "");

        await this.firstAddToCartBtn.click();
        await this.cartIcon.click();
    }

    async getCartProductNumber() {
        const cartRemoveBtn = this.page.locator('button[data-test*="remove"]');
        const cartDataTestValue = await cartRemoveBtn.getAttribute('data-test');
        return cartDataTestValue.replace("remove-", "");
    }

    async getCartProductName() {
        return await this.cartProductName.innerText();
    }


}