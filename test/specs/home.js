//practice Ecommerce website automation - https://www.naturesbasket.co.in/
// import selectors from '../pages/locators.js'

// describe('Home',async() =>{
//     it('Open the Url and assert the title', async() =>{
//         await browser.url("https://www.naturesbasket.co.in/")
//         await browser.maximizeWindow()
//         await browser.saveScreenshot("./test/screenshot/homepage.png")
//         //assert the title
//         await expect(browser).toHaveTitle("Online Supermarket & Premium Grocery Shopping Store in India - Nature's Basket")
//
//     });
//
//     it('Open the URL and go to the about Page', async() =>{
//         await browser.url("https://www.naturesbasket.co.in/")
//         await browser.saveScreenshot("./test/screenshot/homepage_01.png")
//         await browser.maximizeWindow()
//         //assert the title
//         await expect(browser).toHaveTitle("Online Supermarket & Premium Grocery Shopping Store in India - Nature's Basket")
//         $(selectors.aboutpage_button).click()
//         await browser.saveScreenshot("./test/screenshot/aboutpage_01.png")
//
//     })
//
//     it('Click on Cart Icon and verify the Login url contains Cart Aspx', async () =>{
//         await browser.url("https://www.naturesbasket.co.in/")
//         await browser.saveScreenshot("./test/screenshot/homepage_02.png")
//         await browser.maximizeWindow()
//         $(selectors.carticon).waitForClickable({ timeout: 4000 })
//         $(selectors.carticon).click()
//         await browser.saveScreenshot("./test/screenshot/CartPage_01.png")
//         await expect(browser).toHaveUrlContaining('cart.aspx')
//     })
//
//     it('On Clicking Nature Basket Logo User is Navigated to Nature Basket Home Page', async () =>{
//         await browser.url("https://www.naturesbasket.co.in/")
//         await browser.saveScreenshot("./test/screenshot/homepage_03.png")
//         await browser.maximizeWindow()
//         $(selectors.homepage_icon).waitForClickable({timeout: 4000})
//         $(selectors.homepage_icon).click()
//         await browser.saveScreenshot("./test/screenshot/LandedtoHomePage_01.png")
//         await expect(browser).not.toHaveUrlContaining("cart.aspx")
//
//     })
// })

describe('Snapdeal website Home Page', async() =>{
    it('Verify all the Navigation Link under More Catagories Option', async() =>{
        await browser.url("https://www.snapdeal.com/")

        const expectedLinks = [
            "Automotives",
            "Mobile & Accessories",
            "Electronics",
            "Sports, Fitness & Outdoor",
            "Computers & Gaming",
            "Books, Media & Music",
            "Hobbies",
        ]

        await browser.saveScreenshot("./test/screenshot/Snapdeal_homepage_Base.png")
        await browser.maximizeWindow()
        const navlinks = await $$(selectors.snapdeal_nav_links)
        const actualLinks = []
        for(const links of navlinks){
            actualLinks.push(await links.getText())
        }

        await expect(expectedLinks).toEqual(actualLinks)
    })
})