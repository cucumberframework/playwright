const { CreateStep2 }=require('../pageObjects/CreateStep2');
const { DashboardHeader}=require('../pageObjects/DashboardHeader');
const{ SearchContactBusinessPopup }=require('../pageObjects/SearchContactBusinessPopup');
const{ newContactPopup }=require('../pageObjects/newContactPopup')
const { contactDetailPage }=require('../pageObjects/contactDetailpage')
const { DashboardSidemenu }=require('../pageObjects/DashboardSidemenu')
const { sideMenu }=require('../pageObjects/sideMenu');
const { searchDynamicReports }=require('../pageObjects/Reports/searchDynamicReport');
const {filters }=require('../pageObjects/Filters/filters')
class POManager{

    constructor(page){
      this.page=page;
      this.loginPage= new CreateStep2(this.page);
      this.dashboardHeaderPage= new DashboardHeader(this.page);
      this.searchContactBusinessPopup= new SearchContactBusinessPopup(this.page);
      this.newContactPopupWin=new newContactPopup(this.page);
      this.contactDetailPageEle=new contactDetailPage(page);
      this.dashBoardSideMenu=new DashboardSidemenu(page);
      this.sideMenuOptions=new sideMenu(page);
      this.searchDynamicReportsPopup=new searchDynamicReports(page);
      this.filtersPopup=new filters(page);
    }
    async deleteAllExistingRecords(recordName){
      await this.dashboardHeaderPage.advanceSearch.waitFor()
      await this.dashboardHeaderPage.advanceSearch.click();
      await this.searchContactBusinessPopup.contactBusinessRadio.first().waitFor();
      await this.searchContactBusinessPopup.firstLastNameConBusiness.fill(recordName);
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
  async createNewContactRecord(cotactName){
    await this.dashboardHeaderPage.addButton.waitFor();
    await this.dashboardHeaderPage.addButton.click();
    await this.dashboardHeaderPage.addButtonContact.waitFor();
    await this.dashboardHeaderPage.addButtonContact.click();
    await this.newContactPopupWin.lastName.waitFor()
    await this.newContactPopupWin.lastName.fill(cotactName+"-"+randomNumber);
    await this.newContactPopupWin.saveAndClose.waitFor();
    await this.newContactPopupWin.saveAndClose.click();
  }

  async searchDynamicReportByKeyword(keyword){
  await this.sideMenuOptions.getSideMenuOption("Reporting").click();
   await this.sideMenuOptions.getSubReport("Dynamic Reports").click();
   await this.searchDynamicReportsPopup.keyWordDropdown.click();
   await this.searchDynamicReportsPopup.getKeywordOption(keyword).click();
   await this.searchDynamicReportsPopup.searchButton.click();
  }

  async createDynamicReport(){

  }
  async searchDynamicReportByName(name){
    await this.sideMenuOptions.getSideMenuOption("Reporting").click();
   await this.sideMenuOptions.getSubReport("Dynamic Reports").click();
    await this.searchDynamicReportsPopup.reportName.fill(name);
    await this.searchDynamicReportsPopup.searchButton.click();
  }
}
module.exports={POManager};