class filters{

    constructor(page){
        this.page=page;
        this.pageFrame= page.frameLocator('#frame_cache_0');
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
        this.filterNameTextField=this.ebrealModalFrame.locator('input[ezcolid="5505028"]');
        this.searchButton=this.ebrealModalFrame.locator("#search");
        this.newButton=this.ebrealModalFrame.locator("#add");
        this.closeButton=this.ebrealModalFrame.locator("#cancel");

    }

    
}
module.exports={filters};
