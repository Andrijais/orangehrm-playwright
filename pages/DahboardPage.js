export class DashboardPage{
    constructor(page){
        this.page =  page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.leavePagePath = page.getByRole('link', { name: 'Leave' });

    }
    async isDashboardVisible() {
                return this.dashboardHeading }
}