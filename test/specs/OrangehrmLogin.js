
describe("launchbrowser",async()=>{
it('OrangehrmLogin',async()=>{

await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await browser.maximizeWindow();

await browser.$("//input[@name='username']").setValue("Admin")
await browser.$("input[placeholder='Password']").setValue("admin123")
await browser.$("//button[@type='submit']").click()
console.log("logged in successfully");

console.log("add employee")
await browser.$("//a[text()='Add Employee']").click()
await browser.$("//input[@name='firstName']").setValue("Ranju")
await browser.$("//input[@name='middleName']").setValue("")
await browser.$("//input[@name='lastName']").setValue("gowda")
await browser.$("//button[@type='submit']").click()
console.log("employee added successfully");

})
})


