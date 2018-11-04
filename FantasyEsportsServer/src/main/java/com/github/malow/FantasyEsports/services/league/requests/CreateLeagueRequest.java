package com.github.malow.FantasyEsports.services.league.requests;

import com.github.malow.malowlib.network.https.HttpRequest;

public class CreateLeagueRequest implements HttpRequest
{
  public String name;

  public CreateLeagueRequest(String name)
  {
    this.name = name;
  }

  @Override
  public boolean isValid()
  {
    if (this.name == null || this.name.isEmpty())
    {
      return false;
    }

    return true;
  }
}
