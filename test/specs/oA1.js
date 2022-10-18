
describe("Creating account and approving the account",async()=>{
    var applicationNo=''
    it('opening application',async()=>{
        await browser.url("https://rmgtestingserver/domain/Online_Banking_System/")
        await expect(browser).toHaveTitle('Online Banking System')
    })
    it('launching open account page', async()=>{
        const openAccountLink=  browser.$('li=Open Account')
        await openAccountLink.click()
        await expect(browser).toHaveTitle('Registration Form')
       
    })
    it('Filling open Account details', async()=>{
        const nameTextField = await browser.$('[name="name"]')
        await nameTextField.setValue("Avin")
        
        // var verify = nameTextField.getValue()
        // console.log(verify);
        const genderDropDown = await browser.$("[name='gender']")
        await genderDropDown.selectByVisibleText("Male")
        const mobileNo = await browser.$('[name="mobile"]')
        await mobileNo.setValue(9003947855)
        const emailId = await browser.$('[name="email"]')
        await emailId.setValue("thaj@gmail.com")
        const landlineNo = await browser.$('[name="landline"]')
        await landlineNo.setValue(0444322345)
        const dateOfBirth = await browser.$('[name="dob"]')
        await dateOfBirth.setValue("07/10/1997")
        const panNo = await browser.$('[name="pan_no"]')
        await panNo.setValue("AWGPTCY23")
        const citizenshipNo = await browser.$('[name="citizenship"]')
        await citizenshipNo.setValue("CITINO9876")
        const homeAddress  = await browser.$('[name="homeaddrs"]')
        await homeAddress.setValue("HSR")
        const officeAddress = await browser.$('[name="officeaddrs"]')
        await officeAddress.setValue("Dharapuram")
        const state = await browser.$('[name="state"]')
        await state.selectByVisibleText("California")
        const city  = await browser.$('[name="city"]')
        await city.selectByVisibleText("San Diego")
        const pin = await browser.$('[name="pin"]')
        await pin.setValue(638661)
        const areaOrLocality = await browser.$('[name="arealoc"]')
        await areaOrLocality.setValue("nagawara")
        const accountType = await browser.$('[name="acctype"]')
        await accountType.selectByVisibleText('Current')
        const submitButton = await browser.$('[name="submit"]')
        await submitButton.click()
        await expect(browser).toHaveTitle('Confirm')
        const confirmSubmit = await browser.$('[name="cnfrm-submit"]')
        await confirmSubmit.click()
        var applicationAlert = await browser.getAlertText()
        // await console.log(applicationAlert);
        // await console.log(typeof(applicationAlert));
       
        
        for (let index = 0; index < applicationAlert.length; index++) {
            if ((applicationAlert.charAt(index)>=0 && applicationAlert.charAt(index)<=9)&& applicationAlert.charAt(index)!=" ") {
                 applicationNo = applicationNo + applicationAlert.charAt(index)
            } 
         }
         await console.log('appNo='+applicationNo.trim());
        await browser.acceptAlert()
        // await console.log(applicationNo);
        await browser.pause(3000)
        function getAppNo() {
            return applicationNo.trim()
        }
    })
    it('login to manager module',async()=>{
        const staffLoginLink = await browser.$('=Staff Login')
        await staffLoginLink.click()
        await expect(browser).toHaveTitle("Staff Page")
        const staffTextField = await browser.$('[name="staff_id"]')
        await staffTextField.setValue(210001)
        const passwordTextFiled = await browser.$('[name="password"]')
        await passwordTextFiled.setValue("password")
        const staffSubmitButton = await browser.$('[name="staff_login-btn"]')
        await staffSubmitButton.click()
        await expect(browser).toHaveTitle("Staff Home")
    })
    it('approve customer',async()=>{
        const approveCustomerLink = await browser.$('[name="apprvac"]')
        await approveCustomerLink.click()
        await expect(browser).toHaveTitle("Pending Customers")
        const appNoSearchBar = await browser.$('[name="application_no"]')
        await appNoSearchBar.setValue(applicationNo.trim())
        await browser.pause(3000)
        await console.log(applicationNo.trim());
        const searchAppNoButton = await browser.$('[name="search_application"]')
        await searchAppNoButton.click()
        const approveCustomerButton = await browser.$('[name="approve_cust"]')
        await approveCustomerButton.click()
        var accNoPopUp = await browser.getAlertText()
        var accountNo = ''
        for (let index = 0; index < accNoPopUp.length; index++) {
            if ((accNoPopUp.charAt(index)>=0 && accNoPopUp.charAt(index)<=9)&& accNoPopUp.charAt(index)!=" ") {
            accountNo = accountNo.concat(accNoPopUp.charAt(index))
            
           } 
            
        }
        await console.log(accNoPopUp.trim());
        await console.log(accountNo);
        await browser.acceptAlert()
        await browser.pause(3000)

        await(console.log("validation"))
        var homebtn=await browser.$("//input[@name='home']")
        await homebtn.click()
        var viewactAccount=await browser.$("//input[@name='viewdet']")
        await viewactAccount.click()
        const iterator=await browser.$$("//th[text()='#']/parent::tr/following::tr/td[4]")
        await console.log(iterator)

        

    // 	for (const accno of iterator) 
    //     {
    //     var actAccno = accno.getText();
    // 	await console.log(actAccno);

    // 	if(actAccno==accno)
    // 	{
    // 	console.log("Test case pass");
    //     break;
    // 	}

	

        
    })
})