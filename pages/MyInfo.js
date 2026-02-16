// export class MyInfo{
//     constructor(page){
//         this.page = page;
//         this.MyInfoHeading = page.getByRole('heading',{name: 'PIM'});
//         this.FirstNameInp = page.getByRole('input[name="firstName"]');
//         this.MiddleNameInp = page.getByRole('placeholder',{name:'middlename'});
//         this.LastNameInp = page.getByRole('placeholder',{name:'lastName'});
//         this.SaveButton1 = page.getByRole('button',{type:'submit'});


//     }

//     async updatemyinfo(FirstNameInp,MiddleNameInp,LastNameInp){
//         await this.FirstNameInp.fill(FirstNameInp);
//         await this.middleNameInput.fill(MiddleNameInp);
//         await this.lastNameInput.fill(LastNameInp);

//     }

//     async save() {
//         await this.SaveButton1.click();
//     }

// }

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
