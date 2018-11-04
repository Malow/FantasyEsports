package com.github.malow.FantasyEsports.services.account;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.github.malow.FantasyEsports.services.Controller;
import com.github.malow.FantasyEsports.services.account.requests.LoginRequest;
import com.github.malow.FantasyEsports.services.account.requests.RegisterRequest;
import com.github.malow.FantasyEsports.services.account.responses.AccountExceptions.LoginEmailNotRegisteredException;
import com.github.malow.FantasyEsports.services.account.responses.AccountExceptions.LoginWrongPasswordException;
import com.github.malow.FantasyEsports.services.account.responses.AccountExceptions.RegisterEmailTakenException;
import com.github.malow.FantasyEsports.services.account.responses.AccountExceptions.RegisterDisplayNameTakenException;
import com.github.malow.FantasyEsports.services.account.responses.LoginResponse;

@RestController
public class AccountController extends Controller
{
  @Autowired
  private AccountRepository repository;

  @PostMapping(value = { "/account/register" })
  public LoginResponse register(@RequestBody String payload)
  {
    RegisterRequest request = this.getValidRequest(payload, RegisterRequest.class);
    if (this.repository.findByEmail(request.email) != null)
    {
      throw new RegisterEmailTakenException();
    }
    if (this.repository.findByDisplayName(request.displayName) != null)
    {
      throw new RegisterDisplayNameTakenException();
    }
    Account account = new Account(request.email, request.displayName, PasswordHandler.hashPassword(request.password));
    String sessionKey = UUID.randomUUID().toString();
    account.setSessionKey(sessionKey);
    this.repository.insert(account);
    return new LoginResponse(sessionKey);
  }

  @PostMapping(value = { "/account/login" })
  public LoginResponse login(@RequestBody String payload)
  {
    LoginRequest request = this.getValidRequest(payload, LoginRequest.class);
    Account account = this.repository.findByEmail(request.email);
    if (account == null)
    {
      throw new LoginEmailNotRegisteredException();
    }
    if (PasswordHandler.checkPassword(request.password, account.getPassword()))
    {
      String sessionKey = UUID.randomUUID().toString();
      account.setSessionKey(sessionKey);
      this.repository.save(account);
      return new LoginResponse(sessionKey);
    }
    else
    {
      throw new LoginWrongPasswordException();
    }
  }
}