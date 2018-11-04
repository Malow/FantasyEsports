package com.github.malow.FantasyEsports.services.account.responses;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class AccountExceptions
{
  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Email is already taken")
  public static class RegisterEmailTakenException extends RuntimeException
  {
  }

  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "DisplayName is already taken")
  public static class RegisterDisplayNameTakenException extends RuntimeException
  {
  }

  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "No account for that email exists")
  public static class LoginEmailNotRegisteredException extends RuntimeException
  {
  }

  @ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Wrong password")
  public static class LoginWrongPasswordException extends RuntimeException
  {
  }
}
