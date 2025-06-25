class contactDetailPage{
    constructor(page){
        this.page=page;
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
        this.lastName=this.mainFrame.locator("#lastname");

    }
}
module.exports={contactDetailPage};