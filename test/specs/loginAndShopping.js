import loginPage from '../pageobjects/login.page.js'
import logoutPage from '../pageobjects/logout.page.js';
import shoppingPage from '../pageobjects/shopping.page.js';


describe('Login in to the Amazon web Site', () => {
      // Test to verify the title of the Amazon website
    it('should have the right title', () => {
        browser.url('https://www.amazon.se/');
        browser.maximizeWindow();
        expect(browser).toHaveTitle('Amazon.se: Låga priser på Elektronik, Böcker, Sportutrustning & mer');
    })

    // Test to login with valid userId and password
    it('login with valid userId and password', async () =>{

        // Adding an implicit wait to handle CAPTCHA, pausing for 15 seconds
        await browser.pause(15000);
        await loginPage.selectLoginbtn();
        await loginPage.Login('abcdt0340@gmail.com','Winter@123');
        await expect(loginPage.displayedtext).toHaveText('Hej, abcd');
    })
    // Test to logout from the amazon account
    it('Logout from the amazon account', async() =>{
        await browser.browserDelay;
        await logoutPage.performLogout();
        expect(await browser.getUrl()).toContain('amazon.se/ap/signin');
        const url = browser.getUrl();
        console.log(url);
    })
   
    // Test to login with valid userID and invalid password
    it('login with valid userID and invalid password', async () => {
        try {
            await loginPage.Login('abcdt0340@gmail.com', 'xxxxxxxxx');
            await expect(await loginPage.wrongmessage).toHaveText('Ditt lösenord är felaktigt');
        } catch (error) {
            fail(`Error occurred during login with invalid userid: ${error}`);
        } finally {
            await browser.browserDelay;
        }
    })
    // Test to login to the amazon web page
    it('login in to the amazon web page', async () =>{
        await browser.url('https://www.amazon.se/');
        await browser.maximizeWindow();
        await browser.pause(10000);
        await loginPage.selectLoginbtn();
        await loginPage.Login('abcdt0340@gmail.com','Winter@123');
    })
    // Test to add an item to the cart
    it('Add an item to the cart', async() => {
        
        await shoppingPage.addToCart('iphone');
        await expect(await shoppingPage.displayedtext).toHaveText('Har lagts till i kundvagnen');
    })
    // Test to delete an item from the cart
    it('Delete Item from Cart', async ()=>{
        await shoppingPage.deleteFromCart();
        await expect(await shoppingPage.deleteMessage).toHaveText('Din Amazon-kundvagn är tom.');
    })
})