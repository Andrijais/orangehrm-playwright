import {test,expect} from '@playwright/test';
import { Login_page } from "../pages/LoginPge";
import { DashboardPage } from '../pages/DahboardPage';
import { LeavePage } from '../pages/LeavePage';

test.describe('Dashboard test',() =>{

    test.beforeEach(async({page}) => {
        const loginPage = new Login_page(page);
        await loginPage.navigate();
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/);


    });


    test('user can go dashboard to leave page', async({page}) => {
        const dashboardPage = new DashboardPage(page);
        const leavePage = new LeavePage(page);

        await dashboardPage.goToLeavePage(page);
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');

        await expect(leavePage.leaveHeader()).toBeVisible();


});



})
