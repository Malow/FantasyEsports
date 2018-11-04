package com.github.malow.FantasyEsports.regressiontests;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

import com.github.malow.FantasyEsports.FantasyEsportsTestFixture;
import com.github.malow.FantasyEsports.ServerConnection;

public class LeagueTests extends FantasyEsportsTestFixture
{
  @Test
  public void testCreateLeagueSuccessfully() throws Exception
  {
    String responseBody = ServerConnection.createLeague("test123", PRE_REGISTERED_USER1.sessionKey);
    assertThat(responseBody).isEqualTo("{}");
  }
}