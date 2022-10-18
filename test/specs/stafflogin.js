var  fs=require('fs')
let stafflogin=JSON.parse(fs.readFileSync("test\specs\TestData\staffLogin.json"))

describe("open account and approve account",async()=>{

    stafflogin.array.forEach(({staffid,password}) => {

        it("staff login",async()=>{
            var stafflogin=await browser.$("//a[text()='Staff Login']")
            await stafflogin.click()
            
            var staffid=await browser.$("//input[@name='staff_id']")
            await staffid.setValue(staffid)
            var password=await browser.$("//input[@name='password']")
            await password.setValue(password)
            await browser.pause(5000)
    
            var submitbtn=await browser.$("[name='staff_login-btn']")
            await submitbtn.click()
            })
        
    });
   
})
