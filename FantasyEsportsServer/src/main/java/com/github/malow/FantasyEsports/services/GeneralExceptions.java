package com.github.malow.FantasyEsports.services;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GeneralExceptions
{
  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Badly formed json-request or missing mandatory parameters")
  public static class BadRequestException extends RuntimeException
  {
  }

  @ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "You do not have permission to do that")
  public static class UnauthorizedException extends RuntimeException
  {
  }
}
