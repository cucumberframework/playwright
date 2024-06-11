class gCheckoutPage{

    constructor(page){
    this.page=page;
    this.increaseQuantity=page.locator(".qty_increment");
    this.customPrintCheckbox=page.locator("#printcheck");
    }
}
module.exports={gCheckoutPage};