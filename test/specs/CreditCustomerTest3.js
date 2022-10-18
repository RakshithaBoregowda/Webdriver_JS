const homePage = require("../pageobjects/homePage");
const staff=require("../pageobjects/staffloginpage")
const approveaccount=require("../pageobjects/ApproveAccountpage")
const adminhome=require("../pageobjects/AdminHomePage")
const openacc=require("../pageobjects/openAccountPage")



var  fs=require('fs');
let stafflogin=JSON.parse(fs.readFileSync("./TestData/staffLogin.json"))



describe("open account and approve account",async()=>{
    const openacc=require("../pageobjects/openAccountPage")
    const home=require("../pageobjects/homePage")
    var appno='';
    it("openAcc",async()=>{
    
    await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
    console.log(await browser.getTitle())
    await browser.maximizeWindow()
    
    console.log("open account page")
    homepage.OpenAccountButton.click()
    expect(browser).toHaveTitle("Registration Form")

     await openacc.NameTextField.setValue("sihi")
     await openacc.MobileNumberTextField.setValue("9900678978")
     await openacc.EmailIdTextField.setValue("sihi12gmail.com")
     await openacc.LandlineTextField.setValue("878766544")
     await openacc.DateOfBirthTextField.setValue("04-10-1993")
     await openacc.PanNumberTextField.setValue("cgxsc12345")
     await openacc.citizenshipTextField.setValue("12345")
     await openacc.HomeAddressTextField.setValue("HBR")
     await openacc.OfficeAddressTextField.setValue("HSR")
     await openacc.pinCodeNumberTextField.setValue("562114")
     await openacc.AreaLocationTextField.setValue("HSR")
     await openacc.NomineeNameTextField.setValue("riddhi")
     await openacc.NomineeAccountNumberTextField.setValue("10101010101010")

    await openacc.GenderDropDown.selectByVisibleText("Female")
    await openacc.StateDropDown.selectByVisibleText("California")
    await openacc.CityDropDown.selectByVisibleText("Los Angeles")
    await openacc.AccountType.selectByVisibleText("Saving")

    await openacc.SubmitButtonOpenAcc.click();
    await openacc.ConfirmSubmitButton.click();
    
    
    var applnAlert= await browser.getAlertText()
    await console.log(applnAlert)
    await browser.acceptAlert()
     
    
     for (let index = 0; index < applnAlert.length; index++) 
    {
        if((applnAlert.charAt(index)>=0 && applnAlert.charAt(index)<=9) && applnAlert.charAt(index)!="")
       {
        appno=appno+applnAlert.charAt(index)
       }
       await console.log("application number"+ appno.trim())
        
    }
    })
    
        stafflogin.forEach(({StaffId,Password}) => {

        it("staff login",async()=>{

            await homePage.StaffLoginLink.click();
            await staff.StaffIDTextField.setValue(StaffId)
            await staff.PasswordTextField.setValue(Password)
            await staff.StaffLoginSubmitButton.click();
           
            })
        
    })
   
    
    it("approve account",async()=>{

      await adminhome.ApprovependingAccountButton.click();
      await approveaccount.ApplicationNumberTextField.setValue(appno.trim())
      await approveaccount.SearchApplicationButton.click()
      await approveaccount.ApproveButton.click();

    var accNoPopUp = await browser.getAlertText()
    await console.log(accNoPopUp)
    
    
    var accno='';
     for (let index = 0; index < accNoPopUp.length; index++) 
    {
        if((accNoPopUp.charAt(index)>=0 && accNoPopUp.charAt(index)<=9) && accNoPopUp.charAt(index)!="")
       {
        accno=accno+accNoPopUp.charAt(index)
       }
       await console.log("accountnumber"+ accno)
    }  
    await browser.acceptAlert()
     var homebtn= await browser.$("//input[@name='home']")
     await homebtn.click()

    })

    it("issue credit",async()=>{

     var  creditcustButton= await browser.$("//input[@name='credit_cust_ac']")
     await creditcustButton.click()
     var accountnum=await browser.$("//input[@name='customer_account_no']")
      await accountnum.setValue(accno.trim())
     await browser.pause(5000)
     var amount=await browser.$("//input[@name='credit_amount']")
     await amount.setValue("5000")
     var creditBtn=await browser.$("//input[@name='credit_btn']")
    await creditBtn.click()

    var creditAlert= await browser.getAlertText()
    await console.log(creditAlert)
    await browser.acceptAlert()

    

    })
})