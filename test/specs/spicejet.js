//practice Spicejet website automation - https://www.spicejet.com/
import selectors from '../pages/locators.js'
import spicejetdata from "../data/spicejetdata.js";

describe('Navigate to Spicejet website ',async () => {
    it('Click on Spicejet Signup and Switch and fill the Spicejet User Registration Form', async () =>{
        await browser.url("https://www.spicejet.com/")
        await browser.maximizeWindow()
        await browser.saveScreenshot("./test/screenshot/spicejet_screenshots/Spicejet_HomePage.png")
        await $(selectors.spicejet_signup).waitForClickable({ timeout: 4000 })
        await $(selectors.spicejet_signup).click()
        await browser.pause(4000)
        await browser.switchWindow('SpiceClub - The frequent flyer program of SpiceJet')
        await browser.saveScreenshot("./test/screenshot/spicejet_screenshots/Spicejet_SignupPage.png")
        // fill the Spicejet Signup Form
        // await $(selectors.spicejet_title_drop).waitForEnabled({timeout: 4000})
        // await browser.acceptAlert()
        await $(selectors.spicejet_title_drop).selectByAttribute('value','MR')
        await browser.saveScreenshot("./test/screenshot/spicejet_screenshots/Spicejet_Signup_title.png")
        await $(selectors.spicejet_firstname).waitForEnabled({timeout: 4000})
        await $(selectors.spicejet_firstname).addValue(spicejetdata.firstname)
        await browser.saveScreenshot("./test/screenshot/spicejet_screenshots/Spicejet_Signup_firstname.png")


    })
})