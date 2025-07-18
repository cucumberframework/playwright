
class pomanagerone {


    constructor(page) {
        this.page = page;
        this.checkbox = page.locator("//input[@name='chkSelectAll']");
        this.username = page.locator('input[name="email"]');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout here' });
        this.chooseACar = page.getByLabel("Choose a car:");
        this.choosecardropdown = page.locator("#cars");
        this.usernameplaceholder = page.getByPlaceholder("Enter email");
        this.disabledInput = page.getByPlaceholder("First Enter name");
        this.checkoutHereButton = page.getByRole('button', { name: 'Checkout here' });
        this.considerSmallDonationLink = page.getByRole('link', { name: 'Consider a small Donation and support this page.' })
        this.selectersHubyouTubeChannel = page.getByRole('link', { name: ' SelectorsHub Youtube Channel' });
        this.alertButton = page.getByText("Click To Open Window Alert");
        this.firstIframe = page.frameLocator("#pact1");
        this.firstCrushField = this.firstIframe.getByPlaceholder("First Crush");
        this.secondIFrame = this.firstIframe.frameLocator("#pact2");
        this.currentCrushName = this.secondIFrame.getByPlaceholder("Current Crush Name");



    }

}
module.exports = { pomanagerone };