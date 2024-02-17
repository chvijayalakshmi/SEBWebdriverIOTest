class LogoutPage{
    get loginbutton(){
        return $('#nav-link-accountList-nav-line-1');
    } 
    get logoutButton(){
        return $('#nav-item-signout');
    }
    async performLogout(){
        await this.loginbutton.waitForDisplayed();
        await this.loginbutton.moveTo();
        await this.logoutButton.click();
    }
}export default new LogoutPage();