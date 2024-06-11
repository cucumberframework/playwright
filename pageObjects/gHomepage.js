class gHomepage{

    constructor(page){
        this.page=page;
        this.balls=page.locator('img[alt="balls"]');
        this.ballsFromBallsPage=page.locator('li[class*="item category"]');
        this.closePopup=page.locator('button[class="close"] span[aria-hidden="true"]:visible');
        this.searchBar=page.locator('#search');
        

    }
    async searchRequiredBall(ballName){
        return await this.page.getByText(ballName).nth(1);
    }
}
module.exports={gHomepage};