describe("login to application",async()=>{
    var appno='';
    var accno='';
    
    it("openAcc",async()=>{
    
    await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
    console.log(await browser.getTitle())
    await browser.maximizeWindow()
    
    console.log("open account page")
    await browser.$("//li[text()='Open Account']").click()
    expect(browser).toHaveTitle("Registration Form")
    
    var Name=await browser.$("//input[@name='name']")
    await Name.setValue("Ranju")
    var mobile=await browser.$("//input[@name='mobile']")
    await mobile.setValue("9900679073")
    var email=await browser.$("//input[@name='email']")
    await email.setValue("ranju123@gmail.com")
    var landline=await browser.$("//input[@name='landline']")
    await landline.setValue("7896577")
    var dob=await browser.$("//input[@name='dob']")
    await dob.setValue("04-10-1993")
    var pan= await browser.$("//input[@name='pan_no']")
    await pan.setValue("CGPAX12345")
    var citizenship=await browser.$("//input[@name='citizenship']")
    await citizenship.setValue("123456")
    var homeadd=await browser.$("//input[@name='homeaddrs']")
    await homeadd.setValue("HSR")
    var officeadd= await browser.$("//input[@name='officeaddrs']")
    await officeadd.setValue("Banshankari")
    var pin=await browser.$("//input[@name='pin']")
    await pin.setValue("560077")
    var area=await browser.$("//input[@name='arealoc']")
    await area.setValue("hebbal")
    var nomName=await browser.$("//input[@name='nominee_name']")
    await nomName.setValue("partha")
    var nomAccno=await browser.$("//input[@name='nominee_ac_no']")
    await nomAccno.setValue("101112345674352")
    
    var gender =await browser.$("//select[@name='gender']")
    await gender.selectByVisibleText("Female")
    var state =await browser.$("//select[@name='state']")
    await state.selectByVisibleText("California")
    var city=await browser.$("//select[@name='city']")
    await city.selectByVisibleText("Los Angeles")
    var acctype=await browser.$("//select[@name='acctype']")
    await acctype.selectByVisibleText("Saving")
    
    var submit=await browser.$("//input[@name='submit']")
    await submit.click()
    var confirmSubmit = await browser.$('[name="cnfrm-submit"]')
    await confirmSubmit.click()
    
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
    it("staff login",async()=>{
    var stafflogin=await browser.$("//a[text()='Staff Login']")
    await stafflogin.click()
    var staffid=await browser.$("//input[@name='staff_id']")
    await staffid.setValue("210001")
    var password=await browser.$("//input[@name='password']")
    await password.setValue("password")
    await browser.pause(5000)
    var submitbtn=await browser.$("[name='staff_login-btn']")
    await submitbtn.click()
    })
    
    it("approve account",async()=>{
    var approveacc=await browser.$("[name='apprvac']")
    await approveacc.click()
    var applnno=await browser.$("//input[@name='application_no']")
    await applnno.setValue(appno.trim())
    var searchapplication=await browser.$("//input[@name='search_application']")
    await searchapplication.click()
    var approveacc=await browser.$("//input[@name='approve_cust']")
    await approveacc.click()
    
    var accNoPopUp = await browser.getAlertText()
    await console.log(accNoPopUp)
    
    
    
     for (let index = 0; index < accNoPopUp.length; index++) 
    {
        if((accNoPopUp.charAt(index)>=0 && accNoPopUp.charAt(index)<=9) && accNoPopUp.charAt(index)!="")
       {
        appno=accno+accNoPopUp.charAt(index)
       }
       await console.log("accountnumber"+ appno)
    }  
    
    await browser.acceptAlert()
    var homelogo=await browser.$("//img[@class='logo_img']")
    await homelogo.click()
    
    })
    
    it("apply debit card",async()=>{
    
      var debitBtn =await browser.$("//li[text()='Apply Debit Card']")
      await debitBtn.click()
      var aacHolder=await browser.$("//input[@name='holder_name']")
      await aacHolder.setValue("Ranju")
      var DateOfBirth=await browser.$("//input[@name='dob']")
      await DateOfBirth.setValue("04-10-1993")
      var panNo= await browser.$("//input[@name='pan']")
      await panNo.setValue("CGPAX12345")
      var regMobileNo=await browser.$("//input[@name='mob']")
      await regMobileNo.setValue("9900679073")
      var acccountNumber=await browser.$("//input[@name='acc_no']")
      await acccountNumber.setValue(accno.trim())
      var DebitCardSubmit=await browser.$("//input[@name='dbt_crd_submit']")
      await DebitCardSubmit.click()
    
    
    })
    
    })


    