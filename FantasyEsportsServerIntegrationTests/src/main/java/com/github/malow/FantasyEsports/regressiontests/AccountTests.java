package com.github.malow.FantasyEsports.regressiontests;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

import com.github.malow.FantasyEsports.FantasyEsportsTestFixture;
import com.github.malow.FantasyEsports.ServerConnection;

public class AccountTests extends FantasyEsportsTestFixture
{
  @Test
  public void testRegisterSuccessfully() throws Exception
  {
    String responseBody = ServerConnection.register(new TestUser("tester123@test.com", "tester123", "tester123pw", null));
    assertThat(responseBody).containsPattern("\\{\"sessionKey\":\"([0-9a-f-]+)\"\\}");
  }

  @Test
  public void testRegisterEmailInUse() throws Exception
  {
    ServerConnection.register(new TestUser("tester123@test.com", "tester123", "tester123pw", null));
    String responseBody = ServerConnection.register(new TestUser("tester123@test.com", "tester123", "tester123pw", null));
    assertThat(responseBody).contains("Email is already taken");
    assertThat(responseBody).contains("\"status\":400");
  }

  @Test
  public void testRegisterDisplayNameInUse() throws Exception
  {
    ServerConnection.register(new TestUser("tester123@test.com", "tester123", "tester123pw", null));
    String responseBody = ServerConnection.register(new TestUser("tester1234@test.com", "tester123", "tester123pw", null));
    assertThat(responseBody).contains("DisplayName is already taken");
    assertThat(responseBody).contains("\"status\":400");
  }

  @Test
  public void testLoginSuccessfully() throws Exception
  {
    String responseBody = ServerConnection.login(PRE_REGISTERED_USER1);
    assertThat(responseBody).containsPattern("\\{\"sessionKey\":\"([0-9a-f-]+)\"\\}");
  }
}