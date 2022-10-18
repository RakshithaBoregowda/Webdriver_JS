

class debitcard
{
    get NameTxtFieldDeb()
    {
       return $("//input[@name='holder_name']")
    }

    get DateOfBirthTextFieldDeb()
    {
       return $("//input[@name='dob']")
    }

    get PanNumberTextFieldDeb()
    {
       return $("//input[@name='pan']")
    }
    get MobileNumberTextFieldDeb()
    {
       return $("//input[@name='mob']")
    }
    get AccountNumberTextField()
    {
       return $("//input[@name='acc_no']")
    }

    get DebitCardSubmitButton()
    {
       return $("//input[@name='dbt_crd_submit']")
    }
}
module.exports=new debitcard();