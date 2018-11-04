package com.github.malow.FantasyEsports;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.junit.Before;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

public class FantasyEsportsTestFixture
{
  public static class TestUser
  {
    public String email;
    public String displayName;
    public String password;
    public String sessionKey;

    public TestUser(String email, String displayName, String password, String sessionKey)
    {
      this.email = email;
      this.displayName = displayName;
      this.password = password;
      this.sessionKey = sessionKey;
    }
  }

  public static final TestUser PRE_REGISTERED_USER1 = new TestUser("tester1@test.com", "tester1", "testerpw", null);
  public static final TestUser PRE_REGISTERED_USER2 = new TestUser("tester2@test.com", "tester2", "testerpw", null);

  @Before
  public void beforeTest() throws Exception
  {
    this.resetDatabase();
    this.preRegisterAccounts();
  }

  private static final String URL = "mongodb+srv://admin:asdf@cluster0-u4tzo.mongodb.net/test?retryWrites=true";
  public static MongoClient mongo = new MongoClient(new MongoClientURI(URL));
  public static MongoDatabase database = mongo.getDatabase("FantasyEsports");

  private void resetDatabase() throws Exception
  {
    database.getCollection("account").drop();
    database.getCollection("league").drop();
  }

  private void preRegisterAccounts() throws Exception
  {
    String response = ServerConnection.register(PRE_REGISTERED_USER1);
    Matcher matcher = Pattern.compile("\\{\"sessionKey\":\"([0-9a-f-]+)\"\\}").matcher(response);
    matcher.find();
    PRE_REGISTERED_USER1.sessionKey = matcher.group(1);

    response = ServerConnection.register(PRE_REGISTERED_USER2);
    matcher = Pattern.compile("\\{\"sessionKey\":\"([0-9a-f-]+)\"\\}").matcher(response);
    matcher.find();
    PRE_REGISTERED_USER2.sessionKey = matcher.group(1);
  }
}
