import { test, expect } from "@playwright/test";
import { Login_page } from "../pages/LoginPge";
import { DashboardPage } from "../pages/DahboardPage";
import { MyInfo } from "../pages/MyInfo";

test.describe("myinfo page test", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new Login_page(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();
    await loginPage.login("Admin", "admin123");

    await dashboardPage.goToMyInfoPage();
  });

  test("update personal details", async ({ page }) => {
    const myInfoPage = new MyInfo(page);

    // await myInfoPage.updatemyinfo({
    //   firstName: "cake",
    //   middleName: "A",
    //   lastName: "make",
    // });

    await myInfoPage.updatemyinfo('cake', 'A', 'make');


    await myInfoPage.save();
  });
});
