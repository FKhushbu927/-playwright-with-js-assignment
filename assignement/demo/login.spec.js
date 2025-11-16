import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

// import { ProductsPage } from '../../pages/products';



test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  // const Product = new ProductsPage(page);

  await Login.gotoLoginPage()
  await Login.login('standard_user', 'secret_sauce')

//  // Add product to cart
//   await Product.addFirstProductToCart();


    // Verification
  // const cartProductName = await Product.getCartProductName();
  // expect(cartProductName).toBe(Product.savedProductName);

//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();


});