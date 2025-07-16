
class pomanagerone{


constructor(page){
    this.page=page;
    this.checkbox=page.locator("//input[@name='chkSelectAll']");
    this.username=page.locator('input[name="email"]');
    this.checkoutButton=page.getByRole('button',{name:'Checkout here'});
    this.chooseACar=page.getByLabel("Choose a car:");
    this.choosecardropdown=page.locator("#cars");
    this.usernameplaceholder=page.getByPlaceholder("Enter email");
}
}
module.exports={pomanagerone};