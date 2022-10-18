
class homepage
{

get OpenAccountButton()
{
  return  $("//li[text()='Open Account']")
}

get ApplyDebitCard()
{
  return  $("//li[text()='Apply Debit Card']")
}

get StaffLoginLink()
{
   return $("//a[text()='Staff Login']")
}

get HomeLogo()
{
  return $("//img[@class='logo_img']")
}
}
module.exports=new homepage()