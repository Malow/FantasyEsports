package com.github.malow.FantasyEsports.services.league;

import org.springframework.data.annotation.Id;

public class League
{
  @Id
  private String id;

  private String name;
  private String ownerDisplayName;

  public League(String name, String ownerDisplayName)
  {
    this.name = name;
    this.ownerDisplayName = ownerDisplayName;
  }

  public String getName()
  {
    return this.name;
  }

}
