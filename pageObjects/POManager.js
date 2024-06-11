const { CreateStep2 }=require('../pageObjects/CreateStep2');
const { DashboardHeader}=require('../pageObjects/DashboardHeader');
const{ SearchContactBusinessPopup }=require('../pageObjects/SearchContactBusinessPopup');
const{ newContactPopup }=require('../pageObjects/newContactPopup')
const { contactDetailPage }=require('../pageObjects/contactDetailpage')
const { DashboardSidemenu }=require('../pageObjects/DashboardSidemenu')
class POManager{

    constructor(page){
      this.page=page;
      this.loginPage= new CreateStep2(this.page);
      this.dashboardHeaderPage= new DashboardHeader(this.page);
      this.searchContactBusinessPopup= new SearchContactBusinessPopup(this.page);
      this.newContactPopupWin=new newContactPopup(this.page);
      this.contactDetailPageEle=new contactDetailPage(page);
      this.dashBoardSideMenu=new DashboardSidemenu(page);
    }
    async deleteAllExistingRecords(){
      await this.dashboardHeaderPage.advanceSearch.waitFor()
      await this.dashboardHeaderPage.advanceSearch.click();
      await this.searchContactBusinessPopup.contactBusinessRadio.first().waitFor();
      await this.searchContactBusinessPopup.firstLastNameConBusiness.fill("Automa_");
      await this.searchContactBusinessPopup.searchButtonFromPopup.click();
      if(await this.contactDetailPageEle.lastName.isVisible()){
        await this.dashBoardSideMenu.deleteRecord();
    }else if(await this.searchContactBusinessPopup.contactDoesNotExistText.isVisible()){
      await this.searchContactBusinessPopup.contactNotExistNoButton.click();
    }else {
      await this.searchContactBusinessPopup.tagAllContactListPage.click();
      await this.dashBoardSideMenu.deleteRecord();
    }
  }

}
module.exports={POManager};