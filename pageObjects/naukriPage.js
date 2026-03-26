
class naukriPage{


constructor(page){
this.page=page;
this.loginButton=this.page.locator("#login_Layer");
this.username=this.page.getByPlaceholder("Enter your active Email ID / Username");
this.password=this.page.getByPlaceholder("Enter your password");
this.submitbutton=this.page.locator("button[type='submit']");
this.viewprofile=this.page.locator(".view-profile-wrapper");
this.editprofile=this.page.locator("#lazyResumeHead span[class='edit icon']");
this.resumeheadline=this.page.getByPlaceholder("Enter your resume headline...");
this.savebutton=this.page.getByRole('button', { name: 'Save' });


}

}
module.exports={naukriPage}