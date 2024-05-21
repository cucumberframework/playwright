const { CreateStep2 }=require('../pageObjects/CreateStep2');
const { DashboardHeader}=require('../pageObjects/DashboardHeader');
const{ SearchContactBusinessPopup }=require('../pageObjects/SearchContactBusinessPopup');
class POManager{

    constructor(page){
      this.page=page;
      this.loginPage= new CreateStep2(this.page);
      this.dashboardHeaderPage= new DashboardHeader(this.page);
      this.searchContactBusinessPopup= new SearchContactBusinessPopup(this.page);
    }
}
module.exports={POManager};