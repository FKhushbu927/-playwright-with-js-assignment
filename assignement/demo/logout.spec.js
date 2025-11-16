import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { LogoutPage } from '../../pages/logout';

test('verify logout functionalty', async ({ page }) => {

  const Login = new LoginPage(page);
  const Logout = new LogoutPage(page);

  
  await Login.gotoLoginPage();
  await Login.login('standard_user', 'secret_sauce');

  //logout 
  await Logout.logout();

  // Verify successful logout by checking login page is visible or not (Swag Labs login page visible)
  const isLoggedOut = await Logout.verifyLoggedOut();

  expect(isLoggedOut).toBe(true);

});
