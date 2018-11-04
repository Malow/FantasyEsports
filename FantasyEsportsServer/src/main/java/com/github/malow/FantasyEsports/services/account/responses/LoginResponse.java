package com.github.malow.FantasyEsports.services.account.responses;

public class LoginResponse
{
  public String sessionKey;

  public LoginResponse(String sessionKey)
  {
    this.sessionKey = sessionKey;
  }
}
