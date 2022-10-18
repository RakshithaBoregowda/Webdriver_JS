class validationn{
    get DynamicAccountNumberList()
    {
      return $$("//th[text()='#']/parent::tr/following::tr/td[4]")
    }

}
module.exports=new validationn();