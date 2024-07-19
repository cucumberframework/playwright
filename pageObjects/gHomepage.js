class gHomepage{

    constructor(page){
        this.page=page;
        this.balls=page.locator('img[alt="balls"]');
        this.ballsFromBallsPage=page.locator('li[class*="item category"]');
        this.closePopup=page.locator('button[class="close"] span[aria-hidden="true"]:visible');
        this.searchBar=page.locator('#search');
        

    }
    async searchRequiredBall(){
        return await this.page.locator("p[class='product-item-brand']").nth(0);
    }
}
module.exports={gHomepage};