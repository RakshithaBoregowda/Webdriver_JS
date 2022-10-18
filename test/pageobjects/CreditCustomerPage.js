class creditcustomerpg

{
    get accountNumberTextFieldcredit()
    {
        return $("//input[@name='customer_account_no']")
    }

    get AmountTextField()
    {
        return $("//input[@name='credit_amount']")
    }

    get CreditButton()
    {
        return $("//input[@name='credit_btn']")
    }

}
module.exports=new creditcustomerpg()