class SearchContactBusinessPopup{

    constructor(page){
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.contactBusinessRadio=this.ebrealModalFrame.locator(".RADIO");
        this.firstLastName=this.ebrealModalFrame.locator("#nm"); 
    }
    async switchToembedFrame(){
        await this.embedFrame;
    }
    async switchToebRealModal(){
        await this.switchToembedFrame();
        await this.ebrealModalFrame;
    }
}
module.exports={SearchContactBusinessPopup};