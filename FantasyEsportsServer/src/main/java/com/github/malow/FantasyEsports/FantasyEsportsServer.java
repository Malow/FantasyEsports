package com.github.malow.FantasyEsports;

import java.util.HashMap;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@EnableAutoConfiguration
@SpringBootApplication
public class FantasyEsportsServer extends SpringBootServletInitializer
{
  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application)
  {
    return application.sources(FantasyEsportsServer.class);
  }

  public static void main(String[] args)
  {
    HashMap<String, Object> props = new HashMap<>();
    props.put("server.port", 8443);
    props.put("spring.jackson.serialization.WRITE_DATES_AS_TIMESTAMPS", false);
    new SpringApplicationBuilder()
        .sources(FantasyEsportsServer.class)
        .properties(props)
        .run(args);
  }
}
