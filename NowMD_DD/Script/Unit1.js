﻿function Login()
{
  var path=Project.Path+"\\\\excel sheets\Valid_login";
  Log.Message(path);
  

 /* for(; !Project.Variables.Var2.IsEOF();)
  {
    //Runs the "NowMDdemo" tested application.
    TestedApps.NowMDdemo.Run(1, true);
    //Enters KeywordTests.Login.Variables.Var2("Username") in the 'edLoginName' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edLoginName.Keys(Project.Variables.Var2.Value("Username"));
    //Enters KeywordTests.Login.Variables.Var2("password") in the 'edPassword' object.
    Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.edPassword.Keys(Project.Variables.Var2.Value("password"));
    OCR.Recognize(Aliases.NowMDdemo.formUserLogin.panelMain.panelLogin.btnLogin).BlockByText("Login").Click();
    //Closes the 'formMain' window.
    Aliases.NowMDdemo.formMain.Close();
    Project.Variables.Var2.Next();
  }
} */
}