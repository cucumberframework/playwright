class framesPageObject{

    constructor(page){
        this.pageFrame= page.frameLocator('#frame_cache_0');
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
    }
}
module.exports={framesPageObject};