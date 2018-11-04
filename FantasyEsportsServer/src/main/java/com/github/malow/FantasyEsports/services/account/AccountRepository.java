package com.github.malow.FantasyEsports.services.account;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository<Account, String>
{
  public Account findByDisplayName(String displayName);

  public Account findByEmail(String email);

  public Account findBySessionKey(String sessionKey);
}
