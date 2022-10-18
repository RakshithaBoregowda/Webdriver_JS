class admin
{
   get LogOutButton()
    {
       return $("//input[@name='logout_btn']")
    }

   get ApprovependingAccountButton()
   {
      return $("[name='apprvac']")
   }
    get ViewActiveCustomerButton()
    {
       return $("//input[@name='viewdet']")
    }
   
    get CreditCustomerButton()
    {
       return $("//input[@name='credit_cust_ac']")
    }

    get DeleteCustomerButton()
    {
       return $("//input[@name='del_cust']")
    }


    get AdminHomeButton()
    {
       return $("//input[@name='home']")
    }
}
module.exports=new admin();