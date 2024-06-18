class sideMenu{

    constructor(page){
        this.page=page
        this.calender=page.locator("#mySideBar_li_menuCalendar span");
        this.reports=page.locator("#menuReporting span");
    }


    getSideMenuOption(option){
        return this.page.locator(`#mySideBar_li_menu${option} a span`)
    }
    getSubReport(reportTitle) {
        return this.page.locator(`#menuReporting a[title="${reportTitle}"]`);
    };
    getFilterSubMenu(subMenu){
        return this.page.locator(`ul[id="menuSetup"] li[id="mySideBar_li_menu${subMenu}"]`)
    }
}
module.exports={sideMenu}