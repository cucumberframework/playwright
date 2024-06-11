const {gHomepage}=require('../pageObjects/gHomepage');
const {gCheckoutPage}=require('../pageObjects/gCheckoutPage')
class golfyPOManager{


constructor(page){
this.page=page;
   this.homepage=new gHomepage(page);
   this.cartCheckout= new gCheckoutPage(page);
   this.search=page.locator('#search');
   this.login=page.locator('li[class="link authorization-link"] a').nth(0);
   this.signInWithEmail=page.locator('#use_email:visible');
   this.emailAddress=page.locator('input[name="email"]');
   this.password=page.locator('div[class="form-group"] input[name="password"]');
   this.loginButton=page.locator('div[class="enter_email"] .button-submit');
   this.userNameAfterLogin=page.locator('span[class*="customer-first-"]');
   this.golfylogo=page.locator('a[class="logo"]');


}

}
module.exports={golfyPOManager}