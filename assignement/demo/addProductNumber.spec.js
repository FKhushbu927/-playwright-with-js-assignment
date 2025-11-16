import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { ProductsPage } from '../../pages/products';


test('Add any item to cart and verify product quantity', async ({ page }) => {

  const Login = new LoginPage(page);
  const Product = new ProductsPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user', 'secret_sauce');

  // Add first product
  await Product.addFirstProductToCart();

  // Verify number ("sauce-labs-bike-light")
  const cartProductNumber = await Product.getCartProductNumber();

  expect(cartProductNumber).toBe(Product.savedProductNumber);

});