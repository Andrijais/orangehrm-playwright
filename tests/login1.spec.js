import {test,expect} from '@playwright/test';
import { Login_page } from "../pages/LoginPge";
import { DashboardPage } from '../pages/DahboardPage';
// import { LeavePage } from '../pages/LeavePage';


test('user can login', async({page}) => {
    const loginPage = new Login_page(page);
    const dashboardPage = new DashboardPage(page);
 
    await loginPage.navigate('/web/index.php/auth/login/');
    await loginPage.login('Admin','admin123');

    // verify
    await expect(page).toHaveURL(/web\/index\.php\/dashboard/);
    await expect(await dashboardPage.isDashboardVisible()).toHaveText('Dashboard');

});

// test('user can go dashboard to leave page', async({page}) => {
//         const dashboardPage = new DashboardPage(page);
//         const leavePage = new LeavePage(page);


// })
