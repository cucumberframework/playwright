class DashboardHeader  {
    constructor(page){
        this.homeButton=page.locator('a[title="Home"]:visible');
        this.advanceSearch=page.locator("#searchAdvanced");
        this.searchBox=page.locator("#search_value");
        this.searchIcon=page.locator(".icon-search");
        this.themesButton=page.locator('i[class="fa fa-random topbarFaButton"]');
        this.dataToggle=page.locator('a[data-toggle="dropdown"]');    
        this.addButton=page.locator('i[class*="fa fa-plus "]:visible');
        this.desktopIntegration=page.locator('i[class="fa fa-sign-in topbarFaButton"]');
        this.mainFrame=page.mainFrame(); 
        this.frameCache0=page.frameLocator('#frame_cache_0');
        this.topHeaderTab=this.frameCache0.locator('td[reflinkbarid="_window_id1-linkbar"]');
    
    
    }
    async searchContactBusiness(contactBusinessName){
        await this.homeButton.click();
        await this.mainFrame;
        await this.advanceSearch.waitFor();
        await this.searchBox.fill("Test1");
        await this.searchIcon.click();
        
        await this.topHeaderTab.first().waitFor();   
    }
}
module.exports={DashboardHeader};