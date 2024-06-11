class newContactPopup{

    constructor(page){
        this.page=page
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.lastName=this.ebrealModalFrame.locator("#lastname");
        this.firstName=this.ebrealModalFrame.locator("#firstname");
        this.saveAndClose=this.ebrealModalFrame.locator("#save");
        this.saveAndNew=this.ebrealModalFrame.locator("#ok");
        this.cancel=this.ebrealModalFrame.locator("#cancel");
        


    }
}
module.exports={newContactPopup}