export class DashboardPage{
    constructor(page){
        this.page =  page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        // this.leaveMenu = page.getByRole('link', { name: 'Leave' });
        // this.leaveMenu = page.getByText('Leave', { exact: true });
        this.leaveMenu = page.locator('.oxd-main-menu-item span:has-text("Leave")');
        // this.MyInfoMenu = page.locator('oxd-text oxd-text--span oxd-main-menu-item--name')
        this.MyInfoMenu = page.getByRole('link',{name: 'My Info'})



    }
    async isDashboardVisible() {
                return this.dashboardHeading }

    async goToLeavePage() {
        await this.leaveMenu.click();}

    async goToMyInfoPage(){
        await this.MyInfoMenu.click();}
    

        // await dashboardPage.goToLeavePage()}

}