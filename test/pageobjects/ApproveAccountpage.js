class ApproveAccount
{
  get ApplicationNumberTextField()
   {
    return $("//input[@name='application_no']")
   }

   get SearchApplicationButton()
   {
    return $("//input[@name='search_application']")
   }

   get ApproveButton()
   {
   return $("//input[@name='approve_cust']")
   }
   
}

module.exports=new ApproveAccount();