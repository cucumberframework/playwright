class DashboardSidemenu{
    constructor(page){
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
        this.menuButton=this.mainFrame.locator("#_window_id1-button");
        this.deleteButton=this.mainFrame.locator('img[title*="Ctrl+Del"]:visible');
        this.contactDeletionYesButton=page.locator('#button1');
        this.contactDeletionNoButton=page.locator('#button2');
    }
    async deleteRecord(){
    await this.deleteButton.click();
    await this.contactDeletionYesButton.click();
    }
}
module.exports={DashboardSidemenu}