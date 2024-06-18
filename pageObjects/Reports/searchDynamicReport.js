class searchDynamicReports{

    constructor(page){
        this.page=page;
        this.pageFrame= page.frameLocator('#frame_cache_0');
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
        this.reportName=this.ebrealModalFrame.locator("input[class='text activeElement']");
        this.searchButton=this.ebrealModalFrame.locator("#search");
        this.newButton=this.ebrealModalFrame.locator("#add");
        this.QuickAdd=this.ebrealModalFrame.locator("#superadd");
        this.closeButton=this.ebrealModalFrame.locator("#cancel");
        this.createdByMeRadioButton=this.ebrealModalFrame.locator("#myRpt");
        this.showMyFavoriteList=this.ebrealModalFrame.locator("#myreports");
        this.keyWordDropdown=this.ebrealModalFrame.locator("table[class*='subClassContainer'] tbody tr img").nth(0);
    
    }


    getKeywordOption(optionName){
        return this.ebrealModalFrame.locator(`option[name="${optionName}"]`);
    }
}
module.exports={searchDynamicReports};