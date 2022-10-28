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

    await browser.$("//div[@class='css-1dbjc4n']/div[.='Senior Citizen']").click()
    await browser.$("//div[@data-testid='departure-date-dropdown-label-test-id']").click()
    await browser.$("//div[@data-testid='undefined-month-October-2022']/descendant::div[@class='css-1dbjc4n r-6koalj r-18u37iz r-d0pm55']/div[.='22']").click()
  

    await browser.$("//div[text()='Search Flight']").click()
    
})



})