describe("flight booking ",async()=>{
it("login to applucation",async()=>{

    await browser.url("https://www.spicejet.com/")
    console.log(await browser.getTitle())
    await browser.maximizeWindow()
    await browser.$("//div[text()='round trip']").click()
    await browser.pause(2000)
    await browser.$("//div[@data-testid='to-testID-destination']").click()
    await browser.$("//div[text()='AGR']").click();
    await browser.pause(2000)
    await browser.$("//div[text()='Armed Forces']").click()
    await browser.pause(3000)
    await browser.$("//div[text()='Return Date']").click()
    await browser.$("//div[@data-testid='undefined-month-December-2022']//following::div[@data-testid='undefined-calendar-day-5']").click();
    await browser.$("//div[text()='Search Flight']").click()
    
})



})