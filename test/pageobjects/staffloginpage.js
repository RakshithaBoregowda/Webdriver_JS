class StaffLogin
{


    get StaffIDTextField()
    {
        return $("//input[@name='staff_id']")
    }

    get PasswordTextField()
    {
       return $("//input[@name='password']")
    }


    get StaffLoginSubmitButton()
    {
       return $("[name='staff_login-btn']")
    }
    
}

module.exports=new StaffLogin();