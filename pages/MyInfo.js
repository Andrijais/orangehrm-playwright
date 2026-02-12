export class MyInfo{
    constructor(page){
        this.page = page;
        this.MyInfoHeading = page.getByRole('heading',{name: 'PIM'});
        
    }
}