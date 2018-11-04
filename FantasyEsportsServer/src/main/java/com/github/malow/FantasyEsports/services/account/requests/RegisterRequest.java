package com.github.malow.FantasyEsports.services.account.requests;

import com.github.malow.malowlib.network.https.HttpRequest;

public class RegisterRequest implements HttpRequest
{
  public String email;
  public String displayName;
  public String password;

  public RegisterRequest(String email, String displayName, String password)
  {
    this.email = email;
    this.displayName = displayName;
    this.password = password;
  }

  @Override
  public boolean isValid()
  {
    if (this.email == null || this.email.isEmpty())
    {
      return false;
    }
    if (this.displayName == null || this.displayName.isEmpty())
    {
      return false;
    }
    if (this.password == null || this.password.isEmpty())
    {
      return false;
    }

    return true;
  }
}
