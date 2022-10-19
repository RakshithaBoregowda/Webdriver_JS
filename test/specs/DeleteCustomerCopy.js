const homePage =require("../pageobjects/homePage");
const staff=require("../pageobjects/staffloginpage")
const approveaccount=require("../pageobjects/ApproveAccountpage")
const adminhome=require("../pageobjects/AdminHomePage")
const Applydebt=require("../pageobjects/ApplyDebitCardPage")
const openacc=require("../pageobjects/openAccountPage")
const deletecust=require("../pageobjects/deleteCustomerpage")



var  fs=require('fs');
let stafflogin=JSON.parse(fs.readFileSync("./TestData/staffLogin.json"))
let testdata=JSON.parse(fs.readFileSync("./TestData/AccInfo.json"))


describe("open account and approve account",async()=>{
  
    var appno='';
    var accno='';
    var custid='';
    testdata.forEach(({ Name, Mobile, Email, Landline,Dob,Pan,CitizenShip,Homeadd,Officeadd, PinCode,
      AreaLocality,NomineeName,NomineeAcc,Gender,State,City,AccountType })=>{
  it("openAcc",async()=>{
  
  await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
  console.log(await browser.getTitle())
  await browser.maximizeWindow()
  
  console.log("open account page")
  homePage.OpenAccountButton.click()
  expect(browser).toHaveTitle("Registration Form")

   await openacc.NameTextField.setValue(Name)
   await openacc.MobileNumberTextField.setValue(Mobile)
   await openacc.EmailIdTextField.setValue(Email)
   await openacc.LandlineTextField.setValue(Landline)
   await openacc.DateOfBirthTextField.setValue(Dob)
   await openacc.PanNumberTextField.setValue(Pan)
   await openacc.citizenshipTextField.setValue(CitizenShip)
   await openacc.HomeAddressTextField.setValue(Homeadd)
   await openacc.OfficeAddressTextField.setValue(Officeadd)
   await openacc.pinCodeNumberTextField.setValue(PinCode)
   await openacc.AreaLocationTextField.setValue(AreaLocality)
   await openacc.NomineeNameTextField.setValue(NomineeName)
   await openacc.NomineeAccountNumberTextField.setValue(NomineeAcc)

  await openacc.GenderDropDown.selectByVisibleText(Gender)
  await openacc.StateDropDown.selectByVisibleText(State)
  await openacc.CityDropDown.selectByVisibleText(City)
  await openacc.AccountType.selectByVisibleText(AccountType)

  await openacc.SubmitButtonOpenAcc.click();
  await openacc.ConfirmSubmitButton.click();
  
  
  var applnAlert= await browser.getAlertText()
  await browser.pause(5000)
  await console.log(applnAlert)
  await expect(applnAlert).toContain("Application submitted successfully")
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
    await browser.pause(5000)
     for (var index = 0; index < accNoPopUp.length; index++) 
    {
        if((accNoPopUp.charAt(index)>=0 && accNoPopUp.charAt(index)<=9) && accNoPopUp.charAt(index)!="")
       {
        accno=accno+accNoPopUp.charAt(index)
       }
       await console.log("accountnumber"+ accno)
    }  
    await browser.acceptAlert()
    await adminhome.AdminHomeButton.click()
  
    })

    testdata.forEach(({Reason}) => {
    it("delete customer",async()=>{
     await adminhome.DeleteCustomerButton.click()
     await deletecust.AccountNumberTextFieldDeleteCust.setValue(accno.trim())

     convAccno=String(accno.trim())
    
     for (let index = 6; index < convAccno.length; index++) 
     {
       custid=custid+convAccno.charAt(index);
     }
    await console.log(custid)
     
    await deletecust.CustomerIDTextField.setValue(custid.trim())
    await deletecust.ReasonTextfield.setValue(Reason)
    await deletecust.DeleteButton.click();

    var deletecustAlert= await browser.getAlertText()
    await browser.pause(5000)
    await console.log(deletecustAlert)
    await expect(deletecustAlert).toContain("Customer Deleted Successfully")
    await browser.acceptAlert()


    })
  })
})