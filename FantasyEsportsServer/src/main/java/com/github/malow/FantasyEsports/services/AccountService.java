package com.github.malow.FantasyEsports.services;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountService
{
  @RequestMapping("/")
  public String index()
  {
    return "Greetings from Spring Boot!";
  }
}