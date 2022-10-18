class openAccount{
    get NameTextField()
    {
       return $("//input[@name='name']")
    }

    get MobileNumberTextField()
    {
        return $("//input[@name='mobile']")
    }

    get EmailIdTextField()
    {
       return $("//input[@name='email']")
    }

    get LandlineTextField()
    {
        return $("//input[@name='landline']")
    }

    get DateOfBirthTextField()
    {
       return $("//input[@name='dob']")
    }

    get PanNumberTextField()
    {
      return  $("//input[@name='pan_no']") 
    }

    get citizenshipTextField()
    {
      return  $("//input[@name='citizenship']") 
    }

    get HomeAddressTextField()
    {
       return $("//input[@name='homeaddrs']")
    }
 
    get OfficeAddressTextField()
    {
       return $("//input[@name='officeaddrs']")
    }
    get pinCodeNumberTextField()
    {
       return $("//input[@name='pin']")
    }
    get AreaLocationTextField()
    {
       return $("//input[@name='arealoc']")
    }
    get NomineeNameTextField()
    {
      return  $("//input[@name='nominee_name']")
    }
    get NomineeAccountNumberTextField()
    {
      return  $("//input[@name='nominee_ac_no']")
    }
   get GenderDropDown()
   {
    return $("//select[@name='gender']")
   }

   get StateDropDown()
   {
    return $("//select[@name='state']")
   }

   get CityDropDown()
   {
   return  $("//select[@name='city']")
   }
   get AccountType()
   {
    return $("//select[@name='acctype']")
   }

   get SubmitButtonOpenAcc()
   {
    return $("//input[@name='submit']")
   }

   get ConfirmSubmitButton()
   {
   return $('[name="cnfrm-submit"]')
   }
}

module.exports = new openAccount();