class deleteCust

{
    get  AccountNumberTextFieldDeleteCust()
    {
        return $("//input[@name='Cust_ac_no']")
    }

    get CustomerIDTextField()
    {
        return $("//input[@name='Cust_ac_Id']")
    }

    get ReasonTextfield()
    {
        return $("//input[@name='reason']")
    }
    get DeleteButton()
    {
        return $("//input[@name='delete']")
    }

}

module.exports=new deleteCust();