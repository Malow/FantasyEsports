package com.github.malow.FantasyEsports;

import com.github.malow.FantasyEsports.FantasyEsportsTestFixture.TestUser;
import com.github.malow.FantasyEsports.services.account.requests.LoginRequest;
import com.github.malow.FantasyEsports.services.account.requests.RegisterRequest;
import com.github.malow.FantasyEsports.services.league.requests.CreateLeagueRequest;
import com.github.malow.malowlib.GsonSingleton;
import com.github.malow.malowlib.network.https.HttpPostClient;
import com.mashape.unirest.http.Unirest;

public class ServerConnection
{
  public static final HttpPostClient httpsClient = new HttpPostClient(Config.HOST, true);

  public static String login(TestUser user) throws Exception
  {
    return httpsClient.sendMessage("/account/login", new LoginRequest(user.email, user.password));
  }

  public static String register(TestUser user) throws Exception
  {
    return httpsClient.sendMessage("/account/register", new RegisterRequest(user.email, user.displayName, user.password));
  }

  public static String createLeague(String name, String sessionKey) throws Exception
  {
    return Unirest.post(Config.HOST + "/league").header("Session-Key", sessionKey).body(GsonSingleton.toJson(new CreateLeagueRequest(name))).asJson()
        .getBody().toString();
  }
}
