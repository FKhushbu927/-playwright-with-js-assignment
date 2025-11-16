import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { ProductsPage } from '../../pages/products';

test('Add any item verify name in cart', async ({ page }) => {

  const Login = new LoginPage(page);
  const Product = new ProductsPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user', 'secret_sauce');

  // Add to cart
  await Product.addFirstProductToCart();

  // Verify product name
  const cartName = await Product.getCartProductName();

  expect(cartName).toBe("Sauce Labs Bike Light");

});
