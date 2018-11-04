package com.github.malow.FantasyEsports.services.account.requests;

import com.github.malow.malowlib.network.https.HttpRequest;

public class LoginRequest implements HttpRequest
{
  public String email;
  public String password;

  public LoginRequest(String email, String password)
  {
    this.email = email;
    this.password = password;
  }

  @Override
  public boolean isValid()
  {
    if (this.email == null || this.email.isEmpty())
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
