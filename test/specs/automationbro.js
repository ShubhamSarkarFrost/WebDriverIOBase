//practice Ecommerce website automation - https://practice.automationbro.com/
const path = require('path')
import selectors from '../pages/locators.js'
import automationbroformdata from "../data/automationbroformdata";


describe('Automate ECommerce Website Application', async() =>{
    // it('Fill the Contact form of Automation Bro Ecommerce Application', async() =>{
    //        await browser.url("https://practice.automationbro.com/")
    //        await browser.maximizeWindow()
    //        await $(selectors.conatctbuttonautobro).waitForClickable({timeout: 4000})
    //        await $(selectors.conatctbuttonautobro).click()
    //        await expect(browser).toHaveUrlContaining("contact")
    //        // set the name
    //        await $(selectors.contactformname).waitForEnabled({timeout: 4000})
    //        await $(selectors.contactformname).scrollIntoView()
    //        await browser.pause(3000)
    //        await $(selectors.contactformname).addValue(automationbroformdata.name)
    //        // set the email
    //        await $(selectors.contactformemail).waitForEnabled({timeout: 4000})
    //        await $(selectors.contactformemail).scrollIntoView()
    //        await browser.pause(3000)
    //        await $(selectors.contactformemail).addValue(automationbroformdata.email)
    //        // set the phone
    //        await $(selectors.contactformphone).waitForEnabled({timeout: 4000})
    //        await $(selectors.contactformphone).scrollIntoView()
    //        await browser.pause(3000)
    //        await $(selectors.contactformphone).addValue(automationbroformdata.phone)
    //        // set the message
    //        await $(selectors.conatactformmsg).waitForEnabled({timeout: 4000})
    //        await $(selectors.conatactformmsg).scrollIntoView()
    //        await browser.pause(3000)
    //        await $(selectors.conatactformmsg).addValue(automationbroformdata.conatactformmsg)
    //        //click on submit Button
    //        await $(selectors.submitbuttonauto).waitForEnabled({timeout:4000})
    //        await $(selectors.submitbuttonauto).scrollIntoView()
    //        await browser.pause(3000)
    //        await $(selectors.submitbuttonauto).click()
    //        // verify success message
    //        await $(selectors.sucessmessageauto).waitForDisplayed({timeout:7000})
    //        expect (selectors.sucessmessageauto).toHaveTextContaining(automationbroformdata.successmessage)
    //        await browser.saveScreenshot("./test/screenshot/automationBro/automationbrocontact.png")
    //
    // })

    // it('Check the Recent Posts Length are greater than 10 and there are ', async() =>{
    //        await browser.url("https://practice.automationbro.com/")
    //        await browser.maximizeWindow()
    //        await browser.pause(3000)
    //        await $(selectors.blogbuttonauto).waitForClickable({timeout: 4000})
    //        await $(selectors.blogbuttonauto).click()
    //        await expect(browser).toHaveUrlContaining("blog")
    //
    //        const allposts = $$('#recent-posts-3 ul li')
    //       // Loop through all the data and assert the text length is greater than 10
    //       //  for(const item of allposts){
    //       //         const text = await item.getText()
    //       //         await expect(text.length).toBeGreaterThan(10);
    //       //  }
    //
    //        //Assert total length of elements in list is 5
    //       await expect(allposts).toHaveLength(5)

    // })

    it('Upload on a Hidden Input Field', async() =>{
        //open url
        await browser.url("https://practice.automationbro.com/cart/")
        await browser.maximizeWindow()

        // //store test file path
        const filepath = path.join(__dirname,'../data/computer.png')
        // // upload test file
        const remoteFilePath = await browser.uploadFile(filepath)
        // //remove class
        await browser.execute("document.querySelector('#upfile_1').className = ''")
        //
        // //set the filepath in the input field
        await $('#upfile_1').setValue(remoteFilePath)
        await $('#upload_1').click()
        //
        // //assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully')
    })
})
//       describe('Upload the File in Herokuapp.com upload Functionality ', async() =>{
//              it('Automate Upload functionality in Herokuapp', async() =>{
//                     await browser.url("https://the-internet.herokuapp.com/upload");
//                     await browser.maximizeWindow()
//                     await browser.pause(3000)
//                     const filepath = path.join(__dirname,'../data/computer.png')
//                     // upload the file
//                     const remoteFilePath = await browser.uploadFile(filepath)
//
//                     // set my filepath value in input field
//                     await $(selectors.choosefile).setValue(remoteFilePath)
//                     await browser.pause(5000)
//                     await $(selectors.filesubmit).click()
//                     await browser.pause(5000)
//
//
//              })
//       })