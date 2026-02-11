export class DashboardPage{
    constructor(page){
        this.page =  page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        // this.leaveMenu = page.getByRole('link', { name: 'Leave' });
        // this.leaveMenu = page.getByText('Leave', { exact: true });
        this.leaveMenu = page.locator('.oxd-main-menu-item span:has-text("Leave")');



    }
    async isDashboardVisible() {
                return this.dashboardHeading }

    async goToLeavePage() {
        await this.leaveMenu.click();

        // await dashboardPage.goToLeavePage();

  }
}