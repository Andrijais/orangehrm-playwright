

export class MyInfo {
    constructor(page) {
        this.page = page;

        this.myInfoHeading = page.getByRole('heading', { name: 'PIM' });

        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');

        this.saveButton = page.locator('button[type="submit"]').first();
    }

    async updatemyinfo(firstName, middleName, lastName) {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
    }

    async save() {
        await this.saveButton.click();
    }
}
