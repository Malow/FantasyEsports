package com.github.malow.FantasyEsports.services.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.github.malow.FantasyEsports.services.GeneralExceptions.UnauthorizedException;

@Component
public class AccountService
{
  @Autowired
  private AccountRepository repository;

  public Account authorize(String sessionKey)
  {
    if (sessionKey == null || sessionKey.isEmpty())
    {
      throw new UnauthorizedException();
    }
    Account account = this.repository.findBySessionKey(sessionKey);
    if (account == null)
    {
      throw new UnauthorizedException();
    }
    return account;
  }
}
