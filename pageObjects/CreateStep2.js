class CreateStep2{
  constructor(page){
      this.loginPageFrame=page.frameLocator('#frame_cache_0');
      this.officeName=this.loginPageFrame.locator('#Office');
      this.userName= this.loginPageFrame.locator("#User");
      this.pwd=this.loginPageFrame.locator("#Pwd");
      this.rememberme=this.loginPageFrame.locator("#remember");
      this.submitButton=this.loginPageFrame.locator("#submit");
    }
  async login(officename,username,pwd)
    {
      await this.officeName.fill(officename);
      await this.userName.fill(username);
      await this.pwd.fill(pwd);
      await this.rememberme.click();
      await this.submitButton.click();
      console.log("test");
    }
}
module.exports={CreateStep2};