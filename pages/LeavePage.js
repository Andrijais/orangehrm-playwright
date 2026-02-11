export class LeavePage{
    constructor (page){
        this.page = page;

    }
     leaveHeader() {
    return this.page.locator('h6:has-text("Leave")');
  }
}