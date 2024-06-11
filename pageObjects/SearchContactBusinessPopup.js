const {POManager}=require('../pageObjects/POManager');

class SearchContactBusinessPopup{
  
    constructor(page){
        this.page=page;
        this.embedFrame= page.frameLocator(".embed-responsive-item");
        this.ebrealModalFrame= this.embedFrame.frameLocator("#ebRealModalFrame");
        this.mainFrame=page.frameLocator("#frame_cache_0");
        this.contactBusinessRadio=this.ebrealModalFrame.locator(".RADIO");
        this.firstLastName=this.ebrealModalFrame.locator("#nm");
        this.firstLastNameConBusiness=this.ebrealModalFrame.locator("#both_nm"); 
        this.searchButtonFromPopup=this.ebrealModalFrame.locator("button[id='search']");
        this.closeButtonFromPopup=this.ebrealModalFrame.locator("button[id='cancel']");
        this.primaryAdvisor=this.ebrealModalFrame.locator('input[ezcolid="8192044"]');
        this.contactDoesNotExistText=this.ebrealModalFrame.locator('#prompt');
        this.contactNotExistYesButton=page.locator('#button1');
        this.contactNotExistNoButton=page.locator('#button2');
        this.tagAllContactListPage=this.mainFrame.locator('input[title*="Tag All"]');

        
    }
    async switchToembedFrame(){
        await this.embedFrame;
    }
    async switchToebRealModal(){
        await this.switchToembedFrame();
        await this.ebrealModalFrame;
    }

    /*async deleteAllExistingRecords(){
        var poManager= new POManager(this.page);
        await poManager.dashboardHeaderPage.advanceSearch.waitFor()
       // dashboardHeaderPage.advanceSearch.waitFor();
        await poManager.dashboardHeaderPage.advanceSearch.click();
        await poManager.searchContactBusinessPopup.contactBusinessRadio.first().waitFor();
        await poManager.searchContactBusinessPopup.firstLastNameConBusiness.fill("Automa_");
        await this.searchButtonFromPopup.click();
        
        await poManager.dashBoardSideMenu.deleteRecord();
    }
*/
}
module.exports={SearchContactBusinessPopup};