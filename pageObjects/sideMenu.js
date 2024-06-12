class sideMenu{

    constructor(page){
        this.page=page
        this.calender=page.locator("#mySideBar_li_menuCalendar span");
        this.reports=page.locator("#menuReporting span");

    }


    getSubReport(reportTitle) {
        return this.page.locator(`#menuReporting a[title="${reportTitle}"]`);
    }
}
module.exports={sideMenu}