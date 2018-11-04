package com.github.malow.FantasyEsports.services.league.responses;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class LeagueExceptions
{
  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Name is already taken")
  public static class CreateNameTakenException extends RuntimeException
  {
  }
}
