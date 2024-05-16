const { CreateStep2 }=require('../pageObjects/CreateStep2');
const { DashboardHeader}=require('../pageObjects/DashboardHeader');
class POManager{

    constructor(page){
      this.page=page;
      this.loginPage= new CreateStep2(this.page);
      this.dashboardHeaderPage= new DashboardHeader(this.page);
    }
}
module.exports={POManager};